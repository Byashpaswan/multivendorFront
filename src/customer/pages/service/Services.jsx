const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-gray-800">
          Our Services
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-3">
              Online Shopping
            </h2>

            <p className="text-gray-600">
              Shop from thousands of products across multiple categories.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-3">
              Fast Shipping
            </h2>

            <p className="text-gray-600">
              Reliable and quick delivery services nationwide.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-3">
              Easy Returns
            </h2>

            <p className="text-gray-600">
              Hassle-free return and refund policy for customers.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-3">
              Customer Support
            </h2>

            <p className="text-gray-600">
              Dedicated support team available 24/7.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;