const About = () => {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">
          About CapitalMart
        </h1>

        <p className="text-gray-600 text-lg leading-8 mb-6">
          CapitalMart is a modern e-commerce platform built to provide
          customers with a smooth and secure shopping experience.
        </p>

        <p className="text-gray-600 text-lg leading-8 mb-6">
          Our mission is to offer high-quality products, fast delivery,
          and excellent customer support.
        </p>

        <div className="bg-gray-100 rounded-xl p-6 mt-10">
          <h2 className="text-2xl font-semibold mb-4">
            Why Choose Us?
          </h2>

          <ul className="space-y-3 text-gray-700">
            <li>✔ Trusted by thousands of customers</li>
            <li>✔ Affordable pricing</li>
            <li>✔ Secure online payments</li>
            <li>✔ 24/7 customer support</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;