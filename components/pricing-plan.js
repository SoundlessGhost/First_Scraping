// components/PricingPlans.tsx

import clsx from "clsx";

const plans = [
  {
    name: "Free 14 day trial",
    price: "$0",
    popular: false,
    features: [
      "1,000 basic results",
      "40 protected results",
      "1,000 protected API results",
      "100 MB scraping browser usage",
    ],
    button: "Try for Free",
  },
  {
    name: "Developer",
    price: "$69",
    popular: false,
    features: [
      "250K basic results",
      "10K protected results",
      "66.7K protected API results",
      "12.73 GB scraping usage",
    ],
    button: "Try for Free",
  },
  {
    name: "Startup",
    price: "$129",
    popular: false,
    features: [
      "1M basic results",
      "40K protected results",
      "130K protected API results",
      "24.76 GB scraping usage",
    ],
    button: "Try for Free",
  },
  {
    name: "Business",
    price: "$299",
    popular: true,
    features: [
      "3M basic results",
      "120K protected results",
      "315.8K protected API results",
      "60 GB scraping usage",
    ],
    button: "Try for Free",
  },
];

export default function PricingPlans() {
  return (
    <section className="px-4 md:px-12 bg-white text-center">
      <h2 className="text-4xl font-bold mb-2">Pricing Plans</h2>
      <p className="text-muted-foreground mb-10">
        Unlock all features with one subscription
      </p>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={clsx(
              "rounded-xl border p-6 shadow-sm transition-all duration-300",
              plan.popular && "border-blue-500 shadow-lg"
            )}
          >
            {plan.popular && (
              <div className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full w-max mb-3">
                Most Popular
              </div>
            )}

            <h3 className="text-lg font-semibold mb-1">{plan.name}</h3>
            <p className="text-3xl font-bold mb-4">
              {plan.price}
              <span className="text-sm font-normal text-muted-foreground">
                {" "}
                /month
              </span>
            </p>

            <ul className="text-left space-y-2 text-sm text-muted-foreground mb-6">
              {plan.features.map((feature, idx) => (
                <li key={idx}>• {feature}</li>
              ))}
            </ul>

            <button
              className={clsx(
                "w-full py-2 text-sm font-medium rounded-md transition",
                plan.popular
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : "border border-border hover:bg-accent"
              )}
            >
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
