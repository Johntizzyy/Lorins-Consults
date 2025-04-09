import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
      imageUrl:
        "https://images.unsplash.com/photo-1484626753559-5fa3ea273ae4?q=80&w=876&auto=format&fit=crop",
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
      imageUrl:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=869&auto=format&fit=crop",
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
      imageUrl:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=870&auto=format&fit=crop",
    },
  ];

  const team = [
    {
      name: "John Smith",
      role: "Lead Surveyor",
      description:
        "Over 15 years of experience in land surveying and project management. John specializes in cadastral surveying and has worked on major residential and commercial developments across Nigeria.",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=870&auto=format&fit=crop",
    },
    {
      name: "Sarah Johnson",
      role: "GIS Specialist",
      description:
        "Expert in Geographic Information Systems and spatial data analysis. Sarah has a Master's degree in Geospatial Technology and helps clients visualize and interpret complex land data.",
      imageUrl:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=774&auto=format&fit=crop",
    },
    {
      name: "Michael Brown",
      role: "Engineering Surveyor",
      description:
        "Specialized in construction and infrastructure surveying. Michael has contributed to numerous large-scale civil engineering projects and brings invaluable technical expertise to our team.",
      imageUrl:
        "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=774&auto=format&fit=crop",
    },
  ];

  const milestones = [
    {
      year: "2008",
      title: "Company Founded",
      description:
        "Lorins Consults was established with a mission to provide accurate, reliable surveying services.",
    },
    {
      year: "2012",
      title: "Expanded Services",
      description:
        "Added GIS mapping and 3D modeling capabilities to our service offerings.",
    },
    {
      year: "2015",
      title: "National Recognition",
      description: "Received the National Award for Excellence in Surveying.",
    },
    {
      year: "2018",
      title: "International Certification",
      description: "Obtained ISO certification for quality management systems.",
    },
    {
      year: "2022",
      title: "Digital Transformation",
      description:
        "Implemented advanced digital surveying technologies and cloud-based solutions.",
    },
  ];

  return (
    <div>
      {/* Hero Section with Background Image */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1512187849-463fdb898f21?q=80&w=1932&auto=format&fit=crop')",
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
              precision, integrity, and excellence since 2008.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Introduction with Image */}
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
                Founded in 2008, Lorins Consults has grown from a small local
                surveying practice to one of Nigeria's most respected consulting
                firms. With a team of expert surveyors, cutting-edge technology,
                and a commitment to excellence, we've established ourselves as
                industry leaders.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our journey has been marked by continuous improvement, embracing
                new technologies, and building lasting relationships with our
                clients. Today, we serve a diverse portfolio of clients ranging
                from individual landowners to government agencies and large
                corporations.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="bg-gray-50 p-5 rounded-lg text-center w-40">
                  <div className="text-4xl font-bold text-blue-600">15+</div>
                  <div className="text-gray-600">Years of Experience</div>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg text-center w-40">
                  <div className="text-4xl font-bold text-blue-600">1000+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg text-center w-40">
                  <div className="text-4xl font-bold text-blue-600">30+</div>
                  <div className="text-gray-600">Expert Staff</div>
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
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent py-10 px-6">
                <div className="text-white">
                  <div className="font-medium text-blue-400">
                    Our Commitment
                  </div>
                  <div className="text-xl font-bold">
                    Precision in Every Measurement
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision with cards */}
      <section className="py-20 bg-gray-50">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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
                  excellence. We strive to be a trusted partner in our clients'
                  success by delivering timely and cost-effective solutions.
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
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Our Journey
            </h2>
            <p className="text-lg text-gray-700">
              Milestones that have shaped our growth and success over the years.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>

            {/* Timeline Items */}
            <div className="relative">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`mb-16 flex ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  } relative`}
                >
                  <div className="w-5/12">
                    <div className="bg-white rounded-xl shadow-lg p-6">
                      <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-bold mb-4">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Timeline Point */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-700">
              The principles that guide our work and define our company culture.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={value.imageUrl}
                    alt={value.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="mb-5">{value.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-700">
              Our team of experienced professionals is dedicated to providing
              exceptional service and technical expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg group"
              >
                <div className="h-80 overflow-hidden">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-1 text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="btn btn-primary inline-flex items-center text-lg px-8 py-4"
            >
              Join Our Team
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Contact us today to discuss your surveying needs and how our team
              can help with your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4"
              >
                Contact Us
              </Link>
              <Link
                to="/services"
                className="btn bg-blue-700 text-white hover:bg-blue-800 text-lg px-8 py-4"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
