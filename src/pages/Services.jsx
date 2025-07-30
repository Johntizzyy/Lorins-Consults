import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import surveying from "../assets/surveying.png";
import cadastrial from "../assets/cadastrial.jpg";
import hydrographySurvey from "../assets/hydrography.jpg";
import Gis from "../assets/gis.jpg";
import engineering from "../assets/engineering-survey.jpg";
import topography from "../assets/topography.jpg";
import instrument from "../assets/instrument.jpg"
import landDocumentation from "../assets/land-document.jpg";

const Services = () => {
  const services = [
    {
      id: "cadastral-surveying",
      title: "Cadastral Surveying",
      description:
        "Cadastral surveying involves the determination and documentation of land boundaries for legal and ownership purposes. Our experienced surveyors provide accurate property surveys that comply with all legal requirements and standards.",
      features: [
        "Boundary identification and demarcation",
        "Property subdivision and consolidation",
        "Title surveys for land registration",
        "Boundary dispute resolution",
      ],
      image: cadastrial,
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
            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
          />
        </svg>
      ),
    },
    {
      id: "topographic-survey",
      title: "Topographic Survey",
      description:
        "Topographic surveys map the natural and man-made features of the land, including elevation changes. These surveys are essential for planning, design, and development purposes, providing a comprehensive view of the terrain.",
      features: [
        "Contour mapping and elevation studies",
        "3D terrain modeling",
        "Volume calculations for earthworks",
        "Feature mapping (structures, utilities, vegetation)",
      ],
      image: topography,
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
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
    {
      id: "engineering-survey",
      title: "Engineering Survey",
      description:
        "Engineering surveys provide precise measurements and data for the planning, design, and execution of engineering projects. Our team delivers accurate surveys that help engineers make informed decisions during construction.",
      features: [
        "Construction layout and staking",
        "Road and highway alignment surveys",
        "Pipeline and utility surveys",
        "As-built surveys for completed projects",
      ],
      image: engineering,
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
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
    {
      id: "gis-mapping",
      title: "GIS & Mapping",
      description:
        "Our Geographic Information System (GIS) services combine spatial data with other information to create powerful visual representations and analytical tools for planning and decision-making.",
      features: [
        "Custom map creation and visualization",
        "Spatial data analysis and interpretation",
        "GIS database development and management",
        "Remote sensing and image analysis",
      ],
      image: Gis,
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
            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
          />
        </svg>
      ),
    },
    {
      id: "Hydrography survey",
      title: "Hydrography survey",
      description:
        "We conduct precise hydrographic surveys to map underwater features and depths, supporting marine construction, navigation, and environmental monitoring projects.",
      features: [
        "Bathymetric mapping and depth measurement",
        "Underwater feature detection using sonar",
        "Tide and current analysis",
        "Support for dredging and marine infrastructure projects",
      ],
      image: hydrographySurvey,
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
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      id: "land-documentation",
      title: "Land Documentation",
      description:
        "We assist clients with the preparation and processing of land documentation required for various legal and administrative purposes, ensuring compliance with relevant regulations.",
      features: [
        "Land use and zoning verification",
        "Title deed preparation and registration",
        "Survey plan preparation and approval",
        "Legal boundary documentation",
      ],
      image: landDocumentation,
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
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Initial Consultation",
      description:
        "We meet with you to understand your specific needs and project requirements.",
    },
    {
      number: "02",
      title: "Planning & Proposal",
      description:
        "Our team develops a comprehensive plan and provides a detailed proposal with timeline and cost estimates.",
    },
    {
      number: "03",
      title: "Field Work",
      description:
        "Our surveyors conduct on-site measurements using state-of-the-art equipment for maximum accuracy.",
    },
    {
      number: "04",
      title: "Data Processing",
      description:
        "Collected data is processed and analyzed using advanced software to ensure precision and reliability.",
    },
    {
      number: "05",
      title: "Deliverables",
      description:
        "We prepare and deliver the final survey documents, maps, and reports according to your specifications.",
    },
    {
      number: "06",
      title: "Follow-up Support",
      description:
        "Our team remains available to answer questions and provide additional assistance as needed.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage:
              cadastrial,
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
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light mb-8 leading-relaxed">
              Professional surveying solutions tailored to meet your specific
              needs with precision and excellence.
            </p>
            <Link to="/contact" className="btn btn-primary text-lg px-8 py-4">
              Request a Free Quote
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Comprehensive Surveying Solutions
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              At Lorins Consults, we offer a wide range of surveying services to
              meet the diverse needs of our clients. Whether you're a property
              owner, developer, or government agency, our team has the expertise
              and equipment to deliver accurate, reliable results.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Section - Alternating layout */}
      <section className="py-10 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <h1 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
              Our Services
            </h1>
            <p className="text-base sm:text-lg text-gray-700">
              Comprehensive surveying and mapping solutions tailored to your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <div className="h-48 sm:h-60 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-4 sm:p-8">
                  <div className="mb-4 sm:mb-5">{service.icon}</div>
                  <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </p>
                  <ul className="mb-4 sm:mb-6 pl-4 list-disc text-gray-500 text-sm sm:text-base">
                    {service.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                  <Link
                    to={`#${service.id}`}
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors text-sm sm:text-base"
                  >
                    Learn more
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Our Process
            </h2>
            <p className="text-lg text-gray-700">
              We follow a systematic approach to ensure quality and efficiency
              in every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl font-bold text-blue-600 mb-4">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment & Technology */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Advanced Technology & Equipment
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                We invest in state-of-the-art technology and equipment to ensure
                the highest levels of accuracy and efficiency in our surveying
                services.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-500 mt-0.5 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>High-precision GPS and GNSS receivers</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-500 mt-0.5 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Advanced robotic total stations</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-500 mt-0.5 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>3D laser scanners for detailed measurements</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-500 mt-0.5 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Drone technology for aerial mapping</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-500 mt-0.5 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    Specialized software for data processing and analysis
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={instrument}
                alt="Surveying equipment"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-700">
              Common questions about our surveying services and processes.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md"
              >
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  How long does a typical survey take?
                </h3>
                <p className="text-gray-700">
                  The duration of a survey depends on various factors including
                  the size of the property, terrain complexity, and type of
                  survey required. A simple residential property survey might
                  take a day for fieldwork, while larger or more complex
                  projects could take several days or weeks. During your
                  consultation, we'll provide a specific timeline for your
                  project.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md"
              >
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  What information do I need to provide for a survey?
                </h3>
                <p className="text-gray-700">
                  To get started, we typically need basic information about your
                  property, including its location, legal description, and any
                  existing documentation such as deed records or previous
                  surveys. It's also helpful to know your specific requirements
                  and what you plan to use the survey for.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md"
              >
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  How accurate are your surveys?
                </h3>
                <p className="text-gray-700">
                  We maintain high standards of accuracy using advanced
                  equipment and methodologies. Our surveys meet or exceed
                  industry standards and regulatory requirements. The specific
                  level of accuracy depends on the type of survey, but we always
                  aim for the highest precision possible.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md"
              >
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  Do you provide services nationwide?
                </h3>
                <p className="text-gray-700">
                  We primarily serve clients throughout Nigeria, with a focus on
                  major cities and surrounding areas. For projects in remote
                  locations, additional travel fees may apply. Contact us with
                  your specific location to discuss how we can accommodate your
                  needs.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Contact us today for a consultation and free quote. Our team is
              ready to help with your surveying needs.
            </p>
            <Link
              to="/contact"
              className="btn bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
