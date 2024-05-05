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
        icon: UserIcon ,
      },
      {
        title: "Search jobs",
        path: "/jobs",
        icon: SearchIcon ,
      },
      {
        title: "Search salary",
        path: "/jobs",
        icon: CurrencyIocnINR ,
      },
      {
        title: "Ask for referral",
        path: "/jobs",
        icon: UserPlusIcon ,
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
        icon: ThumbsUpIcon ,
      },
      {
        title: "Recommend to specific company",
        path: "/jobs",
        icon: TaskIcon ,
      },
      {
        title: "Refer this extension",
        path: "/jobs",
        icon: ShareIcon ,
      },
    ],
  },
};
