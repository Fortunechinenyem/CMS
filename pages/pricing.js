export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "N15,000/month",
      features: ["Basic CMS features", "1 admin account", "Standard support"],
    },
    {
      name: "Pro",
      price: "N25,000/month",
      features: [
        "Advanced CMS features",
        "5 admin accounts",
        "Priority support",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom Pricing",
      features: ["Unlimited access", "Dedicated support", "Custom features"],
    },
  ];

  return (
    <div className="bg-gray-50">
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-800">Pricing</h1>
          <p className="mt-4 text-gray-600">
            Flexible plans to suit your needs.
          </p>
          <div className="grid gap-8 mt-12 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
              >
                <h3 className="text-xl font-bold text-gray-800">{plan.name}</h3>
                <p className="text-2xl font-bold mt-4">{plan.price}</p>
                <ul className="mt-6 space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-600">
                      • {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                  Select Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
