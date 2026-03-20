export interface Project {
  slug: string;
  title: string;
  desc: string;
  tech: string[];
  videolink?: string;
  source?: string;
  theme: {
    primary: string; // HSL value without 'hsl()' wrapping, e.g. "320 100% 70%"
    secondary: string;
    background: string;
    shadow: string;
  };
  details: string; // Long description for the page
}

export const projects: Project[] = [
  {
    slug: "moccae-expo-2025",
    title: "Emirates Agriculture Expo 2025",
    desc: "I am honored to be part of MOCCAE's The Emirates Agriculture Conference and Exhibition 2025, where I developed interactive touch experience screens for Zones 1 and 2",
    source:
      "https://www.linkedin.com/posts/rekhilaliaspaulose_ortmoragency-deliveringdigitalhappiness-moccae-activity-7342581693129609217-yoxW?utm_source=share&utm_medium=member_desktop&rcm=ACoAADFusJgBWpuRdWF0Zp7XtyULoQDalmNNON4",
    tech: ["React.js", "Scss", "Resolume Arena", "UX/UI Design"],
    theme: {
      primary: "160 80% 40%", // Mint Green
      secondary: "140 70% 80%", // Light Mint
      background: "150 50% 98%", // Mint White
      shadow: "160 80% 30%",
    },
    videolink:
      "https://drive.google.com/file/d/1JqVae644kcLXg9HOtKcAQkjqJM4kw5FR/view?usp=sharing",
    details: `<p>Developed for MOCCAE’s Emirates Agriculture Conference and Exhibition 2025, this project involved creating immersive, interactive touchscreen experiences across two primary zones. The goal was to translate complex agricultural data and national history into engaging digital narratives for exhibition visitors.</p>

     <h1><strong>Zone 1: Legacy & Vision</strong></h1>
     

    <p>Focused on storytelling through high-definition media. This interface featured a curated video trilogy, including &quot;Zayed: Story of the Land &amp; Sustainability.&quot; The experience was designed to provide an informative and reflective pause, bridging the gap between Sheikh Zayed’s environmental legacy and the nation's future sustainable farming strategies.</p>

    <h1><strong>Zone 2: Innovation & Biodiversity</strong></h1>
    <p>A data-driven interactive module highlighting the UAE’s push for food security. Key features included:</p>
    <ul>
      <li><strong>1, Methodology Comparison:</strong> Interactive deep-dives into traditional vs. modern date manufacturing.</li>
      <li><strong>2, Botanical Database:</strong> A searchable encyclopedia of local plant species, categorized by scientific and family names.</li>
      <li><strong>3, Modern Ag-Tech:</strong> Educational modules on resource-efficient solutions like hydroponics and vertical farming.</li>
    </ul>`,
  },
  {
    slug: "qiddiya",
    title: "Qiddiya E-Sports World Cup 2024",
    source:
      "https://www.linkedin.com/posts/rekhilaliaspaulose_ortmoragency-deliveringdigitalhappiness-gamingtogether-activity-7236310692776026112-5UW6?utm_source=share&utm_medium=member_desktop&rcm=ACoAADFusJgBWpuRdWF0Zp7XtyULoQDalmNNON4",
    desc: "I spearheaded the development and technical execution of a complex, multi-platform ecosystem for the Esports World Cup 2024 in Riyadh. This project integrated a high-performance MERN stack (MongoDB, Express.js, React, Node.js) with IoT hardware and Generative AI to create a seamless, gamified visitor journey.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Replicate Ai"],
    theme: {
      primary: "200 80% 50%", // Ocean Blue
      secondary: "190 70% 80%", // Sky Blue
      background: "200 30% 98%", // Cool White
      shadow: "200 80% 40%",
    },
    videolink:
      "https://drive.google.com/file/d/1u39OhZ_0iTPxavmOqUwfcNyiE9CzUP2N/view?usp=sharing",
    details: `<p>Developed for the Esports World Cup 2024 at Riyadh Boulevard, this project involved architecting a multi-platform ecosystem that blended high-performance web tech with physical IoT hardware. As the Technical Lead, I managed the integration of AI-driven onboarding, real-time gaming leaderboards, and a custom-built automated reward system.</p>
<br />
  <h1><strong>Phase 1: AI Registration & Digital Onboarding</strong></h1>
  <p>Focused on creating a personalized entry point for thousands of international visitors. This module utilized a modern <strong>Node & React</strong> stack to manage high-traffic data. Key features included:</p>
  <ul>
  <br />
    <li><strong>AI Avatar Generation:</strong> Integration with <strong>Replicate AI</strong> to transform user photos into custom digital avatars upon registration.</li>
   <br />
    <li><strong>Automated Credentialing:</strong> A seamless workflow that generated and emailed unique QR codes and access keys, serving as a "Digital Passport" for the entire gaming arena.</li>
  </ul>
<br />
  <h1><strong>Phase 2: Gamified Arena & Live Leaderboards</strong></h1>
  <p>A synchronized gaming environment featuring diverse interactive challenges. To maximize engagement, we engineered:</p>
  <ul>
  <br />
    <li><strong>Multi-Genre Game Tracking:</strong> Real-time score management for a <strong>VR Shooting Gallery</strong>, <strong>Speed Typing Challenge</strong>, and a <strong>Lava Floor LED Game</strong>.</li>
    <br />
    <li><strong>Centralized Data Hub:</strong> Dedicated leaderboards for each station, paired with a "Grand Champion" master board that aggregated top performers across all platforms.</li>
  </ul>
<br />
  <h1><strong>Phase 3: IoT Reward Dispenser & Merch Integration</strong></h1>
  <p>A custom hardware-to-software solution designed to provide a tangible reward experience. Technical highlights included:</p>
  <ul>
  <br />
    <li><strong>Serial Controller Logic:</strong> A <strong>Node.js</strong> backend communicating with <strong>Arduino-based IoT boards</strong> to trigger physical dispensing mechanisms.</li>
    <br />
    <li><strong>Secure Redemption:</strong> Players entered unique codes earned via high scores to dispense physical items (Pelican Boxes or Reward Balls) containing secret merch codes for the official shop.</li>
  </ul>`,
  },
  {
    slug: "gymstream",
    title: "Gym Stream",
    desc: "Enterprise Fitness SaaS: Trainer Management & Live Streaming Platform Architected a comprehensive fitness solution consisting of a Trainer Management dashboard and a User Exercise application, focused on real-time interactivity and automated scheduling.",
    tech: [
      "TypeScript",
      "JavaScript",
      "React",
      "Vite",
      "Socket.io",
      "Tailwind CSS",
    ],
    theme: {
      primary: "170 100% 40%", // Deep Teal
      secondary: "180 80% 70%", // Aqua
      background: "170 30% 98%", // Teal White
      shadow: "170 100% 30%",
    },
    source:
      "https://oa204050.dev.trainer.gymstream.app",

    details: `<p>Architected a comprehensive fitness solution consisting of a Trainer Management dashboard and a User Exercise application, focused on real-time interactivity and automated scheduling. The project involved engineering a high-concurrency ecosystem to translate complex workout data into seamless, live-streaming digital experiences for both instructors and participants.</p>
<br />
<h1><strong>Zone 1: Trainer Master Control</strong></h1>

<p>Focused on real-time command and device orchestration through a high-definition management interface. This dashboard featured a "Master Control" system, engineered with a WebSocket synchronization layer. The experience was designed to allow trainers to remotely control web-streaming players and manage live exercise transitions across thousands of concurrent devices in real-time, bridging the gap between remote instruction and physical performance.</p>
<br />
<h1><strong>Zone 2: User Experience & Scheduling</strong></h1>
<p>A data-driven interactive module highlighting personalized fitness journeys and high-quality content delivery. Key features included:</p>
<ul>
<br />
  <li><strong>1, Seamless Workout Discovery:</strong> A custom-built video player allowing users to navigate personalized schedules and stream high-quality content with synchronized cues.</li>
   <br />
  <li><strong>2, Dynamic Scheduling Engine:</strong> A core system for trainers to curate complex programs while providing users an intuitive interface to join sessions.</li>
  <br />
  <li><strong>3, Device & Session Management:</strong> Robust logic for multi-device pairing, secure session termination, and multi-tenant profile switching within a microservices framework.</li>
</ul>`,
  },

   {
    slug: "moccae-expo-2025",
    title: "Emirates Agriculture Expo 2025",
    desc: "I am honored to be part of MOCCAE's The Emirates Agriculture Conference and Exhibition 2025, where I developed interactive touch experience screens for Zones 1 and 2",
    source:
      "https://www.linkedin.com/posts/rekhilaliaspaulose_ortmoragency-deliveringdigitalhappiness-moccae-activity-7342581693129609217-yoxW?utm_source=share&utm_medium=member_desktop&rcm=ACoAADFusJgBWpuRdWF0Zp7XtyULoQDalmNNON4",
    tech: ["React.js", "Scss", "Resolume Arena", "UX/UI Design"],
    theme: {
      primary: "160 80% 40%", // Mint Green
      secondary: "140 70% 80%", // Light Mint
      background: "150 50% 98%", // Mint White
      shadow: "160 80% 30%",
    },
    videolink:
      "https://drive.google.com/file/d/1JqVae644kcLXg9HOtKcAQkjqJM4kw5FR/view?usp=sharing",
    details: `<p>Developed for MOCCAE’s Emirates Agriculture Conference and Exhibition 2025, this project involved creating immersive, interactive touchscreen experiences across two primary zones. The goal was to translate complex agricultural data and national history into engaging digital narratives for exhibition visitors.</p>

     <h1><strong>Zone 1: Legacy & Vision</strong></h1>
     

    <p>Focused on storytelling through high-definition media. This interface featured a curated video trilogy, including &quot;Zayed: Story of the Land &amp; Sustainability.&quot; The experience was designed to provide an informative and reflective pause, bridging the gap between Sheikh Zayed’s environmental legacy and the nation's future sustainable farming strategies.</p>

    <h1><strong>Zone 2: Innovation & Biodiversity</strong></h1>
    <p>A data-driven interactive module highlighting the UAE’s push for food security. Key features included:</p>
    <ul>
      <li><strong>1, Methodology Comparison:</strong> Interactive deep-dives into traditional vs. modern date manufacturing.</li>
      <li><strong>2, Botanical Database:</strong> A searchable encyclopedia of local plant species, categorized by scientific and family names.</li>
      <li><strong>3, Modern Ag-Tech:</strong> Educational modules on resource-efficient solutions like hydroponics and vertical farming.</li>
    </ul>`,
  },
  {
    slug: "qiddiya",
    title: "Qiddiya E-Sports World Cup 2024",
    source:
      "https://www.linkedin.com/posts/rekhilaliaspaulose_ortmoragency-deliveringdigitalhappiness-gamingtogether-activity-7236310692776026112-5UW6?utm_source=share&utm_medium=member_desktop&rcm=ACoAADFusJgBWpuRdWF0Zp7XtyULoQDalmNNON4",
    desc: "I spearheaded the development and technical execution of a complex, multi-platform ecosystem for the Esports World Cup 2024 in Riyadh. This project integrated a high-performance MERN stack (MongoDB, Express.js, React, Node.js) with IoT hardware and Generative AI to create a seamless, gamified visitor journey.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Replicate Ai"],
    theme: {
      primary: "200 80% 50%", // Ocean Blue
      secondary: "190 70% 80%", // Sky Blue
      background: "200 30% 98%", // Cool White
      shadow: "200 80% 40%",
    },
    videolink:
      "https://drive.google.com/file/d/1u39OhZ_0iTPxavmOqUwfcNyiE9CzUP2N/view?usp=sharing",
    details: `<p>Developed for the Esports World Cup 2024 at Riyadh Boulevard, this project involved architecting a multi-platform ecosystem that blended high-performance web tech with physical IoT hardware. As the Technical Lead, I managed the integration of AI-driven onboarding, real-time gaming leaderboards, and a custom-built automated reward system.</p>
<br />
  <h1><strong>Phase 1: AI Registration & Digital Onboarding</strong></h1>
  <p>Focused on creating a personalized entry point for thousands of international visitors. This module utilized a modern <strong>Node & React</strong> stack to manage high-traffic data. Key features included:</p>
  <ul>
  <br />
    <li><strong>AI Avatar Generation:</strong> Integration with <strong>Replicate AI</strong> to transform user photos into custom digital avatars upon registration.</li>
   <br />
    <li><strong>Automated Credentialing:</strong> A seamless workflow that generated and emailed unique QR codes and access keys, serving as a "Digital Passport" for the entire gaming arena.</li>
  </ul>
<br />
  <h1><strong>Phase 2: Gamified Arena & Live Leaderboards</strong></h1>
  <p>A synchronized gaming environment featuring diverse interactive challenges. To maximize engagement, we engineered:</p>
  <ul>
  <br />
    <li><strong>Multi-Genre Game Tracking:</strong> Real-time score management for a <strong>VR Shooting Gallery</strong>, <strong>Speed Typing Challenge</strong>, and a <strong>Lava Floor LED Game</strong>.</li>
    <br />
    <li><strong>Centralized Data Hub:</strong> Dedicated leaderboards for each station, paired with a "Grand Champion" master board that aggregated top performers across all platforms.</li>
  </ul>
<br />
  <h1><strong>Phase 3: IoT Reward Dispenser & Merch Integration</strong></h1>
  <p>A custom hardware-to-software solution designed to provide a tangible reward experience. Technical highlights included:</p>
  <ul>
  <br />
    <li><strong>Serial Controller Logic:</strong> A <strong>Node.js</strong> backend communicating with <strong>Arduino-based IoT boards</strong> to trigger physical dispensing mechanisms.</li>
    <br />
    <li><strong>Secure Redemption:</strong> Players entered unique codes earned via high scores to dispense physical items (Pelican Boxes or Reward Balls) containing secret merch codes for the official shop.</li>
  </ul>`,
  },
  {
    slug: "gymstream",
    title: "Gym Stream",
    desc: "Enterprise Fitness SaaS: Trainer Management & Live Streaming Platform Architected a comprehensive fitness solution consisting of a Trainer Management dashboard and a User Exercise application, focused on real-time interactivity and automated scheduling.",
    tech: [
      "TypeScript",
      "JavaScript",
      "React",
      "Vite",
      "Socket.io",
      "Tailwind CSS",
    ],
    theme: {
      primary: "170 100% 40%", // Deep Teal
      secondary: "180 80% 70%", // Aqua
      background: "170 30% 98%", // Teal White
      shadow: "170 100% 30%",
    },
    source:
      "https://oa204050.dev.trainer.gymstream.app",

    details: `<p>Architected a comprehensive fitness solution consisting of a Trainer Management dashboard and a User Exercise application, focused on real-time interactivity and automated scheduling. The project involved engineering a high-concurrency ecosystem to translate complex workout data into seamless, live-streaming digital experiences for both instructors and participants.</p>
<br />
<h1><strong>Zone 1: Trainer Master Control</strong></h1>

<p>Focused on real-time command and device orchestration through a high-definition management interface. This dashboard featured a "Master Control" system, engineered with a WebSocket synchronization layer. The experience was designed to allow trainers to remotely control web-streaming players and manage live exercise transitions across thousands of concurrent devices in real-time, bridging the gap between remote instruction and physical performance.</p>
<br />
<h1><strong>Zone 2: User Experience & Scheduling</strong></h1>
<p>A data-driven interactive module highlighting personalized fitness journeys and high-quality content delivery. Key features included:</p>
<ul>
<br />
  <li><strong>1, Seamless Workout Discovery:</strong> A custom-built video player allowing users to navigate personalized schedules and stream high-quality content with synchronized cues.</li>
   <br />
  <li><strong>2, Dynamic Scheduling Engine:</strong> A core system for trainers to curate complex programs while providing users an intuitive interface to join sessions.</li>
  <br />
  <li><strong>3, Device & Session Management:</strong> Robust logic for multi-device pairing, secure session termination, and multi-tenant profile switching within a microservices framework.</li>
</ul>`,
  },
  
];
