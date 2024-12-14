export default function Features() {
  const features = [
    {
      title: "Role-Based Access",
      description:
        "Grant permissions and control content visibility with advanced role management.",
      //   icon: "/icon1.svg",
    },
    {
      title: "SEO Tools",
      description:
        "Optimize your content for search engines with built-in SEO features.",
      //   icon: "/icon2.svg",
    },
    {
      title: "Content Versioning",
      description: "Track changes and restore previous versions with ease.",
      //   icon: "/icon3.svg",
    },
  ];

  return (
    <div className="bg-gray-50">
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800">Features</h1>
            <p className="mt-4 text-gray-600">
              Everything you need to manage content effectively.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
              >
                {/* <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-16 h-16 mb-4"
                /> */}
                <h3 className="text-xl font-bold text-gray-800">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
