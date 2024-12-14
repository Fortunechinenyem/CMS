export default function About() {
  return (
    <div className="bg-white">
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="mt-4 text-lg text-gray-300">
            We’re passionate about simplifying content management for teams of
            all sizes.
          </p>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-6 grid gap-12 lg:grid-cols-2 items-center">
          {/* <img src="/about-image.svg" alt="Our Vision" className="w-full" /> */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
            <p className="mt-4 text-gray-600">
              To provide a robust platform that empowers businesses to manage
              content with ease, focus on growth, and connect better with their
              audience.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
