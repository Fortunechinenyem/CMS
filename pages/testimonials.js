import Image from "next/image";
import Link from "next/link";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Uru Chikwa",
      role: "Content Strategist",
      feedback:
        "This CMS transformed the way we manage content. The simplicity and power are unmatched!",
      image: "/images/cms (1).png",
    },
    {
      name: "Ebelebe Ogidi",
      role: "Web Developer",
      feedback:
        "Role-based access made team collaboration so much easier. Highly recommend this CMS!",
      image: "/images/cms (1).png",
    },
    {
      name: "Aina Wasabi",
      role: "Marketing Manager",
      feedback:
        "I love how SEO optimization is built-in. Our traffic has increased significantly since using this CMS.",
      image: "/images/cms (1).png",
    },
  ];

  return (
    <div>
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold sm:text-5xl">What Our Users Say</h1>
          <p className="mt-4 text-lg text-gray-300">
            Real stories from our satisfied users who have experienced the
            difference.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition"
              >
                <div className="w-24 h-24 mx-auto mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={96}
                    height={96}
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-indigo-600">{testimonial.role}</p>
                <p className="mt-4 text-gray-600 italic">
                  &ldquo;{testimonial.feedback}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-indigo-600 text-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Join Our Happy Users Today!</h2>
          <p className="mt-4 text-lg">
            Be part of a community that’s simplifying content management.
          </p>
          <div className="mt-6">
            <Link
              href="/signup"
              className="px-6 py-3 bg-white text-indigo-600 font-bold rounded-lg hover:bg-gray-200 transition"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
