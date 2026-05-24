const Contact = () => {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">
          Contact Us
        </h1>

        <div className="bg-gray-100 rounded-xl p-8 shadow-md">
          <form className="space-y-6">
            <div>
              <label className="block mb-2 font-medium">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border rounded-lg p-3"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border rounded-lg p-3"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Message
              </label>

              <textarea
                rows="5"
                placeholder="Write your message"
                className="w-full border rounded-lg p-3"
              ></textarea>
            </div>

            <button
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;