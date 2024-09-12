import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <section className="relative bg-[#252525] rounded-[4rem] p-8">
      <div className="flex rounded-[4rem] overflow-hidden">
        {/* Wrapper for border */}
        <div className="flex w-full">
          {/* First Division */}
          <div className="w-[35%] p-10 flex items-start justify-center border-r-[1px] border-[#ffffff1a]">
            <img src="/assets/logo.png" alt="Logo" className="w-[250px] h-[250px] relative top-24 right-8" />
          </div>

          {/* Second Division */}
          <div className="w-[65%] p-8 flex flex-col gap-32 ml-8">
            {/* First Row */}
            <div className="flex justify-between gap-8">
              <div className="flex flex-col gap-4 w-full">
                <h3 className="text-white text-4xl font-bold mb-4">Services</h3>
                <div className="text-white space-y-2">
                  <p>Text 1</p>
                  <p>Text 2</p>
                  <p>Text 3</p>
                  <p>Text 4</p>
                  <p>Text 5</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 w-full">
                <h3 className="text-white text-4xl font-bold mb-4">Company</h3>
                <div className="text-white space-y-2">
                  <p>Text 1</p>
                  <p>Text 2</p>
                  <p>Text 3</p>
                  <p>Text 4</p>
                  <p>Text 5</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 w-full">
                <h3 className="text-white text-4xl font-bold mb-4">Agency</h3>
                <div className="text-white text-xl space-y-2">
                  <p>Feel free to reach out if you want to</p>
                  <p>collaborate with us, or simply have a</p>
                  <p>chat.</p>
                </div>
              </div>
            </div>

            {/* Second Row */}
            <div className="flex justify-between gap-8">
              <div className="flex flex-col gap-4 w-full">
                <h3 className="text-white text-4xl font-bold">New York</h3>
                <div className="text-white space-y-2">
                  <p>Text 1</p>
                  <p>Text 2</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 w-full">
                <h3 className="text-white text-4xl font-bold">London</h3>
                <div className="text-white space-y-2">
                  <p>Text 1</p>
                  <p>Text 2</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 w-full">
                <h3 className="text-white text-4xl font-bold">Follow Us</h3>
                <div className="flex gap-4 mt-4">
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebookF} className="text-white text-2xl" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} className="text-white text-2xl" />
                  </a>
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} className="text-white text-2xl" />
                  </a>
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedinIn} className="text-white text-2xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
