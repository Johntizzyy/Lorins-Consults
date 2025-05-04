import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import img4450 from "../assets/1 (1).jpg";
import img4451 from "../assets/1 (1).jpg";
import img4453 from "../assets/1 (1).jpg";
import img4458 from "../assets/1 (1).jpg";
import img4459 from "../assets/1 (1).jpg";
import img4460 from "../assets/1 (1).jpg";
import img4461 from "../assets/1 (1).jpg";

const About = () => {
  const values = [
    {
      title: "Precision",
      description:
        "We maintain the highest standards of accuracy in all our surveying work, ensuring reliable data for our clients' projects.",
      icon: (
        <svg
          className="w-16 h-16 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          2
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Integrity",
      description:
        "We conduct our business with honesty, transparency, and ethical practices that build trust with our clients and partners.",
      icon: (
        <svg
          className="w-16 h-16 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "Excellence",
      description:
        "We strive for excellence in every project, continuously improving our methods and delivering superior results that exceed expectations.",
      icon: (
        <svg
          className="w-16 h-16 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
    },
  ];
  const team = [
    {
      name: "John Smith",
      role: "Lead Surveyor",
      description:
        "Over 15 years of experience in land surveying and project management. Specializes in cadastral surveying and major developments.",
      imageUrl: img4450,
    },
    {
      name: "Sarah Johnson",
      role: "GIS Specialist",
      description:
        "Expert in Geographic Information Systems and spatial data analysis. Master's degree in Geospatial Technology.",
      imageUrl: img4451,
    },
    {
      name: "Michael Brown",
      role: "Engineering Surveyor",
      description:
        "Specialized in construction and infrastructure surveying. Extensive experience in large-scale civil engineering projects.",
      imageUrl: img4453,
    },
    {
      name: "Emily Davis",
      role: "Project Manager",
      description:
        "Expert in project coordination and client relations. Ensures smooth execution of all surveying projects.",
      imageUrl: img4458,
    },
    {
      name: "David Wilson",
      role: "Topographic Specialist",
      description:
        "Specialized in detailed terrain mapping and elevation surveys. Advanced expertise in 3D modeling.",
      imageUrl: img4459,
    },
    {
      name: "Lisa Anderson",
      role: "Quality Control Manager",
      description:
        "Ensures all surveying work meets the highest standards of accuracy and compliance with industry regulations.",
      imageUrl: img4460,
    },
  ];

  const siteWorks = [
    {
      title: "Lagos Waterfront Project",
      description: "Boundary survey for a major waterfront development",
      imageUrl: img4450,
      size: "large",
      orientation: "landscape",
    },
    {
      title: "Abuja Residential Estate",
      description: "Topographic survey for a 50-acre residential development",
      imageUrl: img4451,
      size: "medium",
      orientation: "portrait",
    },
    {
      title: "Port Harcourt Industrial Park",
      description: "Engineering survey for infrastructure development",
      imageUrl: img4453,
      size: "small",
      orientation: "landscape",
    },
    {
      title: "Kano Urban Development",
      description: "Cadastral survey for urban planning project",
      imageUrl: img4458,
      size: "medium",
      orientation: "portrait",
    },
    {
      title: "Lekki Free Trade Zone",
      description: "Infrastructure planning and development survey",
      imageUrl: img4459,
      size: "small",
      orientation: "landscape",
    },
    {
      title: "Eko Atlantic City",
      description: "Coastal development and reclamation survey",
      imageUrl: img4460,
      size: "large",
      orientation: "landscape",
    },
    {
      title: "Victoria Island Expansion",
      description: "Urban development and infrastructure survey",
      imageUrl: img4461,
      size: "medium",
      orientation: "portrait",
    },
    {
      title: "Ikeja Business District",
      description: "Commercial property development survey",
      imageUrl: img4450,
      size: "small",
      orientation: "landscape",
    },
    {
      title: "Lagos Island Redevelopment",
      description: "Historic district preservation and modernization survey",
      imageUrl: img4451,
      size: "medium",
      orientation: "portrait",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${img4450})`,
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-black/70"></div>
        </div>

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              About Lorins Consults
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light mb-8 leading-relaxed">
              Nigeria's premier land surveying and consulting firm dedicated to
              precision, integrity, and excellence since 2021.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Founded in 2021, Lorins Consults has quickly established itself
                as a leading surveying firm in Nigeria. In just three years,
                we've built a reputation for excellence, precision, and
                reliability in land surveying services.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our rapid growth is a testament to our commitment to quality and
                our ability to deliver exceptional results for our clients.
                We've successfully completed numerous projects across various
                sectors, from residential developments to large-scale
                infrastructure projects.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="bg-gray-50 p-5 rounded-lg text-center w-40">
                  <div className="text-4xl font-bold text-blue-600">3+</div>
                  <div className="text-gray-600">Years of Excellence</div>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg text-center w-40">
                  <div className="text-4xl font-bold text-blue-600">200+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg text-center w-40">
                  <div className="text-4xl font-bold text-blue-600">6</div>
                  <div className="text-gray-600">Expert Team Members</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1664574654578-d5a6a4f447bb?q=80&w=870&auto=format&fit=crop"
                alt="Surveying team at work"
                className="w-full h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Mission & Vision
            </h2>
            <p className="text-lg text-gray-700">
              Our guiding principles that shape every project we undertake and
              every client relationship we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=870&auto=format&fit=crop"
                  alt="Our Mission"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Our Mission
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  To provide accurate, reliable, and professional surveying
                  services that meet and exceed our clients' expectations, while
                  maintaining the highest standards of integrity and technical
                  excellence. We are committed to continuous learning and
                  development, ensuring our team stays at the forefront of
                  surveying technology and best practices through comprehensive
                  training programs.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=870&auto=format&fit=crop"
                  alt="Our Vision"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Our Vision
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  To be the leading surveying and consulting firm in Nigeria,
                  known for our technical expertise, innovation, and commitment
                  to client satisfaction. We aim to contribute to the
                  sustainable development of Nigeria through accurate land
                  information services and pioneering surveying solutions.
                  Additionally, we are dedicated to nurturing and training the
                  next generation of surveyors, equipping them with the skills
                  and knowledge needed to maintain and advance the standards of
                  our profession.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Site Works Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Our Work in Action
            </h2>
            <p className="text-lg text-gray-700">
              A glimpse into our surveying projects across Nigeria
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {siteWorks.map((work, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group relative overflow-hidden rounded-xl shadow-lg ${
                  work.size === "large"
                    ? "md:col-span-2 lg:col-span-2"
                    : work.size === "medium"
                    ? "md:col-span-1 lg:col-span-1"
                    : "md:col-span-1 lg:col-span-1"
                }`}
              >
                <img
                  src={work.imageUrl}
                  alt={work.title}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                    work.orientation === "portrait"
                      ? "h-[400px]"
                      : "h-56 md:h-64"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg font-bold text-white mb-1">
                      {work.title}
                    </h3>
                    <p className="text-white/90 text-xs">{work.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-700">
              Our team of experienced professionals is dedicated to delivering
              exceptional surveying services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="relative h-72">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <div className="text-blue-600 font-medium mb-3">
                    {member.role}
                  </div>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-700">
              The principles that guide our work and define our company culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg text-center"
              >
                <div className="flex justify-center mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
