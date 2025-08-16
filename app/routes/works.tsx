import React from "react";
import { Link } from "react-router";
import FooterNav from "~/components/FooterNav";
import HeaderNav from "~/components/HeaderNav";
import { worksData } from "~/data/works";

export function meta() {
  return [
    { title: "Our Works - AIM VFX" },
    {
      name: "description",
      content:
        "",
    },
  ];
}


const works = () => {
  return (
    <>
      <HeaderNav />
      <section className="hero p-8 lg:p-20 relative">
        
        <h2 className="text-center text-2xl mt-10 lg:text-4xl text-[#0B1023] font-bold">
          Our Works
        </h2>
      </section>
      <section className="max-w-7xl mx-auto my-10">
        <div className="grid lg:grid-cols-2 gap-4">
          {worksData.map((work, index) => (
            <div key={work.id} className="mx-2 lg:mx-4">
              <Link to={`/work?slug=${work.slug}`} className="block group">
                <img
                  src={work.hero_image}
                  alt={work.title}
                  className="w-full lg:h-96 h-52 lg:max-w-none object-cover"
                />
                <p className="my-3 text-sm lg:text-base">{work.title}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>
      <FooterNav />
    </>
  );
};

export default works;
