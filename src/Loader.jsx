import React, { useEffect, useState } from 'react';
import { ClimbingBoxLoader } from 'react-spinners';
import { CSSTransition } from 'react-transition-group';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Hide the loader after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // 4 seconds

    return () => clearTimeout(timer); // Cleanup the timeout
  }, []);

  return (
    <CSSTransition
      in={isLoading}
      timeout={500}
      classNames="loader-fade"
    >
      <div
        className="h-screen w-screen flex justify-center items-center bg-black"
      >
        <ClimbingBoxLoader color="#ffffff" loading={isLoading} size={35} />
      </div>
    </CSSTransition>
  );
};

export default Loader;