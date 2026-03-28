export enum PortfolioItemTag {
  // Language
  GO = 'go',
  TYPESCRIPT = 'typescript',
  CPP = 'c++',
  RUST = 'rust',
  HASKELL = 'haskell',
  JAVA = 'java',
  TERRAFORM = 'terraform',
  // Frontend
  REACT = 'react',
  REACT_NATIVE = 'react native',
  NEXTJS = 'next.js',
  // State Management
  REDUX = 'redux',
  XSTATE = 'xstate',
  ZUSTAND = 'zustand',
  // Backend
  NODEJS = 'node.js',
  BUN = 'bun',
  EXPRESSJS = 'express.js',
  HONO = 'hono',
  EFFECTTS = 'effect-ts',
  JAVA_SPRING = 'java spring',
  OPENTELEMETRY = 'opentelemetry',
  // Infra
  RENDER = 'render',
  // Database
  MYSQL = 'mysql',
  POSTGRESQL = 'postgresql',
  SQLITE = 'sqlite',
  FIREBASE = 'firebase',
  // Services
  DOCKER = 'docker',
  REST_API = 'rest api',
  // Processes
  AGILE = 'agile',
  // Program Type
  FULLSTACK = 'fullstack',
  FRONTEND = 'frontend',
  CLI = 'cli',
  INTERPRETER = 'interpreter',
  LIBRARY = 'library',
}

export type PortfolioItem = {
  title: string;
  shortDescription?: string;
  longDescription: string;
  emoji: string;
  links: { text: string; url: string }[];
  tags: PortfolioItemTag[];
  loomUrl?: string;
  youtubeEmbedUrl?: string;
};

export const projects: PortfolioItem[] = [
  {
    title: 'Habit Hatchery',
    shortDescription:
      'Habit Hatchery is a gamified habit tracking application where you raise cute creatures by making progress toward your habits.',
    longDescription:
      'Habit Hatchery is a gamified habit-tracking platform where users create habits — boolean checks, numeric counts, or min/max ranges — each bonded to a Pokemon-like creature companion that roams an animated ranch, earns XP on habit completion, evolves through forms as it levels up, and rewards streaks and perfect days with in-game currency spendable in a shop on food, accessories, and decor. The project is a Bun monorepo orchestrated by Turborepo, spanning a Hono REST API, a React SPA, a cross-platform CLI compiled to standalone binaries, and shared packages for domain schemas and a type-safe HTTP client. The backend is built on Effect-TS for layered dependency injection, tagged error handling with exhaustive pattern matching, and a general functional style. Auth is self-hosted via better-auth with Google OAuth and device authorization. Kysely handles type-safe SQL against PostgreSQL, and every service method feeds named spans into OpenTelemetry traces exported to Axiom. The frontend has a custom pixel-art design system on Base UI headless primitives with an OKLCH token palette and spring-physics animations. Creatures are driven by an XState state machine with physics-based wandering. TanStack Router provides file-based routing, TanStack Query manages server state with optimistic mutations, and Zustand holds UI state. Testing uses Testcontainers for integration tests against real PostgreSQL, Effect-based unit tests with mock layers, and Testing Library for component tests. The API deploys via Docker multi-stage builds on Render. ',
    emoji: '\u{1F989}',
    links: [
      {
        text: 'HabitHatchery.com',
        url: 'https://habithatchery.com',
      },
    ],
    tags: [
      PortfolioItemTag.FULLSTACK,
      PortfolioItemTag.REACT,
      PortfolioItemTag.TYPESCRIPT,
      PortfolioItemTag.POSTGRESQL,
      PortfolioItemTag.REST_API,
      PortfolioItemTag.CLI,
      PortfolioItemTag.DOCKER,
      PortfolioItemTag.RENDER,
      PortfolioItemTag.HONO,
      PortfolioItemTag.OPENTELEMETRY,
      PortfolioItemTag.EFFECTTS,
      PortfolioItemTag.BUN,
    ],
    youtubeEmbedUrl: 'https://www.youtube.com/embed/YWLHn50Esbg?si=GWKkCydEZ_hyIJDW',
  },
  {
    title: 'Knowted v2',
    shortDescription:
      'Knowted is a student participation tracking application that professors can use to evaluate student engagement in the classroom. With this iteration, I focused on performance and best practices.',
    longDescription:
      'In my sophomore year of college, I built the first iteration of Knowted, which represented a significant milestone in my journey as a fullstack software developer. However, I became busy in my junior and senior years, so I had to put the project on the backburner. Following my college graduation, though, I returned to working on this passion project, this time using it to learn new technologies like Docker, Terraform, and Linux VPS configuration.',
    emoji: '\u{1F64B}\u200D\u2640\uFE0F',
    links: [],
    tags: [
      PortfolioItemTag.FULLSTACK,
      PortfolioItemTag.REACT,
      PortfolioItemTag.TYPESCRIPT,
      PortfolioItemTag.GO,
      PortfolioItemTag.POSTGRESQL,
      PortfolioItemTag.REST_API,
      PortfolioItemTag.TERRAFORM,
      PortfolioItemTag.DOCKER,
    ],
    youtubeEmbedUrl: 'https://www.youtube.com/embed/JsT8AJUUn2k?si=BApOTB8dP4pxYbS8',
  },
  {
    title: 'hngr',
    shortDescription:
      'Hngr is a social platform for foodies, built for iOS, that represents one of my most ambitious application development and engineering management projects.',
    longDescription:
      "Hngr is a peer-to-peer restaurant recommendation and review platform. Like other vertical social platforms such as Goodreads for books and Letterboxd for movies, hngr provides a social space for foodies to share and discover restaurant experiences. I was the sole developer of hngr for the first four months, implementing the groundwork features and architecture for the application. Now, I lead three other developers on the project as manager and scrummaster; we meet for standup three times weekly and work in 2-week sprints. We've implemented hngr with Expo (React Native) and TypeScript on the frontend, Node.js with TypeScript and Express on the backend, and services like Planetscale to store app data and the Foursquare Places API for restaurant data. The team plans to launch hngr to our waitlist of users sometime in the winter or spring. ",
    emoji: '\u{1F37D}\uFE0F',
    links: [{ text: 'Check out the launch page!', url: 'https://hngrapp.xyz' }],
    tags: [
      PortfolioItemTag.FULLSTACK,
      PortfolioItemTag.REACT_NATIVE,
      PortfolioItemTag.TYPESCRIPT,
      PortfolioItemTag.ZUSTAND,
      PortfolioItemTag.NODEJS,
      PortfolioItemTag.EXPRESSJS,
      PortfolioItemTag.MYSQL,
      PortfolioItemTag.REST_API,
      PortfolioItemTag.AGILE,
    ],
    youtubeEmbedUrl: 'https://www.youtube.com/embed/YIwj3hwv3zQ?si=cEpETuoTpvpabnNZ',
  },
  {
    title: 'hson',
    shortDescription:
      'hson is a scripting language for processing and formatting JSON data. The hson program is a CLI written in Haskell that performs parsing and interpreting.',
    longDescription:
      'The hson program is a command-line interface implemented in Haskell for processing JSON data. Given JSON data and a script written in the hson language, the hson CLI processes the JSON and outputs a result according to the hson script. Emphasizing readability and familiarity, I designed the syntax of hson to be similar to that of JavaScript. I built hson as part of my honors senior capstone project at Seattle Pacific University. The project aimed to illustrate how Haskell can be a practical tool for building correct, maintainable software. Alongside the hson program, I also delivered an academic case study illustrating how I leveraged parser combinators, monad transformers, and QuickCheck to implement the hson parser, interpreter, and property-based testing, respectively.',
    emoji: '\u{1FA84}',
    links: [{ text: 'GitHub repository', url: 'https://github.com/LordPrkr/hson' }],
    tags: [PortfolioItemTag.HASKELL, PortfolioItemTag.CLI, PortfolioItemTag.INTERPRETER],
    loomUrl: 'https://www.loom.com/share/dd00a9609e0f4f28a604842a2cbd039d?sid=7dd27b52-186f-41e6-9c45-e57619920cdc',
  },
  {
    title: 'gograph',
    shortDescription:
      'The gograph package implements graph algorithms and data types in Go, utilizing data structures from the gods library to implement common graph algorithms like Shortest Path and Minimum Spanning Tree efficiently.',
    longDescription: '',
    emoji: '\u{1F517}',
    links: [
      {
        text: 'GitHub repository',
        url: 'https://github.com/LordPrkr/gograph',
      },
    ],
    tags: [PortfolioItemTag.GO, PortfolioItemTag.LIBRARY],
    loomUrl: 'https://www.loom.com/share/12b8fe2c15ae41f595403bc71377f1db?sid=e499592a-b609-43a3-b14b-57cb6a1f36fc',
  },
  {
    title: 'gods',
    shortDescription:
      'gods is a Go package of efficient data structures. It includes a generic stack, queue, set, union-find, and binary heap.',
    longDescription: '',
    emoji: '\u{1F9F1}',
    links: [
      {
        text: 'GitHub repository',
        url: 'https://github.com/LordPrkr/gods',
      },
    ],
    tags: [PortfolioItemTag.GO, PortfolioItemTag.LIBRARY],
    loomUrl: 'https://www.loom.com/share/4eae3ccfc3334c16bbf32ac55ae27c88?sid=c39585db-86fc-46e8-9804-a775259fe25b',
  },
  {
    title: 'Scheme/Prolog Transpiler',
    shortDescription:
      'For my Programming Language Concepts class, I built a transpiler that turns programs from a made-up language into either Scheme or Prolog programs.',
    longDescription: '',
    emoji: '\u2699\uFE0F',
    links: [],
    tags: [PortfolioItemTag.RUST, PortfolioItemTag.INTERPRETER],
    loomUrl: 'https://www.loom.com/share/7aefa8f8d6a0479e8afef44a99a1d5ce?sid=9c7e5cee-c25c-48e9-ad67-b8dfcba72d77',
  },
  {
    title: 'Pokecommit CLI',
    shortDescription:
      'Pokecommit is a wrapper for git commit that employs PokeAPI and MySQL to allow users to catch a Pokemon with each commit.',
    longDescription:
      'Inspired by my love for Pokemon and a desire to learn the Go programming language, I created this simple CLI wrapper for git commit that allows users to catch a Pokemon with each commit! Pokecommit integrates with PokeAPI to fetch Pokemon data, and uses a local MySQL database to store your box of Pokemon.',
    emoji: '\u{1F991}',
    links: [
      {
        text: 'GitHub repository',
        url: 'https://github.com/LordPrkr/pokecommit',
      },
      {
        text: 'PokeAPI',
        url: 'https://pokeapi.co/',
      },
    ],
    tags: [PortfolioItemTag.GO, PortfolioItemTag.SQLITE, PortfolioItemTag.REST_API, PortfolioItemTag.CLI],
    loomUrl: 'https://www.loom.com/share/ffde78e5269d4297a5cb260e9f858a21?sid=b2b555ad-6885-409e-8f3e-a57ddf325778',
  },
  {
    title: 'Knowted',
    shortDescription:
      'Knowted is a student participation tracking application built for instructors. Knowted integrates with Canvas LMS to fetch and update classroom data.',
    longDescription:
      'Inspired by the needs of a professor, I developed a web application called Knowted that streamlines student participation tracking for course instructors in the classroom. By integrating with the popular Canvas Learning Management System, Knowted centralizes student data with a dashboard and facilitates the quick and systematic selection of students for participation. Knowted enables professors to effortlessly grade student interactions and export those grades to the grade book. The application already benefits instructors as it sees growing usage among professors at Seattle Pacific University. The next step of this project is to expand beyond Seattle Pacific University and support instructors at other institutions.',
    emoji: '\u{1F64B}\u200D\u2642\uFE0F',
    links: [
      {
        text: 'Watch a demo of the app! (current as of 09/14/2022)',
        url: 'https://www.youtube.com/watch?v=eVq5nL27vsw',
      },
      {
        text: 'Check out the homepage!',
        url: 'https://knowted.app',
      },
    ],
    tags: [
      PortfolioItemTag.FULLSTACK,
      PortfolioItemTag.REACT,
      PortfolioItemTag.TYPESCRIPT,
      PortfolioItemTag.NEXTJS,
      PortfolioItemTag.POSTGRESQL,
      PortfolioItemTag.REST_API,
    ],
  },
  {
    title: 'tends',
    shortDescription:
      'My first full-stack application, "tends," helps users manage their tendencies. This application was built as part of an egghead.io "Portfolio Project Club" for building SaaS applications.',
    longDescription:
      'My application "tends" helps users manage "quantities" in their lives (e.g., daily calories, screen time, exercise time, etc.). I created tends during an iteration of egghead.ios Portfolio Project Club, the goal of which was for each member to design, develop, and document a SaaS application that would serve as an impressive, business-oriented addition to their developer portfolio. Built using Next.js, React, TypeScript, Firebase, and Stripe, the project was my first stab at developing a full-stack application. Users could log into the service via GitHub or Google and create the quantities they wanted to track. The user could then make entries for each quantity and later view summaries of those entries as a graph over time (plotted with React Charts). After finishing the project, I wrote and published a technical case study about my process, which is now available on egghead.io.',
    emoji: '\u{1F4C8}',
    links: [
      {
        text: 'Technical Case Study published on egghead.io!',
        url: 'https://egghead.io/blog/saas-applicatiodn-with-next-js-stripe-and-firebase',
      },
      {
        text: 'Related article - sharing state in Next.js with useContext',
        url: 'https://parkerlandon.com/posts/programming/share-state-in-your-next-js-application-with-usecontext',
      },
    ],
    tags: [
      PortfolioItemTag.FULLSTACK,
      PortfolioItemTag.REACT,
      PortfolioItemTag.TYPESCRIPT,
      PortfolioItemTag.NEXTJS,
      PortfolioItemTag.FIREBASE,
    ],
  },
  {
    title: 'State Management Project Club',
    shortDescription:
      'I led a "Portfolio Project Club" in the egghead.io community in which each member built a project that demonstrates a mastery of State Management in React.',
    longDescription:
      'Over six weeks, from July to August 2021, I led a Portfolio Project Club in the egghead.io community. The objective of the project club was for each member to design, implement, and document a portfolio project that demonstrates a mastery of State Management in React. The project I developed was an RPG Cutscene in which the animations, events, and dialogue are all controlled by state machines managed by the XState library.',
    emoji: '\u{1F335}',
    links: [
      {
        text: 'Check out the deployed project!',
        url: 'https://rpg-portfolio.vercel.app/',
      },
      {
        text: 'RPG Portfolio GitHub Repository',
        url: 'https://github.com/LordPrkr/RPG-Portfolio',
      },
      {
        text: 'Related article - TypeScript with XState and React Context',
        url: 'https://parkerlandon.com/posts/programming/using-typescript-with-xstate-and-react-context',
      },
    ],
    tags: [
      PortfolioItemTag.FRONTEND,
      PortfolioItemTag.REACT,
      PortfolioItemTag.TYPESCRIPT,
      PortfolioItemTag.NEXTJS,
      PortfolioItemTag.XSTATE,
    ],
  },
  {
    title: 'Huffman Coding Tree',
    shortDescription: 'Implementation of Huffman Coding for encoding, compressing, and decoding messages.',
    longDescription:
      'Serving as my final lab submission for the Data Structures 2 course at Seattle Pacific University, my C++ Huffman Coding Tree can encode, compress, and decode messages. The encoding process works by building a Huffman tree from a frequency table and using that tree to construct an encoding table. I use bitwise operations to convert binary strings to ASCII characters before outputting the encoded message and a string representation of the tree to a file. To decode the message, the embedded Huffman Tree is parsed and reconstructed from the encoded message. While I cannot share my code for this lab (it is still an assessment tool), I have provided pictures and my final grade report. This project represents the culmination of my C++ coursework and demonstrates my understanding of data structures and object-oriented programming.',
    emoji: '\u{1F332}',
    links: [
      {
        text: 'Huffman Coding Tree Lab Grade Report',
        url: 'https://i.gyazo.com/ee76bfd6046307a229a7903196d002c6.png',
      },
    ],
    tags: [PortfolioItemTag.CPP],
  },
  {
    title: 'Minecraft Furnace State Machine',
    shortDescription: 'An interative furnace in the browser built with XState to demonstrate React state management with state machines.',
    longDescription:
      'To demonstrate my knowledge of state machines and state management in React, I created a functional Minecraft furnace in the browser. The animation and furnace functionality is all powered by XState state machines.',
    emoji: '\u{1F3ED}',
    links: [
      {
        text: 'Minecraft Furnace State Machine Deployment',
        url: 'https://parkergits.github.io/minecraft-furnace-xstate-react/',
      },
      {
        text: 'LordPrkr/minecraft-furnace-xstate-react Repository',
        url: 'https://github.com/LordPrkr/minecraft-furnace-xstate-react',
      },
    ],
    tags: [PortfolioItemTag.FRONTEND, PortfolioItemTag.REACT, PortfolioItemTag.TYPESCRIPT, PortfolioItemTag.XSTATE],
  },
];

export const professionalExperiences: PortfolioItem[] = [
  {
    title: 'Smartsheet Software Engineering Intern, Content Solutions Team',
    longDescription:
      'For ten weeks during the summer of 2022, I worked at Smartsheet as a full-time software engineering intern. The team I belonged to, Content Solutions, was primarily focused on developing the platform\'s "proofing" feature, which streamlines the iterative process of content creation by facilitating document versioning, feedback requests, and comments. My task over the summer was to implement a "due dates" feature for feedback requests to give requestors a better sense of when to expect recipient feedback. Before initiating the development work, I drafted a systems design document to receive feedback and continuously iterated on my plan. Once I was confident in my approach, I implemented the frontend components with TypeScript, React, Redux, and SASS, used Java Spring and MySQL to build the backend functionality, and used Docker to manage microservices during development. At the end of my internship, I presented the feature in a meeting open to all product development employees. Throughout this experience, I collaborated with managers, designers, user-experience researchers, and other engineers across all of Smartsheet\'s product development teams.',
    emoji: '\u{1F4C4}',
    links: [
      {
        text: 'Check out my feature in this article from the Smartsheet team!',
        url: 'https://www.smartsheet.com/content-center/executive-center/leadership/internship-inside-look',
      },
      {
        text: "Learn more about Smartsheet's proofing feature",
        url: 'https://help.smartsheet.com/learning-track/smartsheet-intermediate/proofing',
      },
    ],
    tags: [
      PortfolioItemTag.REACT,
      PortfolioItemTag.REDUX,
      PortfolioItemTag.TYPESCRIPT,
      PortfolioItemTag.JAVA,
      PortfolioItemTag.JAVA_SPRING,
      PortfolioItemTag.MYSQL,
      PortfolioItemTag.DOCKER,
    ],
  },
];
