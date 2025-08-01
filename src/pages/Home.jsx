import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import topographyImg from "../assets/topography.jpg";
import cadastrial from "../assets/cadastrial.jpg";
import engineering from "../assets/engineering.jpg";
import agm from "../assets/lc-img-2.jpg";

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
      imageUrl: cadastrial,
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
      imageUrl: topographyImg,
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
      imageUrl: engineering,
    },
  ];

  const testimonials = [
    {
      name: "Pst Oriowo Olufemi",
      content:
        "A trusted and reliable man for you rland related and surveying Jobs",
      rating: 5,
    },
    {
      name: "Mrs. Abiola Akinyemi",
      content:
        "Lorins Consults exceeded my expectations. From the first consultation to the delivery of my survey plan, their team was professional, patient, and very thorough. I appreciated how they explained every detail and made sure I understood the entire process. I will definitely recommend them to anyone in need of reliable land surveying services.",
      rating: 5,
    },
    {
      name: "Mr. Tunde Ogunlana",
      content:
        "I'm truly impressed by the quality of service I received from Lorins Consults. They were prompt, respectful, and used modern equipment to get accurate results. Their attention to detail gave me peace of mind during my land purchase. Thank you for a job well done!",
      rating: 5,
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section - Full screen with parallax effect */}
      <section className="relative min-h-screen w-full flex items-center justify-center">
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: agm,
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white leading-tight">
              Precision Surveying Solutions
            </h1>
            <p className="text-base sm:text-lg md:text-2xl mb-6 sm:mb-10 text-white/90 font-light">
              Lorins Consults provides professional land surveying services
              across Nigeria.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                to="/services"
                className="btn btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
              >
                Our Services
              </Link>
              <a
                href={`https://wa.me/+2347037905846?text=${encodeURIComponent(
                  "Hello! I would like to get a quote for your surveying and landscaping services."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-white text-blue-800 hover:bg-gray-100 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
              >
                Get a Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section with Stats */}
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
                Revolutionizing{" "}
                <span className="text-gradient">the Surveying</span> Landcaping
                in Nigeria
              </h2>
              <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                Delivering precision surveying with cutting-edge technology. Our
                certified surveyors provide reliable data you can trust.
                Contributing to the development of the next generation
                professionals
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors text-base sm:text-lg"
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
              className="grid grid-cols-2 gap-4 sm:gap-8"
            >
              <div className="bg-gray-50 p-4 sm:p-8 rounded-xl shadow-sm">
                <div className="text-2xl sm:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">
                  3+
                </div>
                <div className="text-gray-600 text-xs sm:text-base">
                  Years of Experience
                </div>
              </div>
              <div className="bg-gray-50 p-4 sm:p-8 rounded-xl shadow-sm">
                <div className="text-2xl sm:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">
                  200+
                </div>
                <div className="text-gray-600 text-xs sm:text-base">
                  Projects Completed
                </div>
              </div>
              <div className="bg-gray-50 p-4 sm:p-8 rounded-xl shadow-sm">
                <div className="text-2xl sm:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">
                  50+
                </div>
                <div className="text-gray-600 text-xs sm:text-base">
                  Corporate Clients
                </div>
              </div>
              <div className="bg-gray-50 p-4 sm:p-8 rounded-xl shadow-sm">
                <div className="text-2xl sm:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">
                  100%
                </div>
                <div className="text-gray-600 text-xs sm:text-base">
                  Client Satisfaction
                </div>
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

      {/* Redesigned Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-800 text-white relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            background:
              "radial-gradient(circle at 60% 40%, #2563eb33 0%, transparent 70%)",
          }}
        ></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">Client Reviews</h2>
            <p className="text-lg text-gray-300">
              Hear what our clients have to say about their experience with
              Lorins Consults.
            </p>
          </div>
          <div className="flex gap-8 overflow-x-auto md:grid md:grid-cols-3 md:gap-10 scrollbar-hide pb-4">
            {testimonials.map((testimonial, idx) => (
              <div
                key={testimonial.name + idx}
                className="min-w-[320px] md:min-w-0 bg-white/5 border border-blue-900 rounded-2xl shadow-lg p-8 flex flex-col justify-between hover:scale-[1.03] transition-transform duration-300"
              >
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? "text-yellow-400"
                          : "text-gray-600"
                      } drop-shadow`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-200 italic mb-6 text-base leading-relaxed">
                  {testimonial.content}
                </p>
                <div className="mt-auto">
                  <span className="block font-semibold text-white text-lg tracking-wide">
                    {testimonial.name}
                  </span>
                </div>
              </div>
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
              <a
                href={`https://wa.me/+2347037905846?text=${encodeURIComponent(
                  "Hello! I would like to inquire about your services."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                +234 703 790 5846
              </a>{" "}
              ,{" "}
              <a
                href={`https://wa.me/+2348121407681?text=${encodeURIComponent(
                  "Hello! I would like to inquire about your services."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                +234 812 140 7681
              </a>
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
