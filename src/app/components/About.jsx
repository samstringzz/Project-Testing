import Image1 from "../images/1.jpg";
import Image2 from "../images/meeting-corporate-success-business-brainstorming-t-2021-04-02-21-56-30-utc-1536x1024.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="container mx-auto py-16 px-6 md:px-12 lg:px-24"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Text Section */}
        <div>
          <h5 className="text-blue-600 font-semibold mb-4">About Us</h5>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Beyond Recruitment: Building Strong Teams
          </h2>
          <p className="text-gray-500 mb-8">
            We focus not just on hiring, but on fostering long-term employee
            success through a structured, data-driven approach. Our process
            ensures you hire the right candidates and keep them engaged.
          </p>

          {/* Process List */}
          <div className="space-y-8">
            <div className="flex items-start">
              <span className="text-4xl font-bold text-blue-600 mr-4">01</span>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Identify Ideal Candidate Profiles
                </h4>
                <p className="text-gray-500">
                  We analyze your company culture and goals to identify the
                  ideal profiles for your HR needs.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <span className="text-4xl font-bold text-blue-600 mr-4">02</span>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Precision Recruitment
                </h4>
                <p className="text-gray-500">
                  We use targeted recruitment strategies to ensure we find the
                  best fit for your team.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <span className="text-4xl font-bold text-blue-600 mr-4">03</span>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Data-Driven Assessment
                </h4>
                <p className="text-gray-500">
                  Our scientific assessment process helps evaluate candidates
                  based on data, ensuring high-quality hires.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative">
          {/* Image Container */}
          <div className="grid grid-cols-2 gap-4">
            <div className="row-span-2 relative">
              <img
                src={Image1.src}
                alt="Team collaboration"
                className="rounded-lg w-full h-full object-cover border-t-4 border-r-4 border-blue-600 image-1" // Animation class for image 1
              />
            </div>
            <div>
              <img
                src={Image2.src}
                alt="Corporate meeting"
                className="rounded-lg w-full h-full object-cover image-2" // Animation class for image 2
              />
            </div>
            <div className="relative">
              <img
                src={Image1.src}
                alt="Success celebration"
                className="rounded-lg w-full h-full object-cover border-b-4 border-l-4 border-blue-600 image-3" // Animation class for image 3
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
