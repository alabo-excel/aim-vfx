import React from "react";

const FooterNav = () => {
  return (
    <footer id="contact" className="bg-[#0B1023]">
      <div className="max-w-7xl mx-auto lg:p-0 p-4 text-white">
        <div className="lg:flex justify-between pt-10 items-center">
          <div className="lg:w-[24%] mb-4">
            <p>
              Astonish is Live. <br />
              If you enjoy writing sci-fi and want to expand the astonish
              universe, or if you spot any inconsistencies, email us.
            </p>
          </div>
          <div className="lg:w-[35%]">
            <p>
              aimvfx.co <br />
              copyright owned by astonish <br />
              all rights reserved 2025.
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-4 mt-10 mb-32">
          <div>
            <button className="boder-btn rounded-full lg:w-auto w-full lg:px-20 p-4 font-medium text-center text-2xl">
              Linkedin
            </button>
          </div>
          <div>
            <button className="boder-btn rounded-full lg:w-auto w-full lg:px-20 p-4 font-medium text-center text-2xl">
              Instagram
            </button>
          </div>
          <div>
            <button className="boder-btn rounded-full lg:w-auto w-full lg:px-20 p-4 font-medium text-center text-2xl">
              astonish@aimvfx.co
            </button>
          </div>
        </div>
        <img className="mx-auto" src="/images/logo.png" alt="" />
      </div>
    </footer>
  );
};

export default FooterNav;
