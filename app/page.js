"use client";
import { Hero } from "@/public/images";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <section className="relative bg-gray-900 text-white">
        <div className="container mx-auto px-6 py-16 lg:flex lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl leading-tight">
              Build & Manage Content <br />
              <span className="text-indigo-500">With Ease</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              Empower your team to create, edit, and publish content
              effortlessly with our Custom CMS.
            </p>
            <div className="mt-8 flex gap-4">
              <Link
                href="/signup"
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition"
              >
                Get Started
              </Link>
              <Link
                href="#features"
                className="px-6 py-3 bg-gray-800 border border-gray-600 rounded-lg hover:bg-gray-700 transition"
              >
                Learn More
              </Link>
            </div>
          </div>

          <motion.div
            className="mt-10 lg:mt-0"
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              type: "spring",
              stiffness: 80,
            }}
            whileHover={{
              scale: 1.05,
              rotate: 1,
              transition: { duration: 0.3 },
            }}
          >
            <Image
              src={Hero}
              alt="CMS Illustration"
              className="w-full max-w-md mx-auto lg:max-w-lg"
            />
          </motion.div>
        </div>
      </section>

      <section id="features" className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              Features That Make Us Stand Out
            </h2>
            <p className="mt-4 text-gray-600">
              Discover why our CMS is the perfect solution for your content
              management needs.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="SEO Optimized"
              description="Boost your website's ranking with built-in SEO-friendly features."
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-12 h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3.75L21.75 9.75v10.5A2.25 2.25 0 0119.5 22.5h-15a2.25 2.25 0 01-2.25-2.25V9.75L12 3.75z"
                  />
                </svg>
              }
            />
            <FeatureCard
              title="Role-Based Access"
              description="Control who sees and edits your content with advanced permissions."
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-12 h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 6.75v-2.5a.75.75 0 011.5 0v2.5a2.25 2.25 0 002.25 2.25h2.5a.75.75 0 010 1.5h-2.5a2.25 2.25 0 00-2.25 2.25v2.5a.75.75 0 01-1.5 0v-2.5A2.25 2.25 0 008.25 10.5h-2.5a.75.75 0 010-1.5h2.5A2.25 2.25 0 0010.5 6.75z"
                  />
                </svg>
              }
            />
            <FeatureCard
              title="Effortless Publishing"
              description="Publish your content in just a few clicks with our streamlined workflow."
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-12 h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 15.75h15m-15 0l4.5-9.75M4.5 15.75L9 6m6 9.75h4.5m-4.5 0L12 6"
                  />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Affordable Pricing
          </h2>
          <p className="mt-4 text-gray-600">
            Choose the plan that fits your needs. No hidden fees.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-indigo-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">What Our Users Are Saying</h2>
          <p className="mt-4 text-lg">Real feedback from real users.</p>
          <div className="mt-8">
            <Link
              href="/testimonials"
              className="px-6 py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-200 transition"
            >
              See Testimonials
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
          <p className="mt-4 text-lg">
            Sign up today and experience the power of our Custom CMS.
          </p>
          <div className="mt-6">
            <Link
              href="/signup"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ title, description, icon }) {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition">
      <div className="text-indigo-500 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
}
