import logoSrc from "./assets/images/logo.png";

interface X {
  [key: string]: X[keyof X]
}

export const company: X | any = {
  name: "Ogilvy",
  city: "New York",
  date: "10 years",
  link: "https://www.ogilvy.com",
  logoSrc: logoSrc,
  descriprion:
    "In the beginning, there was one Ogilvy, the company founded by David Ogilvy in 1948. Today, there is again one Ogilvy, in 83 countries and 132 offices. We are one doorway to a creative network, re-founded to make brands matter in a complex, noisy, hyper-connected world.",
  params: {
    summary: {
      clientSize: {
        smallBusinessRevenue: 0,
        mediumBusinessRevenue: 10,
        largeBusinessRevenue: 60,
        enterpriseRevenue: 20
      },
      industryFocus: {
        healthcare: 50,
        businessServices: 20,
        automotive: 15,
        financialServices: 10
      }
    }
  }
};

export const companyParamsStructure = [
  {
    id: "summary",
    name: "Summary",
    children: [
      {
        id: "clientSize",
        icon: "",
        name: "Client Size",
        description:
          "View all the business sizes this agency current manages, as well as which business size they choose to work with the most.",
        params: [
          {
            name: "Small Business (Less than $1M in revenue)",
            id: "smallBusinessRevenue"
          },
          {
            name: "Medium Business ($1M-$10M)",
            id: "mediumBusinessRevenue"
          },
          {
            name: "Large Business ($10M-$1B)",
            id: "largeBusinessRevenue"
          },
          {
            name: "Enterprise ($1B+)",
            id: "enterpriseRevenue"
          }
        ]
      },
      {
        id: "industryFocus",
        icon: "",
        name: "Industry Focus",
        description:
          "See which industries this agency has the most experience and expertise in.",
        params: [
          {
            name: "Healthcare",
            id: "healthcare"
          },
          {
            name: "Business Services",
            id: "businessServices"
          },
          {
            name: "Automotive",
            id: "automotive"
          },
          {
            name: "Financial Services",
            id: "financialServices"
          }
        ]
      }
    ]
  },
    {
    id: "performance",
    name: "Performance",
    children: [
      {
        id: "clientSize",
        icon: "",
        name: "Client Size",
        description:
          "View all the business sizes this agency current manages, as well as which business size they choose to work with the most.",
        params: [
          {
            name: "Small Business (Less than $1M in revenue)",
            id: "smallBusinessRevenue"
          },
          {
            name: "Medium Business ($1M-$10M)",
            id: "mediumBusinessRevenue"
          },
          {
            name: "Large Business ($10M-$1B)",
            id: "largeBusinessRevenue"
          },
          {
            name: "Enterprise ($1B+)",
            id: "enterpriseRevenue"
          }
        ]
      },
      {
        id: "industryFocus",
        icon: "",
        name: "Industry Focus",
        description:
          "See which industries this agency has the most experience and expertise in.",
        params: [
          {
            name: "Healthcare",
            id: "healthcare"
          },
          {
            name: "Business Services",
            id: "businessServices"
          },
          {
            name: "Automotive",
            id: "automotive"
          },
          {
            name: "Financial Services",
            id: "financialServices"
          }
        ]
      }
    ]
  }
];
