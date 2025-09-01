import React from "react";
import Marquee from "react-fast-marquee";

export function meta() {
  return [
    { title: "Growth and Events - AIM VFX" },
    {
      name: "description",
      content: "",
    },
  ];
}

export default function Enquiry() {
  return (
    <div className="bg-[#0C1023] min-h-screen text-white font-neulis-regular">
      {/* Header Section */}

      <div className="max-w-7xl mx-auto pt-12 px-4">
        <button
          onClick={() => window.history.back()}
          className="my-3 p-3 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 ease-in-out transform hover:scale-110 shadow-lg hover:shadow-xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-arrow-left text-[#0B1023]"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
            />
          </svg>
        </button>
        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          Create Great{" "}
          <span className="bg-gradient-to-r from-[#FE71FF] to-[#4D65F8] bg-clip-text text-transparent">
            Events
          </span>
        </h1>
        <div className="md:flex gap-12 mb-12">
          <div className="flex-shrink-0 flex justify-center items-center w-full md:w-1/2 mb-8 md:mb-0">
            <video src="/images/Aimvfx-events-Video.mp4" controls loop autoPlay muted className="w-full h-auto rounded-lg"></video>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-bold mb-2">
              Host a ‘Killer’ Event Without the Chaos
            </h2>
            <p className="text-[#B2B2B2] mb-18">
              Remove the overwhelm. Keep the profit and results.
            </p>
            <p className="text-[#B2B2B2] mb-6">
              Most events get stuck in the wrong details.
              <br />
              Low ticket sales. Weak registrations. Sponsors that ghost.
              <br />
              The result? Stress, wasted money, and missed opportunities.
              <br />
              With Create Great Events, we don’t “plan” events.
            </p>
            <p className="text-[#B2B2B2] mb-4">
              We engineer them to perform.
              <br />
              We’re the team that pulled in 2,000+ registrations in two weeks,
              filled a hall with 1,000 live attendees, and closed sponsors with
              days to spare. When the stakes are high, when you need both people
              and profit — that’s where we shine.
            </p>
          </div>
        </div>
      </div>

      {/* Who We Work With */}
      <div className="mt-20">
        <div className="max-w-7xl mx-auto ">
          <div className="max-w-xl p-4 ml-auto">
            <h2 className="text-4xl mb-4">Who We Work With</h2>
            <p className="text-[#B2B2B2] mb-8">
              We partner with people who don’t just want an event. They want
              impact:
            </p>
          </div>
        </div>
        <div className="mb-8">
          <Marquee
            speed={60}
            loop={0}
            pauseOnHover
            gradient={false}
            className="w-full"
          >
            <div className="flex gap-4">
              <div className="bg-gradient-to-r ml-4 from-[#A96BFB] to-[#FE71FF] rounded-xl p-6 text-white text-2xl w-80">
                Founders & Startups
                <br />
                <p className="font-normal text-[#181A2A] text-xs leading-loose">
                  Launching summits, demos, or product activations that scale
                  their brand.
                </p>
              </div>
              <div className="bg-gradient-to-r from-[#FE71FF] to-[#4D65F8] rounded-xl p-4 text-white text-2xl w-80">
                Thought Leaders & Coaches
                <br />
                <p className="font-normal text-[#181A2A] text-xs leading-loose">
                  Hosting conferences and workshops that build authority.
                </p>
              </div>
              <div className="bg-gradient-to-r from-[#4D65F8] to-[#A96BFB] rounded-xl p-4 text-white text-2xl w-80">
                Global Brands & Sponsors
                <br />
                <p className="font-normal text-[#181A2A] text-xs leading-loose">
                  Investing in activations that deliver ROI, not vanity metrics.
                </p>
              </div>
              <div className="bg-gradient-to-r from-[#A96BFB] to-[#FE71FF] rounded-xl p-4 text-white text-2xl w-80">
                Creative Communities
                <br />
                <p className="font-normal text-[#181A2A] text-xs leading-loose">
                  Turning passion into experiences people never forget.
                </p>
              </div>
            </div>
          </Marquee>
        </div>
        <div className="max-w-7xl mx-auto ">
          <div className="max-w-xl p-4 ml-auto">
            <p className="text-[#B2B2B2] mb-8">
              If your goal is registrations, revenue, or recognition at scale,
              you’re our kind of client.
            </p>
          </div>
        </div>
      </div>

      {/* What You Actually Get */}
      <div className="max-w-7xl mx-auto px-4 mt-12 py-12 border-b border-wite">
        <h2 className="text-4xl mb-4">What You Actually Get</h2>
        <p className="text-[#B2B2B2] mb-4">
          We don’t drown you in buzzwords. We deliver the systems that matter:
        </p>
        <ul className="text-[#B2B2B2] mb-8">
          <li>
            <span className="font-bold text-white">A Playbook That Works:</span>{" "}
            title-tested, refined from real events.
          </li>
          <li>
            <span className="font-bold text-white">
              Registration That Converts:
            </span>{" "}
            emails, ads, and messaging designed to fill the room.
          </li>
          <li>
            <span className="font-bold text-white">Sponsor Magnet System:</span>{" "}
            decks, strategy, and outreach that bring in real investment.
          </li>
          <li>
            <span className="font-bold text-white">Stress-Free Execution:</span>{" "}
            chaos, no guesswork. You focus on the stage.
          </li>
          <li>
            <span className="font-bold text-white">Proof, Not Promises:</span>{" "}
            results you can measure, not hype you can’t trust.
          </li>
        </ul>
      </div>

      {/* Case Study Section */}
      <div className="max-w-7xl mx-auto px-4 mt-12">
        <h2 className="text-4xl mb-4">
          Latest Case Study:{" "}
          <span className="bg-gradient-to-r from-[#FE71FF] to-[#4D65F8] bg-clip-text text-transparent font-bold">
            INDABA 2025
          </span>
        </h2>
        <div className="max-w-2xl my-6">
          <h3 className="mb-2 text-xl">The Challenge:</h3>
          <p className="text-[#B2B2B2] mb-4">
            A US personal brand wanted to host a major summit in Africa with
            only two weeks to pull it off. They needed registrations, ticket
            sales, and sponsors — fast.
          </p>
        </div>
        <div className="mb-8">
          <div className="lg:grid lg:grid-cols-3 gap-4 mb-6 md:mb-0">
            <img
              src="/images/indaba-2.jpg"
              alt="Indaba 2025"
              className="rounded-xl w-full col-span-2 lg:mb-0 mb-4 h-96 object-cover"
            />
            <img
              src="/images/indaba-3.jpg"
              alt="Indaba 2025"
              className="rounded-xl w-full h-96 object-cover"
            />
            <div className="col-span-3 gap-6 mt-6 lg:flex justify-between">
              <img
                src="/images/indaba-1.jpg"
                alt="Indaba 2025"
                className="rounded-xl lg:w-1/2 w-full h-80 object-cover"
              />
              <div className="lg:w-1/2 my-auto">
                <h3 className="text-xl my-4">Our Approach:</h3>
                <ul className="text-[#B2B2B2] mb-4 space-y-3">
                  <li>Defined a clear event value proposition.</li>
                  <li>Built a conversion-focused landing page.</li>
                  <li>Targeted the right audience with precision.</li>
                  <li>Designed an email sequence to nurture signups.</li>
                  <li>
                    Produced a sponsor deck that properly detailed ROI
                    opportunities.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:flex justify-between gap-4 mb-4">
          <div className="lg:w-1/2 mb-4">
            <span className="bg-gradient-to-r from-[#FE71FF] to-[#4D65F8] bg-clip-text text-transparent font-bold text-lg">
              The Results
            </span>
            <ul className="space-y-1 mt-4">
              <li className="flex items-center gap-3">
                <span className="w-4 h-4 rounded-md bg-gradient-to-r from-[#FE71FF] to-[#4D65F8] flex-shrink-0"></span>
                <span>2,000+ Registrations in 14 days</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-4 h-4 rounded-md bg-gradient-to-r from-[#A96BFB] to-[#FE71FF] flex-shrink-0"></span>
                <span>1,000+ Live Attendees</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-4 h-4 rounded-md bg-gradient-to-r from-[#FE71FF] to-[#A96BFB] flex-shrink-0"></span>
                <span>25 Ticket Sales at $200 each</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-4 h-4 rounded-md bg-gradient-to-r from-[#4D65F8] to-[#FE71FF] flex-shrink-0"></span>
                <span>2 Sponsors Closed</span>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/2 ">
            <span className="bg-gradient-to-r from-[#FE71FF] to-[#4D65F8] bg-clip-text text-transparent font-bold text-lg">
              The Impact
            </span>
            <p className="mt-4">
              In two weeks, we turned a high-pressure <br /> idea into a packed,
              profitable event. <br /> INDABA showed that when clarity meets{" "}
              <br />
              execution, deadlines don’t matter — results do.
            </p>
          </div>
        </div>
      </div>

      {/* Other Recent Projects */}
      <div className="max-w-7xl mx-auto px-4 mt-12 border-y border-white py-20">
        <div className="lg:flex justify-between">
          <div className="lg:w-1/2">
            <h2 className="text-4xl mb-4">Other Recent Projects</h2>
          </div>
          <div className="lg:w-1/2 gap-4 text-[#B2B2B2] space-y-4">
            <div>
              <span className="font-bold text-white">
                Boyode Conference 2025
              </span>{" "}
              - Marketing and growth funnel strategy with 2,500 registrations.
            </div>
            <div>
              <span className="font-bold text-white">Reform Summit 2024</span> -
              Full event marketing with 1,000 live attendance.
            </div>
            <div>
              <span className="font-bold text-white">
                FCDC Marketers Meetup
              </span>{" "}
              - Meetup experience for professionals attracting hundreds of
              attendees every edition.
            </div>
          </div>
        </div>
      </div>

      {/* Why Work With Us */}
      <div className="max-w-7xl mx-auto px-4 py-20 border-b border-white">
        <div className="lg:flex justify-between">
          <div className="lg:w-1/2">
            <h2 className="text-4xl mb-4">Why Work With Us</h2>
          </div>
          <div className="lg:w-1/2 md:flex gap-8">
            <div className="md:w-2/3 text-[#B2B2B2] mb-4">
              Because we’ve lived on both sides. We’ve seen events crumble from
              weak promotion, poor timing, and missed details. And we’ve built a
              repeatable model that flips those pitfalls into wins. From
              grassroots meetups to international summits, we design events that
              perform like growth machines.
              <br />
              <br />
              That’s why we say:
              <br />
              <br />
              <span className="font-bold text-white">
                We don’t plan events. We create great events.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 mt-12 pb-16 lg:flex justify-between">
        <div className="w-1/2"></div>
        <div className="lg:w-1/2">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl mb-2">
              Book a Free 15-Minute Strategy Call
            </h2>
          </div>
          <div className="lg:flex gap-8 mt-4">
            <button className="rounded-full lg:w-52 w-full text-lg px-8 py-3 boder-btn">
              <span className="bg-gradient-to-r from-[#FE71FF] to-[#4D65F8] bg-clip-text text-transparent">
                Book Now
              </span>
            </button>
            <div className="text-[#B2B2B2] text-sm max-w-sm lg:my-auto my-4">
              Let’s define the outcome that matters most — registrations,
              sponsors, or revenue.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
