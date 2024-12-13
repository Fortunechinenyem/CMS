import dbConnect from "@/lib/db";
import Content from "@/models/Content";

export async function getServerSideProps({ params }) {
  await dbConnect();
  const content = await Content.findOne({ slug: params.slug }).lean();
  return { props: { content: JSON.parse(JSON.stringify(content)) } };
}

export default function ContentPage({ content }) {
  return (
    <div>
      <h1>{content.title}</h1>
      <p>{content.body}</p>
    </div>
  );
}
