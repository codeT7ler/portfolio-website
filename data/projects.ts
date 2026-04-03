export type ArchiveCategory = "Combat" | "Vehicles" | "Environment";

export type ProjectImage = {
  src: string;
  alt: string;
  category: ArchiveCategory;
};

export type ProjectSection = {
  id: string;
  eyebrow: string;
  title: string;
  body: string[];
  image?: ProjectImage;
  reverse?: boolean;
};

export type ProjectHighlight = {
  title: string;
  description: string;
};

export type ProjectData = {
  slug: string;
  chapter: string;
  title: string;
  cardTitle: string;
  category: string;
  homepageDescription: string;
  heroSubtitle: string;
  heroIntro: string;
  heroImage?: ProjectImage;
  overviewImage?: ProjectImage;
  overview: string[];
  galleryTitle: string;
  gallery: ProjectImage[];
  sections: ProjectSection[];
  highlights: ProjectHighlight[];
  techStack: string[];
  videoEmbed: string;
  archiveCategory: ArchiveCategory;
};

export const contactLinks = [
  { label: "Instagram", href: "https://www.instagram.com/code_t7/" },
  { label: "Behance", href: "https://www.behance.net/t7lermorgan" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/yash-menat/" },
  { label: "GitHub", href: "https://github.com/codeT7ler" },
  { label: "Email", href: "mailto:yashmenat27@gmail.com" }
] as const;

export const projects: ProjectData[] = [
  {
    slug: "chunky-adventure",
    chapter: "01",
    title: "Chunky’s Adventure",
    cardTitle: "Chunky’s Adventure",
    category: "Gameplay Systems",
    homepageDescription:
      "Built as a team-based Unreal Engine 5 project focused on gameplay systems, character setup, and optimization.",
    heroSubtitle: "Gameplay systems, character pipeline, and performance optimization in Unreal Engine 5",
    heroIntro:
      "Chunky’s Adventure was developed as a collaborative Unreal Engine 5 project, with my role centered on gameplay systems, character setup, interaction logic, and optimization. The goal was to make the experience feel playful and responsive while keeping the pipeline technically reliable from prototype through final packaging.",
    heroImage: {
      src: "/images/chunky/hero.png",
      alt: "Chunky character standing on a dinner table inside the stylized kitchen environment",
      category: "Environment"
    },
    overviewImage: {
      src: "/images/chunky/overview.png",
      alt: "Chunky's Adventure kitchen environment viewed from above inside Unreal Engine 5",
      category: "Environment"
    },
    overview: [
      "I worked on Chunky’s Adventure as part of a three-member team, focusing on core gameplay systems that shaped the player’s moment-to-moment experience. My responsibilities included implementing running, a responsive double jump, and item collection through overlap detection so movement and interaction felt smooth and satisfying.",
      "I also handled the character pipeline by creating a custom rig and refining animation assets sourced from Mixamo in Autodesk Maya before integrating them into Unreal Engine 5. Those animations were connected to the player blueprint so transitions remained clean and synchronized with gameplay mechanics.",
      "Alongside that work, I implemented important game logic and UI features including the widget blueprint, win and lose conditions, and the final packaging workflow. Performance was another key focus, improved through culling, selective texture reduction, and render resolution adjustments."
    ],
    galleryTitle: "Gameplay & Environment",
    gallery: [
      { src: "/images/chunky/hero.png", alt: "Chunky character framed against the kitchen table set", category: "Environment" },
      { src: "/images/chunky/gallery-01.png", alt: "Performance capture showing optimized render resolution and runtime metrics", category: "Environment" },
      { src: "/images/chunky/gallery-02.png", alt: "Runtime metrics capture used to compare performance balancing decisions", category: "Environment" },
      { src: "/images/chunky/gallery-03.png", alt: "Dark cinematic kitchen shot used in the final atmosphere pass", category: "Environment" },
      { src: "/images/chunky/gallery-04.png", alt: "Low-angle environmental composition from Chunky’s Adventure", category: "Environment" },
      { src: "/images/chunky/rigging.png", alt: "Custom rig setup for Chunky used in the character pipeline", category: "Environment" },
      { src: "/images/chunky/rig-controls.png", alt: "Rig controls and skeletal setup for Chunky character animation", category: "Environment" },
      { src: "/images/chunky/gameplay.png", alt: "Top-down composition of the dining area and playable kitchen space", category: "Environment" }
    ],
    sections: [
      {
        id: "systems",
        eyebrow: "Gameplay Layer",
        title: "Gameplay Systems",
        image: {
          src: "/images/chunky/gameplay.png",
          alt: "Playable kitchen space showing traversal scale and platforming routes",
          category: "Environment"
        },
        body: [
          "The gameplay layer centered on responsive player movement, with running and a double jump tuned to feel immediate and readable in a scaled environment full of oversized props.",
          "Item collection was implemented through overlap-driven interactions so pickups could register cleanly without friction. That helped the game communicate progress naturally while keeping the interaction model simple and satisfying.",
          "More broadly, the interaction design focused on clarity. Movement, pickup feedback, and state changes were all built to support an experience that felt intuitive from the player's point of view."
        ]
      },
      {
        id: "pipeline",
        eyebrow: "Character Workflow",
        title: "Character Pipeline",
        reverse: true,
        image: {
          src: "/images/chunky/rigging.png",
          alt: "Chunky custom rig prepared for animation and engine integration",
          category: "Environment"
        },
        body: [
          "The character pipeline involved building a custom rig and refining third-party animation data so it could work reliably with the final gameplay implementation.",
          "Mixamo served as a useful animation source, while Autodesk Maya was used to clean, adapt, and prepare those assets for the specific needs of the character.",
          "Once ready, the animations were imported into Unreal Engine 5 and integrated into the player blueprint, where they were synchronized with movement states and gameplay logic."
        ]
      },
      {
        id: "optimization",
        eyebrow: "Optimization Pass",
        title: "Optimization",
        image: {
          src: "/images/chunky/gallery-01.png",
          alt: "Performance metrics screenshot used during Chunky's Adventure optimization",
          category: "Environment"
        },
        body: [
          "Optimization work focused on keeping the game visually coherent while improving runtime stability. Culling was used to reduce unnecessary rendering cost, especially in a scene where large environment elements could quickly stack up in view.",
          "I also adjusted texture quality and render resolution where appropriate to balance visual clarity against performance.",
          "The result was a more stable experience that preserved the atmosphere of the project while remaining practical for real-time play."
        ]
      }
    ],
    highlights: [
      { title: "Team-based development", description: "Contributed to a three-member Unreal Engine 5 project with shared production responsibilities." },
      { title: "Player movement system", description: "Implemented responsive movement with readable traversal across a stylized oversized environment." },
      { title: "Double jump mechanic", description: "Tuned airborne control to feel satisfying while still supporting clear platforming movement." },
      { title: "Item collection logic", description: "Used overlap detection to build simple, reliable, and intuitive collection interactions." },
      { title: "Animation pipeline", description: "Refined sourced animations in Maya and integrated them into UE5 for synchronized gameplay use." },
      { title: "UI & game states", description: "Implemented widget blueprint flow along with win and lose state handling." },
      { title: "Performance optimization", description: "Balanced culling, texture quality, and resolution settings to improve runtime smoothness." }
    ],
    techStack: ["Unreal Engine 5", "Blueprints", "Autodesk Maya", "Mixamo", "UI Widgets", "Optimization Techniques"],
    videoEmbed: "https://www.youtube.com/embed/MayIldDfROw",
    archiveCategory: "Environment"
  },
  {
    slug: "melee-combat",
    chapter: "02",
    title: "Melee Combat System",
    cardTitle: "Melee Combat System",
    category: "Combat Systems",
    homepageDescription:
      "Created a responsive combat system in Unreal Engine 5 using Blueprints, Behavior Trees, and Blackboards to drive enemy interactions and gameplay flow.",
    heroSubtitle: "Responsive Unreal Engine 5 combat system with AI-driven behavior",
    heroIntro:
      "This project is a melee combat prototype developed in Unreal Engine 5, focused on responsive sword-based gameplay, enemy interaction, and readable combat feedback. The system combines player attacks, hit detection, damage response, and AI behavior into a structured gameplay loop designed to feel reactive and polished.",
    heroImage: {
      src: "/images/melee/hero2.png",
      alt: "Unreal Engine 5 combat blueprint showing animation-driven melee reactions and damage flow",
      category: "Combat"
    },
    overviewImage: {
      src: "/images/melee/gallery01.png",
      alt: "Combat blueprint graph showing attack tracing, damage application, and state updates",
      category: "Combat"
    },
    overview: [
      "The prototype was built in Unreal Engine 5 using Blueprints as the primary gameplay scripting layer, allowing the combat loop to be structured around readable event-driven logic. Player attacks, damage application, reactions, and state updates are all coordinated through interconnected systems that prioritize responsiveness and clean handoff between actions.",
      "Behavior Trees and Blackboards were used to organize enemy decision-making into readable states such as patrol, detect, chase, and engage. This created a reliable foundation for reactive enemies that transition naturally from ambient navigation into combat behavior while keeping awareness and targeting data synchronized.",
      "Animation-driven attack logic made the system feel intentional. Attacks are tied to animation events so traces, damage windows, and combat responses happen at deliberate moments, improving combat readability and reinforcing clean transitions between idle, pursuit, attack, reaction, and recovery."
    ],
    galleryTitle: "Combat Gallery",
    gallery: [
      { src: "/images/melee/gallery01.png", alt: "Blueprint montage flow for melee attacks and pushback response", category: "Combat" },
      { src: "/images/melee/gallery02.png", alt: "Sphere-trace based hit detection setup for melee combat", category: "Combat" },
      { src: "/images/melee/gallery03.png", alt: "Health bar and hit direction logic used for combat feedback", category: "Combat" },
      { src: "/images/melee/details.png", alt: "Animation montage and attack state logic for melee interactions", category: "Combat" }
    ],
    sections: [
      {
        id: "gameplay",
        eyebrow: "Core Interaction",
        title: "Gameplay Systems",
        image: {
          src: "/images/melee/gameplay.png",
          alt: "Melee hit-trace system handling attack windows and damage registration",
          category: "Combat"
        },
        body: [
          "The gameplay layer was built around a readable attack flow that starts with animation timing and resolves through hit detection, damage application, and enemy response. Combat windows are controlled so traces only activate during intended swing moments, helping every attack feel deliberate rather than noisy or inconsistent.",
          "Hit detection feeds into damage response and combat feedback systems that make every strike understandable to the player. Health updates, reaction logic, and impact handling were structured to support clarity so players can quickly understand when an attack connected and how the enemy responded.",
          "Responsiveness remained the main priority throughout the prototype. The result is a combat loop that feels immediate while staying legible, with smooth transitions between attacking, confirming hits, and returning to the next gameplay decision."
        ]
      },
      {
        id: "ai",
        eyebrow: "Decision Flow",
        title: "Enemy AI Behavior",
        reverse: true,
        image: {
          src: "/images/melee/hero.png",
          alt: "Blueprint setup for hit direction and animation-based enemy response",
          category: "Combat"
        },
        body: [
          "Enemy behavior was structured around a clear patrol to detect to chase to attack flow, giving encounters a readable escalation from passive movement into direct engagement.",
          "Behavior Trees were used to organize branching decisions, while Blackboards stored the context AI needed to react to the player, manage targeting, and shift between combat states. This kept the system modular and easier to tune than one monolithic graph.",
          "Clean state transitions were central to the design. Enemies move from patrol into awareness, then pursuit and attack, while combat reactions feed back into those states in a controlled way so the loop remains stable, readable, and expandable."
        ]
      }
    ],
    highlights: [
      { title: "Unreal Engine 5 combat system", description: "Built as a focused melee prototype with responsive interactions, clear feedback, and expandable gameplay logic." },
      { title: "Blueprint gameplay logic", description: "Structured core combat flow through readable Blueprint scripting to keep systems flexible and iteration-friendly." },
      { title: "Behavior Trees", description: "Used tree-based decision making to separate combat choices into manageable AI behaviors." },
      { title: "Blackboard AI system", description: "Centralized awareness, target context, and combat conditions to support dependable AI transitions." },
      { title: "Enemy state machine", description: "Organized patrol, detect, chase, and engage states into a consistent combat encounter loop." },
      { title: "Damage system", description: "Connected hit detection, health updates, and reaction feedback to make every successful strike readable." },
      { title: "Animation integration", description: "Tied attacks and reactions to animation timing so combat actions resolve with better rhythm and clarity." }
    ],
    techStack: ["Unreal Engine 5", "Blueprints", "Behavior Trees", "Blackboards", "AI Gameplay Systems", "Combat Design"],
    videoEmbed: "https://www.youtube.com/embed/EuEoF3i5mi8",
    archiveCategory: "Combat"
  },
  {
    slug: "toyota-supra",
    chapter: "03",
    title: "Supra MK4 3D Model",
    cardTitle: "Toyota Supra MK4 Model",
    category: "Vehicle Pipeline",
    homepageDescription:
      "Created a highly detailed Toyota Supra MK4 3D model with a fully built interior and engine, optimized for real-time rendering.",
    heroSubtitle: "High-detail Toyota Supra MK4 modeling, rigging, and Unreal Engine 5 integration",
    heroIntro:
      "This project is my 3D interpretation of the Toyota Supra MK4, created using reference images to match proportions, shapes, and iconic design elements. I focused on achieving clean hard-surface topology, accurate curves, and a complete structure that includes both the exterior and interior components. The goal was not just visual accuracy, but creating a model that is efficient, smooth, and suitable for real-time use.",
    heroImage: {
      src: "/images/supra/hero.png",
      alt: "Blue Toyota Supra MK4 showcased in a cinematic Unreal Engine environment",
      category: "Vehicles"
    },
    overviewImage: {
      src: "/images/supra/gallery-01.png",
      alt: "Top-down showcase view of the Toyota Supra MK4 highlighting the roof and body shape",
      category: "Vehicles"
    },
    overview: [
      "Working on the Supra helped refine my workflow for automotive modeling, improve edge-flow decisions, and strengthen my understanding of how to prepare high-detail assets for game engines.",
      "The asset was built to hold up in both cinematic presentation and technical review, with attention placed on silhouette, surface control, and the relationship between modeling accuracy and real-time performance."
    ],
    galleryTitle: "Image Gallery",
    gallery: [
      { src: "/images/supra/hero.png", alt: "Cinematic front three-quarter view of the Toyota Supra MK4 in Unreal Engine", category: "Vehicles" },
      { src: "/images/supra/gallery-01.png", alt: "Top-down showcase view of the Toyota Supra MK4 highlighting the roof and body shape", category: "Vehicles" },
      { src: "/images/supra/gallery-02.png", alt: "Rear cinematic shot of the Toyota Supra MK4 with glowing taillights", category: "Vehicles" },
      { src: "/images/supra/rigging.png", alt: "Vehicle rigging setup of the Toyota Supra MK4 inside Blender", category: "Vehicles" },
      { src: "/images/supra/wireframe.png", alt: "Wireframe view of the Toyota Supra MK4 showing hard-surface topology and interior detail", category: "Vehicles" }
    ],
    sections: [
      {
        id: "integration",
        eyebrow: "Technical Implementation",
        title: "Unreal Engine 5 Integration",
        image: {
          src: "/images/supra/hero.png",
          alt: "Toyota Supra MK4 integrated inside Unreal Engine 5 with cinematic lighting",
          category: "Vehicles"
        },
        body: [
          "After finishing the model, I brought it into Unreal Engine 5 and set it up using the Chaos Vehicle System to make the Supra fully drivable.",
          "I configured wheel setups, suspension behavior, mass distribution, friction curves, and engine settings to achieve a realistic driving feel. That process taught me how vehicle physics behave inside Unreal Engine, how different parameters affect handling, and how to optimize a model for real-time movement.",
          "Making the car drivable gave me practical experience in technical implementation, physics tuning, and gameplay-focused asset integration."
        ]
      },
      {
        id: "rigging",
        eyebrow: "Preparation Pipeline",
        title: "Rigging and Vehicle Setup",
        reverse: true,
        image: {
          src: "/images/supra/rigging.png",
          alt: "Toyota Supra MK4 wheel and steering rig prepared for vehicle import",
          category: "Vehicles"
        },
        body: [
          "Before bringing the car into Unreal Engine, I ensured the model was prepared with a clean and functional rig. I rigged the wheels, steering, and essential movable parts directly inside the software using built-in tools.",
          "This included setting up pivot points, wheel rotations, steering axes, and hierarchy cleanup to make the mesh ready for animation and engine import.",
          "The rigging process helped me understand how vehicles should be structured for game engines and how proper preparation directly improves the in-engine driving experience."
        ]
      }
    ],
    highlights: [
      { title: "Accurate hard-surface vehicle modeling", description: "Focused on proportion, silhouette control, and clean panel transitions to capture the Supra's iconic form." },
      { title: "Exterior and interior detailing", description: "Built beyond the shell so the asset holds up in close-up cinematic shots and technical review." },
      { title: "Real-time ready asset preparation", description: "Structured the model for efficient import, interaction, and rendering inside a game engine workflow." },
      { title: "Vehicle rigging and pivot setup", description: "Prepared wheel rotation, steering behavior, and hierarchy alignment for predictable in-engine control." },
      { title: "Unreal Engine 5 implementation", description: "Integrated the model into a playable setup while preserving presentation quality and technical reliability." },
      { title: "Chaos Vehicle tuning and testing", description: "Adjusted driving parameters to explore suspension response, stability, grip, and overall vehicle feel." }
    ],
    techStack: ["Blender", "Unreal Engine 5", "Chaos Vehicle System", "Hard-Surface Modeling", "Vehicle Rigging", "Real-Time Asset Workflow"],
    videoEmbed: "https://www.youtube.com/embed/fBsHrYe0BMo",
    archiveCategory: "Vehicles"
  },
  {
    slug: "bike-run",
    chapter: "04",
    title: "Endless Bike Run",
    cardTitle: "Endless Bike Run",
    category: "Vehicle Systems",
    homepageDescription:
      "Developed an endless bike run game in Unreal Engine 5, featuring a continuous highway system and physics-based vehicle handling powered by the Chaos Vehicle framework.",
    heroSubtitle: "Physics-based endless driving system using Unreal Engine 5",
    heroIntro:
      "Endless Bike Run is a driving prototype built around continuous forward motion, stable bike handling, and a minimal but immersive highway presentation. The project focused on capturing the feel of sustained speed while keeping the control model readable and responsive.",
    heroImage: {
      src: "/images/bike/bike05.png",
      alt: "Concept showcase image for Endless Bike Run featuring a stylized highway and bike silhouette",
      category: "Vehicles"
    },
    overviewImage: {
      src: "/images/bike/bike04.png",
      alt: "Endless Bike Run development collage showing road setup and bike asset planning",
      category: "Vehicles"
    },
    overview: [
      "This project began as an endless bike run prototype in Unreal Engine 5, built around a continuously generated highway and a physics-based vehicle setup powered by Chaos Vehicle systems.",
      "A large part of the work centered on control feel and visual rhythm. The highway needed to sustain the illusion of continuous travel, while the vehicle itself had to react in a way that felt stable, responsive, and believable.",
      "The result is a prototype that highlights continuous gameplay flow, handling feedback, and the technical process of bringing a drivable bike into an Unreal Engine environment."
    ],
    galleryTitle: "Image Gallery",
    gallery: [
      { src: "/images/bike/bike02.png", alt: "Endless Bike Run development collage showing road setup, bike asset, and UI", category: "Vehicles" },
      { src: "/images/bike/bike03.png", alt: "Endless Bike Run workflow collage showing highway layout and bike setup", category: "Vehicles" }
    ],
    sections: [
      {
        id: "gameplay",
        eyebrow: "Core Loop",
        title: "Gameplay Systems",
        image: {
          src: "/images/bike/bike05.png",
          alt: "Stylized gameplay loop artwork for Endless Bike Run showing the continuous road structure",
          category: "Vehicles"
        },
        body: [
          "The gameplay loop was designed around an endless road system that keeps the player moving forward through a consistent stream of highway space.",
          "That structure supports uninterrupted driving and gives the prototype its runner-like rhythm, where the challenge is less about discrete levels and more about maintaining flow.",
          "Player control feel was treated as a core system rather than a cosmetic detail. Steering, stability, and forward momentum all needed to reinforce the sense of speed without making the bike feel unpredictable."
        ]
      },
      {
        id: "vehicle",
        eyebrow: "Vehicle Layer",
        title: "Vehicle System",
        reverse: true,
        image: {
          src: "/images/bike/bike04.png",
          alt: "Stylized vehicle system artwork illustrating bike structure and Chaos Vehicle tuning",
          category: "Vehicles"
        },
        body: [
          "The bike setup relied on the Chaos Vehicle system to establish the technical foundation for motion, suspension behavior, and in-engine physical response.",
          "That included tuning how the bike reacts to movement input and how it stays visually grounded on the road while still feeling agile.",
          "Suspension response, handling adjustments, and overall physics tuning were important in finding the right balance between realism and playability."
        ]
      }
    ],
    highlights: [
      { title: "Endless runner system", description: "Built around continuous forward travel and a repeatable road-generation driven gameplay loop." },
      { title: "Vehicle physics", description: "Used physics-driven behavior to make movement feel grounded, readable, and reactive." },
      { title: "Chaos Vehicle setup", description: "Configured the vehicle layer inside Unreal Engine 5 for drivable, testable motion." },
      { title: "Real-time environment", description: "Built a highway presentation that supports speed and keeps the player visually oriented." },
      { title: "Driving mechanics", description: "Focused on control feel, handling stability, and long-form playability." }
    ],
    techStack: ["Unreal Engine 5", "Chaos Vehicle System", "Blueprint System", "Physics Simulation"],
    videoEmbed: "https://www.youtube.com/embed/f76fExlx_Ko",
    archiveCategory: "Vehicles"
  }
];

export const projectMap = new Map(projects.map((project) => [project.slug, project]));

export const archiveItems = projects.flatMap((project) =>
  [project.heroImage, project.overviewImage, ...project.gallery, ...project.sections.map((section) => section.image).filter(Boolean)]
    .filter((image): image is ProjectImage => Boolean(image))
    .map((image, index) => ({
      ...image,
      key: `${project.slug}-${index}`,
      projectSlug: project.slug,
      projectTitle: project.title
    }))
);

export function getProjectBySlug(slug: string) {
  return projectMap.get(slug);
}
