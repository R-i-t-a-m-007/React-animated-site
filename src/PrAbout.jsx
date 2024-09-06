import 'locomotive-scroll/dist/locomotive-scroll.css'; // Ensure this is imported if needed

function PrAbout() {


  // Animation variants
  

  return (
    <div className="who-we-are flex flex-col md:flex-row bg-[#252525] rounded-[4rem] items-start justify-between py-20 px-14">
        <div className="w-full md:w-1/2">
        <h2 className="text-6xl font-semibold text-white mb-4" style={{ fontFamily: '"Kanit", sans-serif' }}>
          Public Relations
        </h2>
      </div>
      
      {/* Right Side */}
      <div className="w-full md:w-2/3">
        <div className="flex flex-col space-y-4">
          <p className="text-9xl text-white font-medium" style={{ fontFamily: '"Instrument Sans", sans-serif' }}>
            Lorem ipsum<br /> dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrAbout;
