import { Link, useSearchParams } from "react-router";
import { useState, useEffect } from "react";
import HeaderNav from "~/components/HeaderNav";
import FooterNav from "~/components/FooterNav";
import { VimeoPlayer } from "~/components/VimeoPlayer";
import { worksData, type Work } from "~/data/works";
import Marquee from "react-fast-marquee";

export function meta() {
  return [
    { title: "Work Details - AIM VFX" },
    {
      name: "description",
      content:
        "View detailed information about our creative projects and visual experiences.",
    },
  ];
}

export default function WorkDetail() {
  const [searchParams] = useSearchParams();
  const [work, setWork] = useState<Work | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const slug = searchParams.get("slug");

    if (!slug) {
      setError("Work slug is required");
      setLoading(false);
      return;
    }

    // Find the work by slug
    const foundWork = worksData.find((w: Work) => w.slug === slug);

    if (!foundWork) {
      setError("Work not found");
      setLoading(false);
      return;
    }

    setWork(foundWork);
    setLoading(false);

    // Update document title dynamically
    document.title = `${foundWork.title} - AIM VFX`;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", foundWork.description);
    }
  }, [searchParams]);

  if (loading) {
    return (
      <>
        <HeaderNav />
        <div className="min-h-screen flex items-center justify-center bg-[#F6F7FB]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#FE71FF] mx-auto mb-4"></div>
            <p className="text-[#0B1023] font-neulis-medium">
              Loading work details...
            </p>
          </div>
        </div>
      </>
    );
  }

  if (error || !work) {
    return (
      <>
        <HeaderNav />
        <div className="min-h-screen flex items-center justify-center bg-[#F6F7FB]">
          <div className="text-center">
            <h1 className="text-4xl font-neulis-bold text-[#0B1023] mb-4">
              Work Not Found
            </h1>
            <p className="text-gray-600 mb-8">
              {error || "The requested work could not be found."}
            </p>
            <Link
              to="/"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#FE71FF] to-[#4D65F8] text-white font-neulis-semibold rounded-full hover:scale-105 transition-transform duration-300"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <section className="max-w-7xl mx-auto my-10 md:p-0 px-4">
        <p className="text-[#909091] text-sm mb-2">AIM VFX STUDIO</p>
        <h2 className="lg:text-4xl text-2xl font-bold">{work.title}</h2>
        <div className="my-8">
          {work.hero_video && (
            <VimeoPlayer
              vimeoId={work.hero_video.vimeo_id}
              title={work.hero_video.title}
              autoplay={work.hero_video.autoplay}
              loop={work.hero_video.loop}
              className="rounded-2xl shadow-2xl overflow-hidden"
            />
          )}
        </div>
        <div className="md:mx-20">
          <p className="text-[#0B1023] lg:text-xl font-semibold">
            {work.description}
          </p>
        </div>
        <div className="grid lg:grid-cols-2 lg:gap-8 gap-4 my-8">
          {work.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={image}
              className={`rounded-2xl md:h-96 object-cover w-full ${work.images.length === 3 && index === work.images.length - 1 && "col-span-2"}`}
            />
          ))}
          <img
            src={work.hero_image}
            className="col-span-2 w-full rounded-2xl overflow-hidden"
            alt=""
          />
        </div>
        <div className="lg:text-5xl text-3xl font-medium my-10 leading-normal">
          Love what we did? <br /> Let’s collaborate!
        </div>
      </section>
      <div>
        <div className="flex max-w-7xl mt-10 mx-auto justify-between px-4 lg:px-0">
          <button
            className="p-2 rounded-full text-white px-4 lg:px-6 font-medium mt-2 transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50 active:scale-95 flex items-center gap-2 text-sm lg:text-base"
            style={{
              background: "linear-gradient(45deg, #FE71FF, #4D65F8)",
            }}
          >
            Related Projects
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
          {/* <h1 className="text-2xl lg:text-4xl font-bold mr-4 my-auto lg:mr-20">
            Selected Works
          </h1> */}
        </div>

        <div className="my-10 lg:my-20">
          <Marquee autoFill pauseOnHover speed={150}>
            {worksData
              .filter((w) => w.slug !== work.slug)
              .map((workItem, index) => (
                <div key={workItem.id} className="mx-2 lg:mx-4">
                  <Link
                    to={`/work?slug=${workItem.slug}`}
                    className="block group"
                  >
                    <img
                      src={workItem.hero_image}
                      alt={workItem.title}
                      className="w-full lg:h-96 h-52 max-w-xs rounded-xl lg:max-w-none object-cover"
                    />
                    <p className="mt-3 text-sm lg:text-base">
                      {workItem.title}
                    </p>
                  </Link>
                </div>
              ))}
          </Marquee>
        </div>
      </div>
      <FooterNav />
    </>
  );
}
