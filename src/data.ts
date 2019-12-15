import logoSrc from "./assets/images/logo.png";
import clientSizeIconSrc from "./assets/images/icon_1.png";
import industryFocusIconSrc from "./assets/images/icon_2.png";

interface X {
  [key: string]: X[keyof X];
}

export const company: X | any = {
  name: "Ogilvy",
  city: "New York",
  date: "10 years",
  link: "mailto:admin@ogilvy.com",
  logoSrc,
  descriprion:
    "In the beginning, there was one Ogilvy, the company founded by David Ogilvy in 1948. Today, there is again one Ogilvy, in 83 countries and 132 offices. We are one doorway to a creative network, re-founded to make brands matter in a complex, noisy, hyper-connected world.",
  params: {
    summary: {
      clientSize: {
        smallBusinessRevenue: 0,
        mediumBusinessRevenue: 10,
        largeBusinessRevenue: 60,
        enterpriseRevenue: 20,
      },
      industryFocus: {
        healthcare: 50,
        businessServices: 20,
        automotive: 15,
        financialServices: 10,
      },
    },
    performance: {
      deliverySpeed: {
        ideaGeneration: 90,
        buildTeam: 70,
        development: 50,
        promotion: 30,
      },
      economicMark: {
        finances: 20,
        time: 0,
        humanResources: 90,
        rate: 90,
      },
    },
    portfolio: {
      clientSize: {
        smallBusinessRevenue: 0,
        mediumBusinessRevenue: 10,
        largeBusinessRevenue: 60,
        enterpriseRevenue: 20,
      },
      industryFocus: {
        healthcare: 50,
        businessServices: 20,
        automotive: 15,
        financialServices: 10,
      },
    }
  },
};

export const companyParamsStructure = [
  {
    id: "summary",
    name: "Summary",
    children: [
      {
        id: "clientSize",
        icon: clientSizeIconSrc,
        name: "Client Size",
        description:
          "View all the business sizes this agency current manages, as well as which business size they choose to work with the most.",
        params: [
          {
            name: "Small Business (Less than $1M in revenue)",
            id: "smallBusinessRevenue",
          },
          {
            name: "Medium Business ($1M-$10M)",
            id: "mediumBusinessRevenue",
          },
          {
            name: "Large Business ($10M-$1B)",
            id: "largeBusinessRevenue",
          },
          {
            name: "Enterprise ($1B+)",
            id: "enterpriseRevenue",
          },
        ],
      },
      {
        id: "industryFocus",
        icon: industryFocusIconSrc,
        name: "Industry Focus",
        description:
          "See which industries this agency has the most experience and expertise in.",
        params: [
          {
            name: "Healthcare",
            id: "healthcare",
          },
          {
            name: "Business Services",
            id: "businessServices",
          },
          {
            name: "Automotive",
            id: "automotive",
          },
          {
            name: "Financial Services",
            id: "financialServices",
          },
        ],
      },
    ],
  },
  {
    id: "performance",
    name: "Performance",
    children: [
      {
        id: "deliverySpeed",
        icon: industryFocusIconSrc,
        name: "Delivery speed",
        description:
          "Parameter that shows how quick company can make something based on time from start to production ready.",
        params: [
          {
            name: "Idea generation",
            id: "ideaGeneration",
          },
          {
            name: "Build team",
            id: "buildTeam",
          },
          {
            name: "Development",
            id: "development",
          },
          {
            name: "Promotion",
            id: "promotion",
          },
        ],
      },
      {
        id: "economicMark",
        icon: industryFocusIconSrc,
        name: "Economic mark",
        description: "Effectivity of resource usage.",
        params: [
          {
            name: "Finances",
            id: "finances",
          },
          {
            name: "Time",
            id: "time",
          },
          {
            name: "Human Resources",
            id: "humanResources",
          },
          {
            name: "Rate",
            id: "rate",
          },
        ],
      },
    ],
  },
  {
    id: "portfolio",
    name: "Portfolio",
    children: [
      {
        id: "clientSize",
        icon: clientSizeIconSrc,
        name: "Client Size",
        description:
          "View all the business sizes this agency current manages, as well as which business size they choose to work with the most.",
        params: [
          {
            name: "Small Business (Less than $1M in revenue)",
            id: "smallBusinessRevenue",
          },
          {
            name: "Medium Business ($1M-$10M)",
            id: "mediumBusinessRevenue",
          },
          {
            name: "Large Business ($10M-$1B)",
            id: "largeBusinessRevenue",
          },
          {
            name: "Enterprise ($1B+)",
            id: "enterpriseRevenue",
          },
        ],
      },
      {
        id: "industryFocus",
        icon: industryFocusIconSrc,
        name: "Industry Focus",
        description:
          "See which industries this agency has the most experience and expertise in.",
        params: [
          {
            name: "Healthcare",
            id: "healthcare",
          },
          {
            name: "Business Services",
            id: "businessServices",
          },
          {
            name: "Automotive",
            id: "automotive",
          },
          {
            name: "Financial Services",
            id: "financialServices",
          },
        ],
      },
    ],
  },
  {
    id: "reviews",
    name: "Reviews",
    children: [
      {
        id: "deliverySpeed",
        icon: industryFocusIconSrc,
        name: "Delivery speed",
        description:
          "Parameter that shows how quick company can make something based on time from start to production ready.",
        params: [
          {
            name: "Idea generation",
            id: "ideaGeneration",
          },
          {
            name: "Build team",
            id: "buildTeam",
          },
          {
            name: "Development",
            id: "development",
          },
          {
            name: "Promotion",
            id: "promotion",
          },
        ],
      },
      {
        id: "economicMark",
        icon: industryFocusIconSrc,
        name: "Economic mark",
        description: "Effectivity of resource usage.",
        params: [
          {
            name: "Finances",
            id: "finances",
          },
          {
            name: "Time",
            id: "time",
          },
          {
            name: "Human Resources",
            id: "humanResources",
          },
          {
            name: "Rate",
            id: "rate",
          },
        ],
      },
    ],
  },
  {
    id: "latest",
    name: "Latest",
    children: [
      {
        id: "clientSize",
        icon: clientSizeIconSrc,
        name: "Client Size",
        description:
          "View all the business sizes this agency current manages, as well as which business size they choose to work with the most.",
        params: [
          {
            name: "Small Business (Less than $1M in revenue)",
            id: "smallBusinessRevenue",
          },
          {
            name: "Medium Business ($1M-$10M)",
            id: "mediumBusinessRevenue",
          },
          {
            name: "Large Business ($10M-$1B)",
            id: "largeBusinessRevenue",
          },
          {
            name: "Enterprise ($1B+)",
            id: "enterpriseRevenue",
          },
        ],
      },
      {
        id: "industryFocus",
        icon: industryFocusIconSrc,
        name: "Industry Focus",
        description:
          "See which industries this agency has the most experience and expertise in.",
        params: [
          {
            name: "Healthcare",
            id: "healthcare",
          },
          {
            name: "Business Services",
            id: "businessServices",
          },
          {
            name: "Automotive",
            id: "automotive",
          },
          {
            name: "Financial Services",
            id: "financialServices",
          },
        ],
      },
    ],
  },
];
