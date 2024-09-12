import React from 'react';
import { motion } from 'framer-motion';

function ContactUs() {
  return (
    <section className="relative bg-[#121212] py-16 rounded-[4rem] px-16">
      {/* Flex container for "Contact Us" heading and Map */}
      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Contact Us Heading */}
        <div className="md:w-1/2">
          <h2 className="text-white text-8xl font-bold" style={{ fontFamily: '"Rowdies", sans-serif' }}>
            We've been <br /> waiting for you!
          </h2>
        </div>

        {/* Map Section */}
        <div className="md:w-1/2 h-80 rounded-lg overflow-hidden">
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.246065733611!2d-122.42067948468127!3d37.77506797975848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808b475d09fb%3A0x8a6a5c9bcdac77a2!2sPier%204!5e0!3m2!1sen!2sus!4v1658313058322!5m2!1sen!2sus&style=feature:all|element:labels|visibility:off"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'invert(100%)' }} // Dark theme filter
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Gap between map and form */}
      <div className="mt-16">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Contact Details */}
          <div className="md:w-1/2 p-8 rounded-lg shadow-lg">
            <p className="text-white text-5xl font-semibold mb-10" style={{ fontFamily: '"Instrument Sans", sans-serif'}}>
              We want to hear from you. Let us know how we can help!
            </p>
            <p className="text-gray-400 underline text-2xl mb-4" style={{ fontFamily: '"Instrument Sans", sans-serif'}}>Phone: (123) 456-7890</p>
            <p className="text-gray-400 underline text-2xl mb-4" style={{ fontFamily: '"Instrument Sans", sans-serif'}}>Email: contact@example.com</p>
            <p className="text-gray-400 text-2xl mb-0" style={{ fontFamily: '"Instrument Sans", sans-serif'}}>Address: 123 Main Street, City, Country</p>
          </div>

          {/* Contact Form */}
          <motion.form
            className="md:w-1/2 p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col gap-8">
              {/* First Row: Name and Email */}
              <div className="flex flex-col md:flex-row gap-6">
                <input
                  type="text"
                  placeholder="Name*"
                  style={{ fontFamily: '"Instrument Sans", sans-serif'}}
                  className="p-4 bg-[#121212] mb-6 text-white border-b-2 border-[#ffffff1a] flex-1 placeholder:text-white placeholder:text-2xl focus:outline-none "
                />
                <input
                  type="email"
                  placeholder="Email*"
                  style={{ fontFamily: '"Instrument Sans", sans-serif'}}
                  className="p-4 bg-[#121212] mb-6 text-white border-b-2 border-[#ffffff1a] flex-1 placeholder:text-white placeholder:text-2xl focus:outline-none "
                />
              </div>
              {/* Second Row: Phone and Subject */}
              <div className="flex flex-col md:flex-row gap-6">
                <input
                  type="tel"
                  placeholder="Phone*"
                  style={{ fontFamily: '"Instrument Sans", sans-serif'}}
                  className="p-4 bg-[#121212] mb-6 text-white border-b-2 border-[#ffffff1a] flex-1 placeholder:text-white placeholder:text-2xl focus:outline-none "
                />
                <input
                  type="text"
                  placeholder="Subject*"
                  style={{ fontFamily: '"Instrument Sans", sans-serif'}}
                  className="p-4 bg-[#121212] mb-6 text-white border-b-2 border-[#ffffff1a] flex-1 placeholder:text-white placeholder:text-2xl focus:outline-none "
                />
              </div>
              {/* Message Field */}
              <textarea
                placeholder="Message*"
                style={{ fontFamily: '"Instrument Sans", sans-serif'}}
                className="p-4 bg-[#121212] text-white border-b-2 border-[#ffffff1a] placeholder:text-white placeholder:text-2xl focus:outline-none "
                rows="2"
              />
              {/* Submit Button */}
              <button
                type="submit"
                style={{ fontFamily: '"Instrument Sans", sans-serif'}}
                className="text-white text-xl p-6 border-2 border-[#ffffff1a] rounded-tr-[2.5rem] hover:bg-white hover:text-black rounded-bl-[2.5rem] w-56 mt-4 bg-[#121212]"
              >
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
