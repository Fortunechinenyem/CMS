import { useRouter } from "next/router";
import { useState } from "react";

export default function Pricing() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      id: "basic",
      name: "Basic",
      price: "₦15,000/month",
      features: ["Basic CMS features", "1 admin account", "Standard support"],
    },
    {
      id: "pro",
      name: "Pro",
      price: "₦25,000/month",
      features: [
        "Advanced CMS features",
        "5 admin accounts",
        "Priority support",
      ],
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "Custom Pricing",
      features: ["Unlimited access", "Dedicated support", "Custom features"],
    },
  ];

  const handlePlanSelect = (planId) => {
    setSelectedPlan(planId);
    router.push(`/checkout?plan=${planId}`);
  };

  return (
    <div className="bg-gray-50">
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-800">Pricing</h1>
          <p className="mt-4 text-gray-600">
            Flexible plans to suit your needs.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition ${
                  selectedPlan === plan.id ? "ring-2 ring-indigo-600" : ""
                }`}
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
                <button
                  onClick={() => handlePlanSelect(plan.id)}
                  className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                >
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
