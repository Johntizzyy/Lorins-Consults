import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Lagos Waterfront Development",
      category: "commercial",
      description:
        "Complete survey and mapping of a 5-kilometer waterfront property for a mixed-use development project in Lagos. This included topographic surveys, boundary determination, and utility mapping.",
      image:
        "https://images.unsplash.com/photo-1618411640018-972400a01458?q=80&w=1470&auto=format&fit=crop",
      client: "Lagos Waterfront Development Corporation",
      location: "Victoria Island, Lagos",
      year: "2022",
    },
    {
      id: 2,
      title: "Abuja Residential Estate",
      category: "residential",
      description:
        "Cadastral and topographic survey for a 50-acre residential estate development. Our work included property subdivision, road alignment, and utility planning.",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=870&auto=format&fit=crop",
      client: "Abuja Estate Developers Ltd",
      location: "Katampe Extension, Abuja",
      year: "2021",
    },
    {
      id: 3,
      title: "Port Harcourt Highway Infrastructure",
      category: "infrastructure",
      description:
        "Engineering survey for a 25-kilometer highway extension project. We provided accurate alignment data, cross-sections, and volume calculations for earthwork.",
      image:
        "https://images.unsplash.com/photo-1573805747030-751ceac0987a?q=80&w=1635&auto=format&fit=crop",
      client: "Federal Ministry of Works",
      location: "Port Harcourt, Rivers State",
      year: "2020",
    },
    {
      id: 4,
      title: "Kano Agricultural Land Mapping",
      category: "agricultural",
      description:
        "Comprehensive mapping and GIS database creation for 1,000 hectares of agricultural land. This project involved boundary surveys, soil type mapping, and irrigation planning.",
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1632&auto=format&fit=crop",
      client: "Kano State Agricultural Development Authority",
      location: "Kano, Kano State",
      year: "2019",
    },
    {
      id: 5,
      title: "Enugu Mining Site Survey",
      category: "industrial",
      description:
        "Detailed topographic and volumetric survey for a mining operation. We provided accurate terrain models, volume calculations, and site planning assistance.",
      image:
        "https://images.unsplash.com/photo-1519972737136-453d45b59c2a?q=80&w=1374&auto=format&fit=crop",
      client: "Eastern Mining Corporation",
      location: "Enugu, Enugu State",
      year: "2022",
    },
    {
      id: 6,
      title: "Calabar Coastal Protection Project",
      category: "infrastructure",
      description:
        "Hydrographic and topographic surveys for a coastal protection project. Our work included shoreline mapping, bathymetric surveys, and erosion monitoring.",
      image:
        "https://images.unsplash.com/photo-1544726982-b414d58fabaa?q=80&w=1470&auto=format&fit=crop",
      client: "Cross River State Government",
      location: "Calabar, Cross River State",
      year: "2021",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1593115590489-eb3690435e25?q=80&w=1471&auto=format&fit=crop')",
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
              Our Projects
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light mb-8 leading-relaxed">
              Explore our portfolio of successful surveying projects across
              Nigeria, showcasing our expertise and commitment to excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Our Success Stories
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              At Lorins Consults, we take pride in our diverse portfolio of
              projects across various sectors. Our work demonstrates our
              technical expertise, attention to detail, and commitment to
              delivering exceptional results for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setFilter("all")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter("commercial")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === "commercial"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Commercial
            </button>
            <button
              onClick={() => setFilter("residential")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === "residential"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Residential
            </button>
            <button
              onClick={() => setFilter("infrastructure")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === "infrastructure"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Infrastructure
            </button>
            <button
              onClick={() => setFilter("agricultural")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === "agricultural"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Agricultural
            </button>
            <button
              onClick={() => setFilter("industrial")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === "industrial"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Industrial
            </button>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg group"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-700"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                      {project.category.charAt(0).toUpperCase() +
                        project.category.slice(1)}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                    <div>
                      <span className="block text-gray-500">Client:</span>
                      <span className="block font-medium">
                        {project.client}
                      </span>
                    </div>
                    <div>
                      <span className="block text-gray-500">Location:</span>
                      <span className="block font-medium">
                        {project.location}
                      </span>
                    </div>
                  </div>
                  <button className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
                    View Project Details
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
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlighted Project */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="inline-block px-4 py-1 rounded-full bg-blue-600 text-sm font-bold mb-6">
                  Featured Project
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Lekki Peninsula Urban Development Plan
                </h2>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  A comprehensive surveying and mapping project covering the
                  entire Lekki Peninsula to support urban planning and
                  development. This multi-year project involved cadastral
                  surveying, topographic mapping, GIS database development, and
                  infrastructure planning.
                </p>
                <ul className="space-y-3 mb-8">
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
                    <span>Over 3,000 hectares of land surveyed and mapped</span>
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
                      Comprehensive GIS database of existing infrastructure
                    </span>
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
                      Detailed terrain modeling for flood management planning
                    </span>
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
                      Coordinated team of 25 surveyors and GIS specialists
                    </span>
                  </li>
                </ul>
                <button className="inline-flex items-center text-blue-400 font-medium hover:text-blue-300 transition-colors">
                  Read Case Study
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
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1496588152823-86ff7695e68f?q=80&w=1470&auto=format&fit=crop"
                  alt="Lekki Peninsula Development Project"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="text-white">
                    <div className="font-medium text-sm text-blue-400">
                      Client: Lagos State Government
                    </div>
                    <div className="font-medium text-sm">Completed: 2021</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl text-center"
            >
              <div className="text-5xl font-bold text-blue-600 mb-3">250+</div>
              <div className="text-gray-700 font-medium">
                Projects Completed
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl text-center"
            >
              <div className="text-5xl font-bold text-blue-600 mb-3">30+</div>
              <div className="text-gray-700 font-medium">
                Government Contracts
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl text-center"
            >
              <div className="text-5xl font-bold text-blue-600 mb-3">
                50,000+
              </div>
              <div className="text-gray-700 font-medium">Hectares Surveyed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl text-center"
            >
              <div className="text-5xl font-bold text-blue-600 mb-3">98%</div>
              <div className="text-gray-700 font-medium">
                Client Satisfaction
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Trusted Clients
            </h2>
            <p className="text-gray-700">
              We've had the privilege of working with leading organizations
              across Nigeria
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-10 opacity-70">
            {/* Placeholder for client logos - in a real project, you would use actual client logos */}
            <div className="h-12 w-40 bg-gray-300 rounded-md flex items-center justify-center">
              <span className="text-gray-600 font-medium">Client Logo</span>
            </div>
            <div className="h-12 w-40 bg-gray-300 rounded-md flex items-center justify-center">
              <span className="text-gray-600 font-medium">Client Logo</span>
            </div>
            <div className="h-12 w-40 bg-gray-300 rounded-md flex items-center justify-center">
              <span className="text-gray-600 font-medium">Client Logo</span>
            </div>
            <div className="h-12 w-40 bg-gray-300 rounded-md flex items-center justify-center">
              <span className="text-gray-600 font-medium">Client Logo</span>
            </div>
            <div className="h-12 w-40 bg-gray-300 rounded-md flex items-center justify-center">
              <span className="text-gray-600 font-medium">Client Logo</span>
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
              Our team of experts is ready to help you with your surveying
              needs. Contact us today for a consultation.
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

export default Projects;
