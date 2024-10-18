export default function Testimonial() {
  return (
    <section className="container mx-auto py-16 px-6 md:px-12 lg:px-24 bg-blue-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Text Section */}
        <div>
          <h5 className="text-blue-600 font-semibold mb-4">Testimonial</h5>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            What They Say ?
          </h2>
          <p className="text-gray-500 mb-8">
            Vestibulum sit amet odio dui. Integer eleifend nibh massa, nec
            vehicula metus efficitur non. Pellentesque iaculis tincidunt purus,
            eleifend interdum arcu tempor ac.
          </p>
        </div>

        {/* Right Testimonial Section */}
        <div className="relative bg-white p-6 rounded-lg shadow-lg">
          {/* Testimonial Text */}
          <div className="flex items-start mb-6">
            <span className="text-4xl text-blue-600 font-bold mr-4">“</span>
            <p className="text-gray-700">
              Sed dignissim faucibus venenatis. Proin eu odio magna. Nunc eget
              ex rhoncus, commodo sem sed, placerat est. Donec id eleifend
              lectus.
            </p>
          </div>
          {/* Author Info */}
          <div className="flex items-center mt-6">
            <img
              src="/path/to/profile.jpg" // Replace with actual image path
              alt="Testimonial Author"
              className="w-16 h-16 rounded-full object-cover border-2 border-gray-300 shadow-lg"
            />
            <div className="ml-4">
              <p className="font-bold text-blue-600">Elsa Verina</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
