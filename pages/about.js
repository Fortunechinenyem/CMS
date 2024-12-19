import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="bg-white">
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl">About Us</h1>
          <p className="mt-4 text-lg text-gray-300">
            Empowering teams worldwide to create, manage, and scale content
            seamlessly.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our mission is to provide a cutting-edge content management
              platform that empowers businesses to focus on growth. We aim to
              make content management seamless, scalable, and secure for teams
              of all sizes.
            </p>
          </div>
          <img
            src="/images/cms (2).PNG"
            alt="Our Mission"
            width={100}
            height={100}
            className="w-full max-w-md mx-auto lg:max-w-full"
          />
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 grid gap-12 lg:grid-cols-2 items-center">
          <Image
            src="/images/cms (3).PNG"
            alt="Our Vision"
            width={100}
            height={100}
            className="w-full max-w-md mx-auto lg:max-w-full"
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We envision a world where content management is intuitive,
              effortless, and accessible to everyone. By leveraging the latest
              technologies, we strive to redefine how businesses interact with
              their audiences.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Our Core Values</h2>
          <p className="mt-4 text-gray-600">
            These principles guide our journey and fuel our commitment to
            excellence.
          </p>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <ValueCard
              title="Innovation"
              description="We embrace innovation to build solutions that stand the test of time."
              icon={<InnovationIcon />}
            />
            <ValueCard
              title="Collaboration"
              description="We believe great things happen when people work together seamlessly."
              icon={<CollaborationIcon />}
            />
            <ValueCard
              title="Integrity"
              description="Transparency and trust are at the heart of everything we do."
              icon={<IntegrityIcon />}
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Why Choose Us?</h2>
          <p className="mt-4 text-lg text-gray-300">
            Discover what sets us apart from the rest.
          </p>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">User-Centric Design</h3>
              <p className="mt-2 text-gray-400">
                Our platform is built with the user in mind, ensuring ease of
                use at every step.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">Scalable Solutions</h3>
              <p className="mt-2 text-gray-400">
                Scale effortlessly as your business grows without compromising
                performance.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">Global Impact</h3>
              <p className="mt-2 text-gray-400">
                Trusted by businesses worldwide to create meaningful connections
                with their audiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-indigo-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Join Our Journey</h2>
          <p className="mt-4 text-lg">
            Be part of the revolution in content management. Together, we can
            achieve greatness.
          </p>
          <div className="mt-6">
            <Link
              href="/signup"
              className="px-6 py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-200 transition"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function ValueCard({ title, description, icon }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
      <div className="text-indigo-500 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
}

function InnovationIcon() {
  return (
    <div className="w-12 h-12 bg-indigo-500 text-white rounded-full flex items-center justify-center">
      💡
    </div>
  );
}

function CollaborationIcon() {
  return (
    <div className="w-12 h-12 bg-indigo-500 text-white rounded-full flex items-center justify-center">
      🤝
    </div>
  );
}

function IntegrityIcon() {
  return (
    <div className="w-12 h-12 bg-indigo-500 text-white rounded-full flex items-center justify-center">
      🛡️
    </div>
  );
}
