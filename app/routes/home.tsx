import HeaderNav from "~/components/HeaderNav";
import type { Route } from "./+types/home";
import FooterNav from "~/components/FooterNav";
import QuoteCard from "~/components/QuoteCard";
import Marquee from "react-fast-marquee";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Aim Vfx" },
    { name: "description", content: "Astonish must shine" },
  ];
}

export default function Home() {
  const [activeOverlay, setActiveOverlay] = useState<string | null>(null);

  const Clients = [
    "CrustnCo",
    "Roqqu",
    "Raven Bank",
    "Our Desiree",
    "Foodbay",
    "African Creator Summit",
  ];

  return (
    <>
      <HeaderNav />

      <section className="hero p-8 lg:p-20 lg:h-[100vh] h-[70vh] relative">
        <div className="lg:w-[60%] max-w-[700px] mx-auto lg:mt-44 mt-32">
          <h1 className="text-2xl lg:text-4xl relative lg:z-50 text-[#0B1023] font-bold leading-tight">
            <span
              className={`transition-all duration-300 ${activeOverlay && activeOverlay !== "motion" ? "opacity-30 blur-sm" : ""}`}
            >
              We create{" "}
            </span>
            <span
              className={`underline cursor-pointer hover:text-[#FE71FF] transition-all duration-300 ${
                activeOverlay === "motion"
                  ? "text-[#FE71FF] bg-[#FE71FF]/10 px-1 rounded scale-105"
                  : activeOverlay && activeOverlay !== "motion"
                    ? "opacity-30 blur-sm"
                    : ""
              }`}
              onMouseEnter={() => setActiveOverlay("motion")}
              onMouseLeave={() => setActiveOverlay(null)}
            >
              motion
            </span>
            <span
              className={`transition-all duration-300 ${activeOverlay && activeOverlay !== "transforming" ? "opacity-30 blur-sm" : ""}`}
            >
              {" "}
              that astonishes,{" "}
            </span>
            <span
              className={`underline cursor-pointer hover:text-[#4D65F8] transition-all duration-300 ${
                activeOverlay === "transforming"
                  ? "text-[#4D65F8] bg-[#4D65F8]/10 px-1 rounded scale-105"
                  : activeOverlay && activeOverlay !== "transforming"
                    ? "opacity-30 blur-sm"
                    : ""
              }`}
              onMouseEnter={() => setActiveOverlay("transforming")}
              onMouseLeave={() => setActiveOverlay(null)}
            >
              transforming stories
            </span>
            <span
              className={`transition-all duration-300 ${activeOverlay && activeOverlay !== "visual" ? "opacity-30 blur-sm" : ""}`}
            >
              {" "}
              into unforgettable{" "}
            </span>
            <span
              className={`underline cursor-pointer hover:text-[#A96BFB] transition-all duration-300 ${
                activeOverlay === "visual"
                  ? "text-[#A96BFB] bg-[#A96BFB]/10 px-1 rounded scale-105"
                  : activeOverlay && activeOverlay !== "visual"
                    ? "opacity-30 blur-sm"
                    : ""
              }`}
              onMouseEnter={() => setActiveOverlay("visual")}
              onMouseLeave={() => setActiveOverlay(null)}
            >
              visual experiences
            </span>
            <span
              className={`transition-all duration-300 ${activeOverlay ? "opacity-30 blur-sm" : ""}`}
            >
              .
            </span>
          </h1>

          <div className="lg:w-[30%] mt-8 mx-auto">
            <p className="text-white">
              Watching how light shifts, water flows, or objects interact in
              real life often sparks ideas for animation
            </p>
          </div>
        </div>

        {/* Dynamic Overlays */}
        {activeOverlay && (
          <div className="fixed bg-[#0B1023] w-full h-full left-0 top-0 z-40 transition-all duration-300">
            {activeOverlay === "motion" && (
              <div className="grid lg:grid-cols-3 gap-10 lg:my-32 my-14 mx-10">
                <img
                  className="rounded-xl"
                  src="/images/gifs/motion/001.gif"
                  alt=""
                />
                <img
                  className="rounded-xl lg:mt-44"
                  src="/images/gifs/motion/002.gif"
                  alt=""
                />
                <img
                  className="rounded-xl"
                  src="/images/gifs/motion/003.gif"
                  alt=""
                />
              </div>
            )}
            {activeOverlay === "transforming" && (
              <div className="grid lg:grid-cols-3 gap-10 lg:my-32 my-14 mx-10">
                <img
                  className="rounded-xl lg:mt-52"
                  src="/images/gifs/transforming-stories/001.gif"
                  alt=""
                />
                <img
                  className="rounded-xl "
                  src="/images/gifs/transforming-stories/003.gif"
                  alt=""
                />
                <img
                  className="rounded-xl lg:mt-32"
                  src="/images/gifs/transforming-stories/002.gif"
                  alt=""
                />
              </div>
            )}
            {activeOverlay === "visual" && (
              <div className="grid lg:grid-cols-3 gap-10 lg:my-32 my-14 mx-10">
                <img
                  className="rounded-xl"
                  src="/images/gifs/visual-experience/001.gif"
                  alt=""
                />
                <img
                  className="rounded-xl lg:mt-72"
                  src="/images/gifs/visual-experience/002.gif"
                  alt=""
                />
                <img
                  className="rounded-xl"
                  src="/images/gifs/visual-experience/003.gif"
                  alt=""
                />
              </div>
            )}
          </div>
        )}
      </section>

      <section className="text-[#0B1023]">
        <div>
          <div className="flex max-w-7xl mt-10 mx-auto justify-between px-4 lg:px-0">
            <button
              className="p-2 rounded-full text-white px-4 lg:px-6 font-medium mt-2 transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50 active:scale-95 flex items-center gap-2 text-sm lg:text-base"
              style={{
                background: "linear-gradient(45deg, #FE71FF, #4D65F8)",
              }}
            >
              see all works
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-up-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                />
              </svg>
            </button>
            <h1 className="text-2xl lg:text-4xl font-bold mr-4 my-auto lg:mr-20">
              Selected Works
            </h1>
          </div>

          <div className="my-10 lg:my-20">
            <Marquee autoFill pauseOnHover>
              <div className="mx-2 lg:mx-4">
                <img
                  src="/images/works-1.png"
                  alt=""
                  className="w-full max-w-xs lg:max-w-none"
                />
                <p className="mt-3 text-sm lg:text-base">Streetz Food Naija</p>
              </div>
              <div className="mx-2 lg:mx-4">
                <img
                  src="/images/works-2.png"
                  alt=""
                  className="w-full max-w-xs lg:max-w-none"
                />
                <p className="mt-3 text-sm lg:text-base">Our Desiree</p>
              </div>
              <div className="mx-2 lg:mx-4">
                <img
                  src="/images/works-3.png"
                  alt=""
                  className="w-full max-w-xs lg:max-w-none"
                />
                <p className="mt-3 text-sm lg:text-base">CrustndCo</p>
              </div>
            </Marquee>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 lg:px-0">
          <div className="flex justify-between">
            <button
              className="p-2 rounded-full text-white px-4 lg:px-6 font-medium mt-2 transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50 active:scale-95 flex items-center gap-2 text-sm lg:text-base"
              style={{
                background: "linear-gradient(45deg, #FE71FF, #4D65F8)",
              }}
            >
              who we are
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-up-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                />
              </svg>
            </button>
            <div></div>
          </div>

          <div className="w-full lg:my-0 my-6 lg:w-[43%] ml-auto mr-4 lg:mr-52 px-4 lg:px-0">
            <p className="text-base lg:text-lg font-medium">
              Aim VFX is a creative powerhouse dedicated to redefining how
              brands connect with their audiences. Specializing in crafting
              motion identities, we deliver work that isn't just visually
              captivating but also intentional, strategic, and deeply rooted in
              what makes each brand unique.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="mx-4 lg:mx-20">
              <img
                src="/images/frame.png"
                alt=""
                className="w-full max-w-md lg:max-w-none"
              />
            </div>
            <div className="w-full lg:w-[35%] mt-8 lg:mt-20 px-4 lg:px-0">
              <p className="text-[#A6A6A6] text-sm lg:text-base">
                What sets Astonish apart is the ability to seamlessly integrate
                with brand teams, working as true partners to develop motion
                systems, guidelines, and toolkits that ensure consistency across
                every platform. Every project is designed to help brands not
                just scale but thrive in today's fast-paced digital culture.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto p-8 lg:p-20 pb-0">
          <div className="flex justify-between px-4 lg:px-0">
            <div></div>
            <h1 className="text-2xl lg:text-4xl font-bold">Our Clients</h1>
          </div>
        </div>
        <div className="my-10 lg:my-20">
          <Marquee autoFill>
            {Clients.map((client, index) => (
              <p
                key={index}
                className="px-6 lg:px-12 text-base lg:text-lg font-medium"
              >
                {client}
              </p>
            ))}
          </Marquee>
        </div>
      </section>

      <section className="bg-[#0B1023] relative">
        <div className="max-w-6xl text-white mx-auto p-4 lg:px-20">
          <div className="flex justify-between px-4 lg:px-0">
            <button
              className="p-2 rounded-full px-4 lg:px-6 font-medium mt-2 transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50 active:scale-95 flex items-center gap-2 text-sm lg:text-base"
              style={{
                background: "linear-gradient(45deg, #FE71FF, #4D65F8)",
              }}
            >
              see all services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-up-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                />
              </svg>
            </button>
            <h1 className="text-2xl lg:text-4xl my-auto font-bold">
              Our Service
            </h1>
          </div>
          <p className="text-lg lg:text-xl w-full lg:w-[60%] leading-8 ml-auto my-8 px-4 lg:px-0">
            Exceptional work requires a meticulous process from the core idea
            all the way through to the final delivery.
          </p>
          <div className="lg:mt-32 mt-24">
            <img
              className="mx-auto lg:w-auto w-[80%] rounded-xl max-w-2xl lg:max-w-none"
              src="/images/gifs/footer.gif"
              alt=""
            />
          </div>
          <div className="absolute left-0 right-0 top-96 h-auto">
            <Marquee loop={0} autoFill className="!overflow-hidden ">
              <p className="text-2xl lg:text-3xl mx-2 font-medium bg-gradient-to-r from-[#FE71FF] via-[#A96BFB] to-[#4D65F8] bg-clip-text text-transparent">
                End to End Production
              </p>
              <div className="bg-white mx-4 rounded-full w-4 h-4"></div>
              <p className="text-2xl lg:text-4xl mx-2 font-medium bg-gradient-to-r from-[#FE71FF] via-[#A96BFB] to-[#4D65F8] bg-clip-text text-transparent">
                Motion Design
              </p>
              <div className="bg-white mx-4 rounded-full w-4 h-4"></div>
              <p className="text-2xl lg:text-4xl mx-2 font-medium bg-gradient-to-r from-[#FE71FF] via-[#A96BFB] to-[#4D65F8] bg-clip-text text-transparent">
                Creative Direction
              </p>
              <div className="bg-white mx-4  rounded-full w-4 h-4"></div>
              <p className="text-2xl lg:text-4xl mx-2 font-medium bg-gradient-to-r from-[#FE71FF] via-[#A96BFB] to-[#4D65F8] bg-clip-text text-transparent">
                Animation
              </p>
              <div className="bg-white mx-4  rounded-full w-4 h-4"></div>
              <p className="text-2xl lg:text-4xl mx-2 font-medium bg-gradient-to-r from-[#FE71FF] via-[#A96BFB] to-[#4D65F8] bg-clip-text text-transparent">
                Branding
              </p>
            </Marquee>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 lg:px-0">
          <div className="mx-auto max-w-lg text-white py-16 lg:py-32">
            <h1 className="text-2xl lg:text-4xl font-bold leading-normal">
              Become a friend of Astonish and join the adventure
            </h1>
            <div className="text-center">
              <button
                className="p-4 rounded-full px-10 font-medium mt-6 mx-auto text-[#0B1023] transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50 active:scale-95"
                style={{
                  background:
                    "linear-gradient(45deg, #FFFFFF, #FE71FF, #A96BFB, #4D65F8)",
                }}
              >
                Get in touch
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0">
            <div></div>
            <div>
              <QuoteCard />
            </div>
          </div>
        </div>
      </section>

      <FooterNav />
    </>
  );
}
