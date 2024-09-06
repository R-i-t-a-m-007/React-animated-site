import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

function ContentSection() {
  return (
    <section className="relative bg-[#121212] py-16 rounded-[4rem]">
      <div className="absolute top-0 left-0 p-8">
        <h2 className="text-white text-[75px] font-bold mb-8 mt-[8rem] w-[100%]" style={{ lineHeight: '5rem' }}>
          Meet <br></br> The Team
        </h2>
      </div>
      <div className="flex flex-col space-y-8 mt-[26rem] px-8">
        {/* Row 1 */}
        <div className="flex space-x-28">
          <div className="relative flex items-start border-t-2 border-b-2 border-white py-12 flex-grow">
            <img
              src="/src/assets/TeamImg/Sid1 copy.jpg" // Replace with actual image path
              alt="Content 1"
              className="w-[250px] h-[250px] object-cover"
            />
            <div className="ml-4 text-white flex items-start flex-col justify-center">
              <p className="text-lg font-medium mb-2">Description 1</p>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center absolute bottom-12 text-white"
              >
                <FaLinkedin className="w-6 h-6" />
                <span className="ml-2">LinkedIn</span>
              </a>
            </div>
          </div>
          <div className="relative flex items-start border-t-2 border-b-2 border-white py-12 flex-grow">
            <img
              src="/src/assets/TeamImg/Pragati 2 copy.jpg" // Replace with actual image path
              alt="Content 2"
              className="w-[250px] h-[250px] object-cover"
            />
            <div className="ml-4 text-white flex items-start flex-col justify-center">
              <p className="text-lg font-medium mb-2">Description 2</p>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center absolute bottom-12 text-white"
              >
                <FaLinkedin className="w-6 h-6" />
                <span className="ml-2">LinkedIn</span>
              </a>
            </div>
          </div>
          <div className="relative flex items-start border-t-2 border-b-2 border-white py-12 flex-grow">
            <img
              src="/src/assets/TeamImg/Eklavya3 copy.jpg" // Replace with actual image path
              alt="Content 3"
              className="w-[250px] h-[250px] object-cover"
            />
            <div className="ml-4 text-white flex items-start flex-col justify-center">
              <p className="text-lg font-medium mb-2">Description 3</p>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center absolute bottom-12 text-white"
              >
                <FaLinkedin className="w-6 h-6" />
                <span className="ml-2">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex space-x-28">
          <div className="relative flex items-start border-t-2 border-b-2 border-white py-12 flex-grow">
            <img
              src="/src/assets/TeamImg/Arindam7 copy.jpg" // Replace with actual image path
              alt="Content 4"
              className="w-[250px] h-[250px] object-cover"
            />
            <div className="ml-4 text-white flex items-start flex-col justify-center">
              <p className="text-lg font-medium mb-2">Description 4</p>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center absolute bottom-12 text-white"
              >
                <FaLinkedin className="w-6 h-6" />
                <span className="ml-2">LinkedIn</span>
              </a>
            </div>
          </div>
          <div className="relative flex items-start border-t-2 border-b-2 border-white py-12 flex-grow">
            <img
              src="/src/assets/TeamImg/PRamita5 copy.jpg" // Replace with actual image path
              alt="Content 5"
              className="w-[250px] h-[250px] object-cover"
            />
            <div className="ml-4 text-white flex items-start flex-col justify-center">
              <p className="text-lg font-medium mb-2">Description 5</p>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center absolute bottom-12 text-white"
              >
                <FaLinkedin className="w-6 h-6" />
                <span className="ml-2">LinkedIn</span>
              </a>
            </div>
          </div>
          <div className="relative flex items-start border-t-2 border-b-2 border-white py-12 flex-grow">
            <img
              src="/src/assets/TeamImg/Sikha8 copy.jpg" // Replace with actual image path
              alt="Content 6"
              className="w-[250px] h-[250px] object-cover"
            />
            <div className="ml-4 text-white flex items-start flex-col justify-center">
              <p className="text-lg font-medium mb-2">Description 6</p>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center absolute bottom-12 text-white"
              >
                <FaLinkedin className="w-6 h-6" />
                <span className="ml-2">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Row 3 */}
        <div className="flex space-x-28">
          <div className="relative flex items-start border-t-2 border-b-2 border-white py-12 flex-grow">
            <img
              src="/src/assets/TeamImg/Supriyo6 copy.jpg" // Replace with actual image path
              alt="Content 7"
              className="w-[250px] h-[250px] object-cover"
            />
            <div className="ml-4 text-white flex items-start flex-col justify-center">
              <p className="text-lg font-medium mb-2">Description 7</p>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center absolute bottom-12 text-white"
              >
                <FaLinkedin className="w-6 h-6" />
                <span className="ml-2">LinkedIn</span>
              </a>
            </div>
          </div>
          <div className="relative flex items-start border-t-2 border-b-2 border-white py-12 flex-grow">
            <img
              src="/src/assets/TeamImg/Akshita4 copy.jpg" // Replace with actual image path
              alt="Content 8"
              className="w-[250px] h-[250px] object-cover"
            />
            <div className="ml-4 text-white flex items-start flex-col justify-center">
              <p className="text-lg font-medium mb-2">Description 8</p>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center absolute bottom-12 text-white"
              >
                <FaLinkedin className="w-6 h-6" />
                <span className="ml-2">LinkedIn</span>
              </a>
            </div>
          </div>
          <div className="relative flex items-start border-t-2 border-b-2 border-white py-12 flex-grow">
            <img
              src="/src/assets/TeamImg/Sid1 copy.jpg" // Replace with actual image path
              alt="Content 9"
              className="w-[250px] h-[250px] object-cover"
            />
            <div className="ml-4 text-white flex items-start flex-col justify-center">
              <p className="text-lg font-medium mb-2">Description 9</p>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center absolute bottom-12 text-white"
              >
                <FaLinkedin className="w-6 h-6" />
                <span className="ml-2">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContentSection;
