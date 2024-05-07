import {
  UserIcon,
  SearchIcon,
  CurrencyIocnINR,
  UserPlusIcon,
  ThumbsUpIcon,
  TaskIcon,
  ShareIcon,
} from "./Icons";

export const navbarLinks = {
  job: {
    title: "GET JOBS",
    hiddenTitle: "LOOKING FOR A JOB",
    links: [
      {
        title: "My applied jobs",
        path: "/jobs",
        icon: UserIcon,
      },
      {
        title: "Search jobs",
        path: "/jobs",
        icon: SearchIcon,
      },
      {
        title: "Search salary",
        path: "/jobs",
        icon: CurrencyIocnINR,
      },
      {
        title: "Ask for referral",
        path: "/jobs",
        icon: UserPlusIcon,
      },
    ],
  },

  refer: {
    title: "REFER",
    hiddenTitle: "RECOMMEND AND EARN",
    links: [
      {
        title: "Recommend from shortlist",
        path: "/jobs",
        icon: ThumbsUpIcon,
      },
      {
        title: "Recommend to specific company",
        path: "/jobs",
        icon: TaskIcon,
      },
      {
        title: "Refer this extension",
        path: "/jobs",
        icon: ShareIcon,
      },
    ],
  },
};
 

export const selectOptions = [
  {
    title: "Role",
    placeholder: "Roles",
    multiple: true,
    nested: true,
    id : "role",
    options: [
      {
        category: "Engineering",
        clusters: [
          "backend",
          "frontend",
          "fullstack",
          "iOS",
          "flutter",
          "react native",
          "android",
          "frontend",
          "tech lead",
          "dev-ops",
          "data engineer",
          "data science",
          "computer-vision",
          "nlp",
          "deep-learning",
          "test / qa",
          "Web3",
          "deep-learning",
          "sre",
          "data-infrastructure",
        ],
      },
      {
        category: "Design",
        clusters: [
          "designer",
          "design manager",
          "graphic designer",
          "product designer",
        ],
      },
      {
        category: "Product",
        clusters: ["product manager"],
      },
      {
        category: "Operations",
        clusters: ["Operations Manager", "founder’s office/chief Of staff"],
      },
      {
        category: "Sales",
        clusters: [
          "sales development representative",
          "account executive",
          "account manager",
        ],
      },
      {
        category: "Marketing",
        clusters: [
          "digital marketing manager",
          "growth hacker",
          "Marketing",
          "product marketing manager",
        ],
      },
      {
        category: "Other Engineering",
        clusters: ["hardware", "mechanical", "Systems"],
      },
      {
        category: "Business Analyst",
        clusters: ["business analyst"],
      },
      {
        category: "Data Analyst",
        clusters: ["data analyst"],
      },
      {
        category: "Project Manager",
        clusters: ["project manager"],
      },
      {
        category: "Management",
        clusters: ["management"],
      },
      {
        category: "Legal",
        clusters: ["legal"],
      },
      {
        category: "hr",
        clusters: ["hr"],
      },
      {
        category: "Finance",
        clusters: ["finance"],
      },
    ],
  },
  {
    title: "Tech Stack",
    placeholder: "Tech Stack",
    multiple: true,
    nested: false,
    id : "techStack",
    options: [
      "Python",
      "Java",
      "GoLang",
      "Ruby/Rails",
      "C++",
      "Kotlin",
      "Django",
      "C#",
      "GraphQL",
      "Flask",
      "Typescript",
      "AWS",
      "Javascript",
      "Rust",
      "NodeJS",
      "React",
    ],
  },
  {
    title: "Min Base Pay",
    nested: false,
    placeholder: "Minimum Base Pay",
    options: ["0L", "10L", "20L", "30L", "40L", "50L", "60L", "70L"],
    id : "minBasePay",
  },
  {
    title: "Experience",
    placeholder: "Experience",
    nested: false,
    options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    id : "experience",
  },
  {
    title: "Remote/on-site",
    nested: false,
    placeholder: "Remote/on-site",
    options: ["Remote", "Hybrid", "In-office"],
    id : "remoteOnSite",
  },
];
