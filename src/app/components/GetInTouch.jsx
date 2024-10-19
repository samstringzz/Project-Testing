export default function GetInTouch() {
  return (
    <section id="appointment" className="py-16 bg-blue-50">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-wrap justify-between items-start">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold text-blue-900">Get In Touch</h2>
            <p className="text-blue-700">
              If you have any questions, feel free to reach out. We're here to
              help you.
            </p>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <span className="bg-blue-100 p-4 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14v7m0 0H5m7 0h7"
                    />
                  </svg>
                </span>
                <div>
                  <p className="text-blue-900 font-semibold">Email</p>
                  <p className="text-blue-700">help@yourdomain.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="bg-blue-100 p-4 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 10l7 7m0 0l7-7m-7 7V3"
                    />
                  </svg>
                </span>
                <div>
                  <p className="text-blue-900 font-semibold">Phone</p>
                  <p className="text-blue-700">+123-456-7890</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="bg-blue-100 p-4 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0v7"
                    />
                  </svg>
                </span>
                <div>
                  <p className="text-blue-900 font-semibold">Address</p>
                  <p className="text-blue-700">123 Street, City, Country</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section: Contact Form */}
          <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Contact Us
            </h3>
            <form>
              <div className="mb-4">
                <label className="block text-blue-900 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full p-3 border border-blue-200 rounded-lg"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-blue-900 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-3 border border-blue-200 rounded-lg"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-blue-900 mb-2">Message</label>
                <textarea
                  className="w-full p-3 border border-blue-200 rounded-lg"
                  placeholder="Your message"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
