import { InlineCode } from "@/once-ui/components";

const blog = {
  
}

const person = {
  firstName: "Anshaj",
  lastName: "Ahuja",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "UI Developer",
  avatar: "/images/avatar.jpg",
  // location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/AnshajAhuja069",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/anshaj-ahuja-b528a11b6/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "anshajahujaa@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Designer and Developer</>,
  subline: (
    <>
      I'm Anshaj, a User Interface Developer , I craft intuitive
      <br /> user experiences. After hours, I Play with Designs.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
       I am a India-based UI Developer with a passion for transforming complex challenges
        into simple, elegant design solutions. 
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Benepik Technology Private Limited",
        timeframe: "Aug 2024 - Present",
        role: "UI/UX Designer",
        achievements: [
          <>
            Revamped an outdated UI, implementing modern design principles
(Material Design, accessibility standards, responsive layouts)
to improve usability and engagement.
          
          </>,
          <>
            Worked in Phase 2 development of the flagship product, working
closely with developers to integrate dynamic UI components and
enhance performance.
          </>,
           <>
          Strengthened collaboration between UI/UX and development
          teams, ensuring seamless integration of designs with Angular.
         </>,
        ],
        images: [
        
        ],
      },
      {
        company: "Jai Kisan",
        timeframe: "Feb 2024 - April 2024",
        role: "Intern UI/UX and Graphic Designer",
        achievements: [
          <>
           Designed high-fidelity mockups, ensuring brand consistency
           across digital platforms
          </>,
          <>
            Conducted user research and testing, refining designs based on
            feedback.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Christ University",
        description: <>Studied Bachelor's of Computer Application.</>,
      },
      {
        
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Wireframing, Prototyping,Adobe Suit</>,
        // optional: leave the array empty if you don't want to display images
        images: [
         
        ],
      },
      {
        title: "React",
        description: <>Html,Css,Javascript,Rest API</>,
        // optional: leave the array empty if you don't want to display images
        images: [
         
        ],
      },
      {
        title: "Angular",
        description: <>Typescript,Aws,SAP BTP</>,
        // optional: leave the array empty if you don't want to display images
        images: [
         
        ],
      },
    ],
  },
};



const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/4.mp4",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/6.mp4",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/1.mp4",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/5.mp4",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/9.mp4",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/3.mp4",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/7.mp4",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/2.mp4",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/10.mp4",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/8.mp4",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/13.mp4",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/12.mp4",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/11.mp4",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/14.mp4",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, work, gallery };
