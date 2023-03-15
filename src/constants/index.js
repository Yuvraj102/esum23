import {
  keynote,
  panel,
  standup,
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,
  send,
  shield,
  star,
  thinker,
  pitchDesk,
  hackathon,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about-us",
    title: "About Us",
  },
  {
    id: "what-we-provide",
    title: "What We Provide",
  },
  {
    id: "events",
    title: "Events",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Why E-summit",
    content:
      "To find a way out of the darkness that has engulfed us over the past two years, Indian youth needs to take on the mantle and show us the path to a new world where optimism, creativity, innovation, and ambition thrive.",
  },
  {
    id: "feature-2",
    icon: send,
    title: "About Events",
    content:
      "Entrepreneurship Summit is a 4-day event that is being organized with the vision providing a platform that stimulates discussion on ideas.",
  },
];

export const speakers = [
  {
    id: "speaker-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "speaker-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "speaker-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];

export const events = [
  {
    id: "event-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Keynote Session",
    title: "Technical Session",
    // img: thinker,
    img: panel,
    desc1:
      "The E summit shall be graced by various eminent entrepreneurs who have established and etched thier name in the perpetual adjective of social contributors with captivating money minded caliber They shall be gracing the event with their wise words in the form of speaker sessions which will be attended by an estorically driven audience",
  },
  {
    id: "event-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Panel Discussion",
    title: "Industry Expert",
    // img: pitchDesk,
    img: keynote,
    desc1:
      "Without a great discussion there can never be a great result Industry experts from various domains shall gather together to form an irrestible lineup for the panel discussion that will be a vital part of E-Summit 23 The panel shall be discussing various domains completely related to entrepreneurship and its contributions to society as well as entrepreneurship with future opportunities and many more topics.",
  },
  {
    id: "event-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Standup",
    title: "Comedy Hours",
    // img: hackathon,
    img: standup,
    desc1:
      "A show full of laughter, a show full of entertainment, a dose of comedy to lighten up the senses of your dazzling embellishments! E-Cell RSCOE presents you the finest art of lightening up the mood and that is comedy! Comedy unleashed, comedy's supremacy and here it is , to leave a mark on the experience of your event which will make it a remarkable one! They say if you have seen comedy, you've seen everything. Here we come barging in, bringing you everything!",
  },
];

export const whatWeProvide = [
  {
    id: "provide-1",
    name: "E-TALKS",
    title:
      "A pantheon of the best speakers brought to you by those dedicated to entrepreneurship.",
  },
  {
    id: "provide-2",
    name: "COMPETITIONS",
    title:
      "Battle it out in different competitions catering to core entrepreneurial domains to emerge victorias.",
  },
  {
    id: "provide-3",
    name: "WORKSHOPS",
    title:
      "Get your thinking caps on and get the answer to all of your questions in our workshops.",
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Events",
    value: "15+",
  },
  {
    id: "stats-2",
    title: "Attendees",
    value: "300+",
  },
  {
    id: "stats-3",
    title: "speakers",
    value: "10+",
  },
  {
    id: "stats-3",
    title: "Startups",
    value: "10+",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "About-Us",
        link: "/#about-us",
      },
      {
        name: "Events",
        link: "/#events",
      },
      {
        name: "Contact Us",
        link: "mailto:someone@example.com",
      },
    ],
  },
  {
    title: "Events",
    links: [
      {
        eid: "keynote",
        name: "Keynote session",
        link: "/#keynote",
      },
      {
        eid: "panel",
        name: "Panel Discussion",
        link: "/#panel",
      },
      {
        eid: "standup",
        name: "Standup Comedy",
        link: "/#standup",
      },
    ],
  },
  // {
  //   title: "Partner",
  //   links: [
  //     {
  //       name: "Our Partner",
  //       link: "https://www.hoobank.com/our-partner/",
  //     },
  //     {
  //       name: "Become a Partner",
  //       link: "https://www.hoobank.com/become-a-partner/",
  //     },
  //   ],
  // },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://instagram.com/e_cell_rscoe?igshid=YmMyMTA2M2Y=",
  },

  {
    id: "social-media-3",
    icon: twitter,
    link: "https://twitter.com/ecell_rscoe?t=rMZa4fZNwoBr9LsYFmHyfw&s=09",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/company/rscoe-e-cell/",
  },
];

export const sponsors = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];
