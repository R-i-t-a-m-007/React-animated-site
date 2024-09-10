import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa'; // Import the FaLinkedinIn icon
import { motion } from 'framer-motion';

function MeetTheTeam() {
  return (
    <section className="relative bg-[#121212] py-16 rounded-[4rem]">
      <div className="absolute top-0 left-0 p-8">
        <h2 className="text-white text-8xl font-bold mt-[6rem] w-[100%]" style={{ lineHeight: '6rem',fontFamily: '"Rowdies", sans-serif' }}>
          Meet the brains,<br></br> the brawn, &<br></br> the brilliance!
        </h2>
      </div>
      <div className="flex flex-col leading-relaxed space-y-16 mt-[32rem] px-8">
        {/* Row 1 */}
        <div className="flex flex-col space-y-12">
          <p className="text-white text-4xl font-medium">
          The masterminds behind the madness!
          </p>
          <div className="flex space-x-28">
            {renderTeamMember(
              "/src/assets/TeamImg/Sid1 copy.jpg",
              "Description 1",
              "https://www.linkedin.com"
            )}
            {renderTeamMember(
              "/src/assets/TeamImg/Pragati 2 copy.jpg",
              "Description 2",
              "https://www.linkedin.com"
            )}
            {renderTeamMember(
              "/src/assets/TeamImg/Eklavya3 copy.jpg",
              "Description 3",
              "https://www.linkedin.com"
            )}
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col space-y-12">
          <p className="text-white text-4xl font-medium">
          The operation ninjas of swift moves and seamless execution!
          </p>
          <div className="flex space-x-28">
            {renderTeamMember(
              "/src/assets/TeamImg/Akshita4 copy.jpg",
              "Description 4",
              "https://www.linkedin.com"
            )}
            {renderTeamMember(
              "/src/assets/TeamImg/Sid1 copy.jpg",
              "Description 1",
              "https://www.linkedin.com"
            )}
            {renderTeamMember(
              "/src/assets/TeamImg/Sikha8 copy.jpg",
              "Description 6",
              "https://www.linkedin.com"
            )}
          </div>
        </div>

        {/* Row 3 */}
        <div className="flex flex-col space-y-12">
          <p className="text-white text-4xl font-medium">
          The head honchos—setting the stage for greatness!          
          </p>
          <div className="flex space-x-28">
            {renderTeamMember(
              "/src/assets/TeamImg/Supriyo6 copy.jpg",
              "Description 7",
              "https://www.linkedin.com"
            )}
            {renderTeamMember(
              "/src/assets/TeamImg/Arindam7 copy.jpg",
              "Description 8",
              "https://www.linkedin.com"
            )}
            {renderTeamMember(
              "/src/assets/TeamImg/PRamita5 copy.jpg",
              "Description 5",
              "https://www.linkedin.com"
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// Helper function to render each team member with flipping animation
const renderTeamMember = (imgSrc, description, linkedinUrl) => {
  return (
    <div className="relative mb-[8rem] flex items-start border-t-2 border-b-2 border-white py-12 flex-grow">
      <img
        src={imgSrc}
        alt={description}
        className="w-[250px] h-[250px] object-cover"
      />
      <div className="ml-4 text-white flex items-start flex-col justify-center">
        {/* Flipping Text on Hover */}
        <motion.div
          className="text-lg font-medium mb-2 flex items-center justify-center"
          initial={{ rotateX: 0 }}
          whileHover={{ rotateX: -180 }}
          animate={{ rotateX: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            perspective: 1000,
            transformStyle: 'preserve-3d',
            position: 'relative'
          }}
        >
          <div style={{ backfaceVisibility: 'hidden', position: 'absolute', top: 0, left: 0 }}>
            {description}
          </div>
          <div style={{ backfaceVisibility: 'hidden', transform: 'rotateX(180deg)' }}>
            {description}
          </div>
        </motion.div>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center absolute bottom-12 text-white"
        >
          <FaLinkedinIn className="w-12 h-10 border-2 p-2 border-[#ffffff1a] rounded-full" /> {/* Use the FaLinkedinIn icon */}
          <span className="ml-0 text-xl border-2 p-[6px] border-[#ffffff1a] rounded-3xl">LinkedIn</span>
        </a>
      </div>
    </div>
  );
};

export default MeetTheTeam;
