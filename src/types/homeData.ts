// // =========================
// // ROOT API RESPONSE
// // =========================

// export interface ApiResponse {
//     home: HomeData;
//     about: AboutData;
//     portfolio: PortfolioItem[];
//     services: ServiceInfo[];
//   }
  
//   // =========================
//   // HOME PAGE DATA
//   // =========================
  
//   export interface HomeData {
//     _id: string;
//     slug: string;
  
//     hero: {
//       satisfiedClientsPercent: number;
//       projectsCount: number;
//       countriesCount: number;
//       descriptionText: string;
//     };
  
//     about: {
//       bodyText: string;
//     };
  
//     video: {
//       videoUrl: string;
//     };
  
//     workSection?: {
//       heading: string;
//       subheading: string;
//       totalCount: number;
//       items: WorkItem[];
//       viewAllText: string;
//       viewAllUrl: string;
//     };
  
//     serviceSection: {
//       heading: string;
//       services: ServiceCard[];
//     };
  
//     funFactSection: {
//       title: string;
//       items: FunFactItem[];
//     };
  
//     clientSection: {
//       descriptionText: string;
//       companyNames: string[];
//     };
  
//     parallaxImage: {
//       imageUrl: string;
//       alt: string;
//     };
  
//     createdAt: string;
//     updatedAt: string;
//     __v: number;
//   }
  
//   // Work section items
//   export interface WorkItem {
//     title: string;
//     tag: string;
//     imageUrl: string;
//     year: number;
//     detailsUrl: string;
//   }
  
//   // Home service cards
//   export interface ServiceCard {
//     number: string;
//     title: string;
//     list: string[];
//     imageUrl: string;
//     detailsUrl: string;
//   }
  
//   // Fun Facts
//   export interface FunFactItem {
//     value: string;
//     text: string;
//   }
  
//   // =========================
//   // ABOUT PAGE
//   // =========================
  
//   export interface AboutData {
//     _id: string;
//     slug: string;
  
//     pageTitle: {
//       title: string;
//     };
  
//     aboutArea: {
//       infoList: {
//         items: string[];
//       };
//       paragraphs: string[];
//       galleryImages: {
//         imageUrl: string;
//         alt: string;
//       }[];
//     };
  
//     approachSection: {
//       subtitle: string;
//       heading: string;
//       approaches: ApproachItem[];
//     };
  
//     infoSection: {
//       subtitle: string;
//       heading: string;
//       stats: InfoStatItem[];
//     };
  
//     mediaSection: {
//       mediaImage: {
//         imageUrl: string;
//         alt: string;
//       };
//       heading: string;
//       text: string;
//     };
  
//     awardsSection: {
//       heading: string;
//       awards: AwardCategory[];
//     };
  
//     teamSection: {
//       heading: string;
//       description: string;
//       members: TeamMember[];
//     };
  
//     createdAt: string;
//     updatedAt: string;
//     __v: number;
//   }
  
//   // Approach section
//   export interface ApproachItem {
//     title: string;
//     showShape: boolean;
//     items: string[];
//   }
  
//   // Stats in About Info section
//   export interface InfoStatItem {
//     label: string;
//     value: string;
//   }
  
//   // Awards section categories
//   export interface AwardCategory {
//     category: string;
//     items: AwardItem[];
//   }
  
//   export interface AwardItem {
//     title: string;
//     year: string;
//   }
  
//   // Team section
//   export interface TeamMember {
//     name: string;
//     post: string;
//     imageUrl: string;
//   }
  
//   // =========================
//   // PORTFOLIO
//   // =========================
  
//   export interface PortfolioItem {
//     _id: string;
//     recentWork: {
//       heading: string;
//       subheading: string;
//       services: string[];
//       _id: string;
//     };
//     projects: ProjectItem[];
//     __v: number;
//   }
  
//   export interface ProjectItem {
//     title: string;
//     year: number;
//     category: string;
//     imageUrl: string;
//     _id: string;
//   }
  
//   // =========================
//   // SERVICES PAGE ITEMS
//   // =========================
  
//   export interface ServiceInfo {
//     _id: string;
  
//     leftImage: ServiceImage;
//     paragraphs: string[];
  
//     rightImage: ServiceImage;
  
//     createdAt: string;
//     updatedAt: string;
//     __v: number;
//   }
  
//   export interface ServiceImage {
//     src: string;
//     alt: string;
//     width: number;
//     height: number;
//     speed: string;
//   }
  
// =========================
// ROOT API RESPONSE
// =========================

export interface ApiResponse {
  home: HomeData;
  about: AboutData;
  portfolio: PortfolioItem[];
  services: ServiceInfo[];
}

// =========================
// HOME PAGE DATA
// =========================

export interface HomeData {
  _id: string;
  slug: string;

  hero: {
    satisfiedClientsPercent: number;
    projectsCount: number;
    countriesCount: number;
    descriptionText: string;
  };

  about: {
    bodyText: string;
  };

  video: {
    videoUrl: string;
  };

  workSection?: {
    heading: string;
    subheading: string;
    totalCount: number;
    items: WorkItem[];
    viewAllText: string;
    viewAllUrl: string;
  };

  serviceSection: {
    heading: string;
    services: ServiceCard[];
  };

  funFactSection: {
    title: string;
    items: FunFactItem[];
  };

  clientSection: {
    descriptionText: string;
    companyNames: string[];
  };

  parallaxImage: {
    imageUrl: string;
    alt: string;
  };

  createdAt: string;
  updatedAt: string;
  __v: number;
}

// Work section items
export interface WorkItem {
  title: string;
  tag: string;
  imageUrl: string;
  year: number;
  detailsUrl: string;
}

// Home service cards
export interface ServiceCard {
  number: string;
  title: string;
  list: string[];
  imageUrl: string;
  detailsUrl: string;
}

// Fun Facts
export interface FunFactItem {
  value: string;
  text: string;
}

// =========================
// ABOUT PAGE
// =========================

export interface AboutData {
  _id: string;
  slug: string;

  pageTitle: {
    title: string;
  };

  aboutArea: {
    infoList: {
      items: string[];
    };
    paragraphs: string[];
    galleryImages: {
      imageUrl: string;
      alt: string;
    }[];
  };

  approachSection: {
    subtitle: string;
    heading: string;
    approaches: ApproachItem[];
  };

  infoSection: {
    subtitle: string;
    heading: string;
    stats: InfoStatItem[];
  };

  mediaSection: {
    mediaImage: {
      imageUrl: string;
      alt: string;
    };
    heading: string;
    text: string;
  };

  awardsSection: {
    heading: string;
    awards: AwardCategory[];
  };

  teamSection: {
    heading: string;
    description: string;
    members: TeamMember[];
  };

  createdAt: string;
  updatedAt: string;
  __v: number;
}

// Approach section
export interface ApproachItem {
  title: string;
  showShape: boolean;
  items: string[];
}

// Stats in About Info section
export interface InfoStatItem {
  label: string;
  value: string;
}

// Awards section categories
export interface AwardCategory {
  category: string;
  items: AwardItem[];
}

export interface AwardItem {
  title: string;
  year: string;
}

// Team section
export interface TeamMember {
  name: string;
  post: string;
  imageUrl: string;
}

// =========================
// PORTFOLIO
// =========================

// Detail section used in project details page
export interface DetailSection {
  title: string;
  text: string;
}

export interface PortfolioItem {
  _id: string;
  recentWork: {
    heading: string;
    subheading: string;
    services: string[];
    _id?: string; // subdocument may be _id: false in schema
  };
  projects: ProjectItem[];
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

export interface ProjectItem {
  _id: string;
  title: string;
  year: number;
  category: string;

  // main image (card + hero)
  imageUrl: string;

  // slug for /portfolio-details/[slug]
  slug?: string;

  // meta fields
  serviceLabel?: string;
  client?: string;
  detailDate?: string;

  technologies?: string[]; // e.g. ["Figma", "WordPress"]

  overviewTitle?: string;
  overviewText?: string;

  featureList?: string[]; // ["Brand Development", "UX/UI Design", ...]

  galleryImages?: string[]; // up to 6 for gallery strip

  detailSections?: DetailSection[]; // e.g. Visual Hierarchy, Components

  finalImageUrl?: string; // last big image

  createdAt?: string;
  updatedAt?: string;
}

// =========================
// SERVICES PAGE ITEMS
// =========================

export interface ServiceInfo {
  _id: string;

  leftImage: ServiceImage;
  paragraphs: string[];

  rightImage: ServiceImage;

  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ServiceImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  speed: string;
}
