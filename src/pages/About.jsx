import React from 'react';

const About = () => {
  return (
    <section className="relative py-24">
      <div className="w-full px-4 mx-auto max-w-7xl md:px-5 lg:px-5">
        <div className="grid items-center justify-start w-full grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="inline-flex flex-col items-center justify-start w-full gap-10 lg:items-start">
            <div className="flex flex-col items-center justify-start w-full gap-4 lg:items-start">
              <h2 className="text-4xl font-bold leading-normal text-center text-gray-900 font-manrope lg:text-start">
                Unique and Customizable T-Shirts & Mugs
              </h2>
              <p className="text-base font-normal leading-relaxed text-center text-gray-500 lg:text-start">
                Discover a wide range of stylish t-shirts and mugs designed to
                fit your personality and preferences. Whether you're looking for
                a thoughtful gift or a unique way to express yourself, our
                collection has something for everyone.
              </p>
            </div>
            <button className="sm:w-fit w-full px-3.5 py-2 bg-[#F4295B] hover:bg-pink-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
              <span className="px-1.5 text-white text-sm font-medium leading-6">
                Shop Now
              </span>
            </button>
          </div>
          <img
            className="object-cover h-full mx-auto lg:mx-0 rounded-3xl"
            src="/ecommerce.png"
             alt="T-Shirts and Mugs"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
