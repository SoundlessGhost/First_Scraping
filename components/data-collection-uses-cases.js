import React from "react";

const DataCollectionUsesCases = () => {
  return (
    <div>
      <section className="py-28 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Data Collection Uses Cases
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Data is just the first step — here’s how our scraping APIs can power
          smarter business decisions.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto px-4">
          <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Ecommerce Scraper API
            </h3>
            <p className="text-gray-700 text-sm mb-4">
              Track product availability, price changes, and marketplace trends
              from any ecommerce platform.
            </p>
            <a
              href="#"
              className="inline-block bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 text-sm font-medium"
            >
              LEARN MORE
            </a>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Market Research Scraper API
            </h3>
            <p className="text-gray-700 text-sm mb-4">
              Automate the collection of competitor insights, user reviews, and
              product performance data.
            </p>
            <a
              href="#"
              className="inline-block bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 text-sm font-medium"
            >
              LEARN MORE
            </a>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              SERP Scraper API
            </h3>
            <p className="text-gray-700 text-sm mb-4">
              Extract accurate search engine results for SEO audits, keyword
              analysis, and rank tracking.
            </p>
            <a
              href="#"
              className="inline-block bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 text-sm font-medium"
            >
              LEARN MORE
            </a>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Real Estate Scraper API
            </h3>
            <p className="text-gray-700 text-sm mb-4">
              Capture dynamic property listings, pricing trends, and agent data
              from real estate platforms.
            </p>
            <a
              href="#"
              className="inline-block bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 text-sm font-medium"
            >
              LEARN MORE
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataCollectionUsesCases;
