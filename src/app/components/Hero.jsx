import Image from "next/image";
import OfficeImage from "../images/5562385_21404.jpg"; // Replace with your actual image path

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-blue-600 mt-[90px] h-auto md:h-screen flex items-center justify-center"
    >
      {/* Left Section (Text content) */}
      <div className="text-white w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center px-4">
        <div className="w-full md:w-1/2 p-4 md:p-6 space-y-4 md:space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Empower Your Workforce with Efficient HR Solutions
          </h1>
          <p className="text-base md:text-lg">
            Manage your teams effortlessly, streamline recruitment, and enhance
            employee satisfaction with our comprehensive HR management system.
          </p>
          <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold">
              Explore Features
            </button>
            <button className="border border-white px-6 py-3 rounded-full text-white font-semibold">
              Get Started Today
            </button>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 relative">
          <Image
            src={OfficeImage.src} // Use .src for the Image component
            alt="HR professionals collaborating in an office"
            width={500} // Set the desired width and height
            height={500}
            className="rounded-lg shadow-lg object-cover w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
