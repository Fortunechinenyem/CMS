export default function Contact() {
  return (
    <div className="bg-gray-400">
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
            <p className="mt-4 text-gray-600">
              We’d love to hear from you! Get in touch with us for any queries
              or support.
            </p>
          </div>
          <form className="text-center max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <div className="grid gap-6 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 border rounded-lg"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border rounded-lg"
              />
            </div>
            <textarea
              placeholder="Message"
              className="w-full mt-6 px-4 py-3 border rounded-lg h-40"
            ></textarea>
            <button
              type="submit"
              className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
