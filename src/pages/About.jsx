import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import siteImageOne from "../assets/training.jpg";
import Mission from "../assets/img-1.jpg";
import siteImageTwo from "../assets/site-image-1.jpg";
import siteImageThree from "../assets/site-img-3.jpg";
import lordmayor from "../assets/lordmayor-mod.jpg";
import Oluwatobiloba from "../assets/Oluwatobiloba.jpeg";
import Omowumi from "../assets/Omowumi.png";
import siteImageFour from "../assets/site-img-4.jpg";
import siteImageFive from "../assets/site-img-2.jpg";
import siteImageSix from "../assets/oluwatoyin.jpeg";
import siteImageSeven from "../assets/John.jpg";
import siteImageEigh from "../assets/lc-img-3.jpg";
import siteImageEight from "../assets/site-img-8.jpg";
import agm from "../assets/agm.jpg";

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
      name: "Surv. Amire Mayowa (Mnis)",
      role: "Lead Surveyor",
      description:
        "Over 10 years of experience in land surveying and project management. Specializes in cadastral, topography surveying and all major developments.",
      imageUrl: lordmayor,
    },
    {
      name: "Adeniyi Oluwatobiloba O.",
      role: "Assitant Surveyor",
      description:
        "Experience in land surveying and project management. Specializes in cadastral surveying, Topography survey, Route survey and major development",
      imageUrl: Oluwatobiloba,
    },
    {
      name: "Lamidi Omowunmi",
      role: "Project Manager",
      description:
        "Expert in project coordination and client relations. Ensures smooth execution of all surveying projects.",
      imageUrl: Omowumi,
    },
  ];

  const siteWorks = [
    {
      imageUrl: Mission,
      size: "large",
      orientation: "portrait",
    },
    {
      imageUrl: siteImageTwo,
      size: "medium",
      orientation: "portrait",
    },
    {
      imageUrl: siteImageThree,
      size: "small",
      orientation: "portrait",
    },
    {
      imageUrl: siteImageFour,
      size: "medium",
      orientation: "portrait",
    },
    {
      imageUrl: siteImageFive,
      size: "small",
      orientation: "portrait",
    },

    {
      imageUrl: siteImageSix,
      size: "medium",
      orientation: "portrait",
    },
    {
      imageUrl: siteImageSeven,
      size: "medium",
      orientation: "portrait",
    },
    {
      imageUrl: siteImageEight,
      size: "medium",
      orientation: "portrait",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] sm:h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${siteImageSeven})`,
            backgroundAttachment: "scroll",
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
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-white">
              About Lorins Consults
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-white/90 font-light mb-4 sm:mb-8 leading-relaxed">
              Nigeria's premier land surveying and consulting firm dedicated to
              precision, integrity, and excellence since 2021.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-10 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-900">
                Our Story
              </h2>
              <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                Lorins Consult began as a humble vision with just four
                passionate team members. Though officially launched in October
                2021, the groundwork had been quietly laid long before. From a
                small workspace in the heart of Ibadan, our journey took
                root—driven by a commitment to excellence, integrity, and
                innovation.
              </p>
              <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                In just three years, Lorins Consult has grown to a dedicated
                team of nearly ten professionals and has evolved into a
                nationally recognized brand. Our rise has been steady, marked by
                consistent growth and a growing reputation as a firm to reckon
                with in Nigeria's consulting landscape.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="bg-gray-50 p-5 rounded-lg text-center w-40">
                  <div className="text-4xl font-bold text-blue-600">15+</div>
                  <div className="text-gray-600">Years of Excellence</div>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg text-center w-40">
                  <div className="text-4xl font-bold text-blue-600">500+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg text-center w-40">
                  <div className="text-4xl font-bold text-blue-600">20+</div>
                  <div className="text-gray-600">Expert Team Members</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative rounded-Z2xl overflow-hidden shadow-xl"
            >
              <img
                src={lordmayor}
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
                  src={agm}
                  alt="Our Mission"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Our Mission
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  To deliver surveying solutions with integrity,
                  professionalism, and a unique touch. <br /> Shaping the
                  industry and inspiring the next generation of surveyors.{" "}
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
                  src={siteImageOne}
                  alt="Our Vision"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Our Vision
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  To lead the future of surveying and land management through
                  precision, integrity, and innovation. Empowering the
                  profession and shaping the next generation of surveyors.
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
                      ? "h-[500px]"
                      : "h-72 md:h-80"
                  }`}
                />
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
