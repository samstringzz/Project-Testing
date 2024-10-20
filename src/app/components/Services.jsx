import Image from "../images/2108.i039.013.F.m004.c9.HR recruitment hiring isometric.jpg";
import Worker from "../images/pngegg (1).png";
import Workker2 from "../images/pngegg (2).png";
import Worker3 from "../images/pngegg (3).png";
import Worker4 from "../images/pngegg (4).png";
import Worker5 from "../images/pngegg (5).png";
import Worker6 from "../images/pngegg (6).png";
import Worker7 from "../images/pngegg (7).png";
import Worker8 from "../images/pngegg (8).png";

export default function Services() {
  return (
    <section id="services" className="py-16 bg-blue-20">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Top Categories Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900">Our HR Services</h2>
          <p className="text-blue-600 mt-4">
            Discover a variety of services tailored to enhance your human
            resource management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Individual Service Item */}
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="p-4 rounded-lg shadow-lg text-center bg-blue-100 hover:transform hover:scale-105 hover:shadow-xl transition-transform duration-300"
            >
              <div className="p-6 inline-block bg-blue-200 rounded-full">
                <img
                  src={service.icon}
                  alt={`${service.title} icon`}
                  className="h-8 w-8"
                />
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mt-4">
                {service.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Image and Description Section */}
        <div className="flex flex-wrap mt-16 justify-between items-center">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 relative">
            <img
              src={Image.src} // Replace with actual image URL
              alt="HR Service"
              className="rounded-lg shadow-lg w-[404px]"
            />
            {/* Circular Icon */}
            <div className="absolute top-0 right-0 w-12 h-12 rounded-full bg-blue-500"></div>
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-12">
            <h3 className="text-3xl font-bold text-blue-900">
              Elevate Your HR Management
            </h3>
            <p className="text-blue-600 mt-4">
              With our expert guidance and resources, your team can reach new
              heights in HR management.
            </p>
            <ul className="mt-6 space-y-2">
              <li className="text-blue-700">
                <span className="font-semibold text-blue-600">✓</span> HR
                Consulting
              </li>
              <li className="text-blue-700">
                <span className="font-semibold text-blue-600">✓</span> Talent
                Acquisition
              </li>
              <li className="text-blue-700">
                <span className="font-semibold text-blue-600">✓</span> Employee
                Training
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const servicesData = [
  {
    title: "Recruitment Services",
    icon: Worker.src,
  },
  {
    title: "Employee Training",
    icon: Workker2.src,
  },
  {
    title: "Payroll Management",
    icon: Worker3.src,
  },
  {
    title: "HR Consulting",
    icon: Worker4.src,
  },
  {
    title: "Compliance Services",
    icon: Worker5.src,
  },
  {
    title: "Workforce Planning",
    icon: Worker6.src,
  },
  {
    title: "Performance Management",
    icon: Worker7.src,
  },
  {
    title: "Employee Relations",
    icon: Worker8.src,
  },
];
