// Type definition for work data
export interface Work {
  id: number;
  slug: string;
  title: string;
  description: string;
  hero_image: string;
  hero_video?: {
    vimeo_id: string;
    title: string;
    autoplay?: boolean;
    loop?: boolean;
  };
  images: string[];
  footer_img?: string;
}

export const worksData: Work[] = [
  {
    id: 1,
    slug: "streetz-food-naija",
    title: "Street Food Naija",
    description:
      "We crafted the dynamic opening montage and motion visuals for Street Food Naija a fiery docu-reality series where 13 street food chefs battle through intense challenges for the title King of Street Foodz. The prize? Cash, upgraded workspaces, and tools to cut costs and raise their game. Our visuals captured the grit, flavor, and high-energy spirit of Nigeria's street food culture.",
    hero_image: "/images/gifs/transforming-stories/002.gif",
    hero_video: {
      vimeo_id: "1082154517",
      title: "Street Food Naija Opener",
      autoplay: false,
      loop: true,
    },
    images: [
      "/images/works/streetz-food-1.png",
      "/images/works/streetz-food-2.png",
      "/images/works/streetz-food-3.png",
      "/images/works/streetz-food-4.png",
    ],
  },
  {
    id: 2,
    slug: "our-desiree",
    title: "Our Desiree",
    description:
      "As a non-profit organization that will depend on the support of donors to reach their mission, Our Desiree was looking to establish a presence / or create an awareness, getting the word out about their important mission to put smiles on the faces of needy kids in a professional way that would be taken seriously. We helped establish a brand which fed through animations, websites, social media content, etc.",
    hero_image: "/images/gifs/transforming-stories/001.gif",
    hero_video: {
      vimeo_id: "769955967",
      title: "Brand Motion OurDesiree",
      autoplay: false,
      loop: true,
    },
    images: [
      "/images/works/our-desiree-1.png",
      "/images/works/our-desiree-2.png",
      "/images/works/our-desiree-3.png",
      "/images/works/our-desiree-4.png",
    ],
  },
  {
    id: 3,
    slug: "crustnco",
    title: "CrustndCo",
    description: `Crust & Co is a vibrant sandwich mobile restaurant serving freshly made, flavor-packed creations on the go. Our challenge was to craft a bold, memorable brand identity that could live seamlessly across physical touchpoints, packaging, and digital platforms  all while capturing the warm, street-smart personality of the business.

    We developed a complete branding system that blends playful charm with clean, modern design. This included a versatile logo suite, an energetic color palette, expressive typography, and a set of custom patterns and iconography inspired by the textures and shapes of bread, fillings, and street food culture.

    To ensure brand consistency across all channels, we created a scalable design system that covers everything from social media templates and signage to uniforms and vehicle wraps. The result is a cohesive, flexible identity that’s instantly recognizable, adaptable for future growth, and irresistibly appetizing.`,
    hero_image: "/images/works-3.png",
    hero_video: {
      vimeo_id: "1109419036",
      title: "Crust brand",
      autoplay: false,
      loop: true,
    },
    footer_img: "",
    images: [
      "/images/works/crustnco-1.gif",
      "/images/works/crustnco-2.png",
      "/images/works/crustnco-3.png",
      "/images/works/crustnco-4.gif",
    ],
  },
  {
    id: 4,
    slug: "roqqu",
    title: "Roqqu “Need Cash Fast?” Animation Campaign",
    description:
      "We brought Roqqu’s speed promise to life in a bold, high-energy animation. The spot asks one question  “Need cash fast?” Then delivers the answer in seconds: convert Bitcoin to Naira instantly, with no waiting and no worries. Fluid transitions, sharp typography, and Roqqu’s vibrant brand palette made the message feel exactly like the service  swift, secure, and seamless.",
    hero_image: "/images/gifs/motion/003.gif",
    images: [
      "/images/works/roqqu-1.png",
      "/images/works/roqqu-2.png",
      "/images/works/roqqu-3.png",
      "/images/works/roqqu-4.png",
    ],
    hero_video: {
      vimeo_id: "1109289226",
      title: "Roqqu “Need Cash Fast?”",
      autoplay: false,
      loop: true,
    },
  },
  {
    id: 5,
    slug: "future-of-education",
    title: "Future of Education Summit Ad",
    description:
      "The Future of Education Lagos Summit is set to redefine the educational landscape, introducing a modernized system that bridges the gap between traditional learning and the future. To generate awareness and anticipation for this groundbreaking event, the organizers sought an engaging, visually compelling animation that would captivate the public and communicate the summit's vision effectively.",
    hero_image: "/images/gifs/future-of-education.gif",
    hero_video: {
      vimeo_id: "1109289920",
      title: "Future of Education Summit",
      autoplay: false,
      loop: true,
    },
    images: [
      "/images/works/future-of-education-1.png",
      "/images/works/future-of-education-2.png",
      "/images/works/future-of-education-3.png",
      "/images/works/future-of-education-4.png",
    ],
  },
  {
    id: 6,
    slug: "nbn-lab",
    title: "Animated Launch Video NBN Lab",
    description: `For the launch of NBN Labs, a forward-thinking blockchain brand, our agency was tasked with crafting a high-impact animated video that would introduce them to the world with style and clarity. We designed a sleek, motion-driven brand film that captured their innovative spirit while making blockchain feel approachable and exciting.
      Blending bold typography, dynamic transitions, and playful visual elements, the animation established NBN Labs as a confident new player in the digital space ready to disrupt, connect, and inspire.`,
    hero_image: "/images/gifs/nbn-lab.gif",
    hero_video: {
      vimeo_id: "1109288100",
      title: "NBN Labs launch",
      autoplay: false,
      loop: true,
    },
    images: [
      "/images/works/nbn-lab-1.png",
      "/images/works/nbn-lab-2.png",
      "/images/works/nbn-lab-3.png",
    ],
  },
  {
    id: 7,
    slug: "ololade-personal-branding",
    title: "Ololade Personal Branding",
    description: `Born from Project ’94, Ololade is on a bold mission to reconnect a generation with the fatherhood of God. His message is unapologetic, his passion contagious: raising sons and daughters who live as proof of God’s love, grace, and purpose.

    Through his passionate message, he inspires young people to embrace their divine purpose and walk boldly in the light of the Father’s guidance`,
    hero_image: "/images/works-5.png",
    hero_video: {
      vimeo_id: "1083246041",
      title: "Ololade Brand Video",
      autoplay: false,
      loop: true,
    },
    images: [
      "/images/works/ololade-brand-1.png",
      "/images/works/ololade-brand-2.png",
      "/images/works/ololade-brand-3.png",
      "/images/works/ololade-brand-4.png",
    ],
  },
];
