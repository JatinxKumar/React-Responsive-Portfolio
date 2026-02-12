// import { personalData } from "@/utils/data/personal-data";
// import AboutSection from "./components/homepage/about";
// import Blog from "./components/homepage/blog";
// import ContactSection from "./components/homepage/contact";
// import Education from "./components/homepage/education";
// import Experience from "./components/homepage/experience";
// import HeroSection from "./components/homepage/hero-section";
// import Projects from "./components/homepage/projects";
// import Skills from "./components/homepage/skills";

// async function getData() {
//   const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`)

//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }

//   const data = await res.json();

//   const filtered = data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);

//   return filtered;
// };

// export default async function Home() {
//   const blogs = await getData();

//   return (
//     <div suppressHydrationWarning >
//       <HeroSection />
//       <AboutSection />
//       <Experience />
//       <Skills />
//       <Projects />
//       <Education />
//       <Blog blogs={blogs} />
//       <ContactSection />
//     </div>
//   )
// };
// import AboutSection from "./components/homepage/about";
// import Blog from "./components/homepage/blog";
// import ContactSection from "./components/homepage/contact";
// import Education from "./components/homepage/education";
// import Experience from "./components/homepage/experience";
// import HeroSection from "./components/homepage/hero-section";
// import Projects from "./components/homepage/projects";
// import Skills from "./components/homepage/skills";

// // Dummy blogs data with 6 different images
// const blogs = [
//   {
//     title: "JavaScript Scope Explained",
//     cover_image: "https://www.shutterstock.com/shutterstock/photos/220745011/display_1500/stock-photo-blank-notepad-and-coffee-cup-on-old-wooden-table-220745011.jpg",
//     published_at: "2024-06-01",
//     public_reactions_count: 12,
//     comments_count: 3,
//     reading_time_minutes: 2,
//     description: "Learn about scope in JavaScript with simple examples.",
//   },
//   {
//     title: "React Hooks in Depth",
//     cover_image: "https://via.placeholder.com/300x150?text=React+Hooks",
//     published_at: "2024-05-21",
//     public_reactions_count: 18,
//     comments_count: 5,
//     reading_time_minutes: 4,
//     description: "A deep dive into React Hooks and their usage.",
//   },
//   {
//     title: "Understanding CSS Flexbox",
//     cover_image: "https://via.placeholder.com/300x150?text=CSS+Flexbox",
//     published_at: "2024-04-15",
//     public_reactions_count: 9,
//     comments_count: 2,
//     reading_time_minutes: 3,
//     description: "Master CSS Flexbox layout with practical tips.",
//   },
// ];

// export default function Home() {
//   return (
//     <div suppressHydrationWarning>
//       <HeroSection />
//       <AboutSection />
//       <Experience />
//       <Skills />
//       <Projects />
//       <Education />
//       <Blog blogs={blogs} />
//       <ContactSection />
//     </div>
//   );
// }


import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

const blogs = [
  {
    title: "JavaScript Scope Explained",
    cover_image: "/blog1.png",
    published_at: "2024-06-01",
    public_reactions_count: 12,
    comments_count: 3,
    reading_time_minutes: 2,
    description: "Learn about scope in JavaScript with simple examples.",
  },
  {
    title: "React Hooks in Depth",
    cover_image: "/blog2.png",
    published_at: "2024-05-21",
    public_reactions_count: 18,
    comments_count: 5,
    reading_time_minutes: 4,
    description: "A deep dive into React Hooks and their usage.",
  },
  {
    title: "Understanding CSS Flexbox",
    cover_image: "/blog3.png",
    published_at: "2024-04-15",
    public_reactions_count: 9,
    comments_count: 2,
    reading_time_minutes: 3,
    description: "Master CSS Flexbox layout with practical tips.",
  },
];

export default function Home() {
  return (
    <div suppressHydrationWarning>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Blog blogs={blogs} />
      <ContactSection />
    </div>
  );
}