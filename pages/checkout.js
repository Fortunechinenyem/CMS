import { useRouter } from "next/router";

export default function Checkout() {
  const router = useRouter();
  const { plan } = router.query;

  return (
    <div className="container mx-auto px-6 py-12 text-center">
      <h1 className="text-4xl font-bold">Checkout</h1>
      {plan ? (
        <p className="mt-4 text-gray-600">
          You selected the <strong>{plan}</strong> plan.
        </p>
      ) : (
        <p className="mt-4 text-gray-600">No plan selected.</p>
      )}
      <button
        className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        onClick={() => alert(`Proceeding with the ${plan} plan`)}
      >
        Proceed to Payment
      </button>
    </div>
  );
}
