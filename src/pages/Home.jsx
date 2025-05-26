import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import topographyImg from "../assets/topography.jpg" 

const Home = () => {
  const services = [
    {
      title: "Cadastral Surveying",
      description:
        "Professional land boundary surveys and property documentation for legal and ownership purposes.",
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
      imageUrl:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=870&auto=format&fit=crop",
    },
    {
      title: "Topographic Survey",
      description:
        "Detailed mapping of land features, elevation changes, and natural terrain to support informed planning decisions.",
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
      imageUrl: topographyImg
    },
    {
      title: "Engineering Survey",
      description:
        "Precise measurements and data collection for construction, infrastructure, and development projects.",
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
      imageUrl:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=870&auto=format&fit=crop",
    },
  ];

  const featuredProjects = [
    {
      title: "Lagos Waterfront Development",
      description:
        "Complete survey and mapping of 5km waterfront property for mixed-use development",
      imageUrl:
        "https://images.unsplash.com/photo-1618411340482-9b09509bc193?q=80&w=776&auto=format&fit=crop",
      category: "Commercial",
    },
    {
      title: "Abuja Residential Estate",
      description:
        "Cadastral and topographic survey for 50-acre residential estate development",
      imageUrl:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=870&auto=format&fit=crop",
      category: "Residential",
    },
  ];

  const testimonials = [
    {
      name: "Adepoju John",
      role: "Property Developer",
      content:
        "Lorins Consults provided exceptional surveying services for our residential project. Their attention to detail and professional approach made all the difference.",
      imageUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=774&auto=format&fit=crop",
    },
    {
      name: "Oladapo Jane",
      role: "Architect",
      content:
        "Working with Lorins Consults has been a pleasure. Their expertise in topographic surveying helped us make informed decisions for our design.",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=774&auto=format&fit=crop",
    },
    {
      name: "Mike Johnson",
      role: "Construction Manager",
      content:
        "The team at Lorins Consults is highly skilled and reliable. They delivered accurate results within the agreed timeframe.",
      imageUrl:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=774&auto=format&fit=crop",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section - Full screen with parallax effect */}
      <section className="relative min-h-screen w-full flex items-center justify-center">
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1566974718480-e01ac14e5961?q=80&w=1740&auto=format&fit=crop')",
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
            className="max-w-3xl mx-auto pt-20"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
              Precision Surveying Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-white/90 font-light">
              Lorins Consults provides professional land surveying services
              across Nigeria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="btn btn-primary text-lg px-8 py-4"
              >
                Our Services
              </Link>
              <a
                href={`https://wa.me/+2341234567890?text=${encodeURIComponent(
                  "Hello! I would like to get a quote for your surveying services."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-white text-blue-800 hover:bg-gray-100 text-lg px-8 py-4"
              >
                Get a Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section with Stats */}
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
                Revolutionizing {" "}
                <span className="text-gradient">the Surveying</span>{" "}
                Landcaping in Nigeria
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Delivering precision surveying with cutting-edge technology. Our
                certified surveyors provide reliable data you can trust. Contributing to the development of the next generation professionals
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
              >
                Learn more about our company
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-8"
            >
              <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
                <div className="text-4xl font-bold text-blue-600 mb-2">3+</div>
                <div className="text-gray-600">Years of Experience</div>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  200+
                </div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
                <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Corporate Clients</div>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  100%
                </div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section - With large images and cards */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Our Specialized Services
            </h2>
            <p className="text-lg text-gray-700">
              Lorins Consults offers comprehensive surveying solutions for all
              your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <div className="h-60 overflow-hidden">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="mb-5">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    to={`/services#${service.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
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

          <div className="text-center mt-16">
            <Link
              to="/services"
              className="btn btn-primary inline-flex items-center text-lg px-8 py-4"
            >
              View All Services
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

      {/* Featured Projects */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-700">
              Lorins Consults' showcase of our expertise and excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10"></div>
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-[400px] object-cover transition-transform group-hover:scale-105 duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  <span className="inline-block px-4 py-1 rounded-full bg-blue-600/80 text-white text-sm mb-4">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold mb-3 text-white">
                    {project.title}
                  </h3>
                  <p className="text-white/90 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <Link
                    to="/projects"
                    className="inline-flex items-center text-white hover:text-blue-200 transition-colors"
                  >
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
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/projects"
              className="btn btn-primary inline-flex items-center text-lg px-8 py-4"
            >
              View All Projects
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

      {/* Testimonials with circular images */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-lg text-gray-300">
              We take pride in our clients' satisfaction and the relationships
              we build with them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 p-8 rounded-2xl relative"
              >
                <svg
                  className="w-12 h-12 text-blue-500 mb-6 opacity-50"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-300 mb-8 leading-relaxed italic">
                  {testimonial.content}
                </p>
                <div className="flex items-center">
                  <div className="w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-blue-500">
                    <img
                      src={testimonial.imageUrl}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
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
              Contact Lorins Consults today for a free consultation and quote.
              Our team is ready to help you with your surveying needs.
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

      {/* Map Section with contact info overlay */}
      <section className="relative h-[600px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d406.32388307954875!2d3.9439046389859045!3d7.409887232286912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sng!4v1745088723730!5m2!1sen!2sng"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="absolute top-10 right-10 bg-white p-8 rounded-xl shadow-xl max-w-md">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            Visit Our Office
          </h3>
          <p className="text-gray-600 mb-6 ">
            Imafam Shopping Complex, Iwo-Road, Ojoo Express Way Beside Poplat
            Station , Cele B./Stop Iwo Road Ibadan
            <br />
            Oyo State, Nigeria
          </p>
          <div className="flex items-center mb-4">
            <svg
              className="w-5 h-5 text-blue-600 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span className="text-gray-700">
              {" "}
              +234 703 790 5846 , +234 812 140 7681
            </span>
          </div>
          <div className="flex items-center">
            <svg
              className="w-5 h-5 text-blue-600 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="text-gray-700">lorinsconsults@gmail.com</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
