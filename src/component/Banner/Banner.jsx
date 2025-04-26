import React from 'react';

const Banner = () => {
    return (
        <div
  className="hero h-[550px] mx-auto  rounded-3xl bg-white m-5"
  style={{
    backgroundImage:
      "url(https://i.ibb.co/27WtZ0RM/banner-img-1.png)",
  }}
>
  <div className="max-w-md"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className=" lg:w-[1009px] sm:w-[600px]">
      <h1 className="mb-5 text-5xl/15 font-bold px-20">HIt avoids subjective claims or exaggeration that might raise red flags legally</h1>
      <p className="mb-5">
      Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
      </p>
    </div>
  </div>
</div>
    );
};

export default Banner;