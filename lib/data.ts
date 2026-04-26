import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'ahmedmosad.dev@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Ahmed Mosaad, I am reaching out to you because...',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/ahmedmosad236' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/ahmed-mosad/' },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'Javascript',
            icon: '/logo/js.png',
        },
        {
            name: 'Typescript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        // {
        //     name: 'GSAP',
        //     icon: '/logo/gsap.png',
        // },
        {
            name: 'Frammer Motion',
            icon: '/logo/framer-motion.png',
        },
        {
            name: 'SASS',
            icon: '/logo/sass.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
        {
            name: 'Material UI',
            icon: '/logo/mui.png',
        },
        {
            name: 'Chakra UI',
            icon: '/logo/chakra-ui.png',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Express',
            icon: '/logo/express.png',
        },
        {
            name: 'NestJS',
            icon: '/logo/nest.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.png',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgresql.png',
        },
        {
            name: 'Supabase',
            icon: '/logo/supabase.png',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'GitHub',
            icon: '/logo/github.png',
        },
        {
            name: 'pnpm',
            icon: '/logo/pnpm.png',
        },
        {
            name: 'Postman',
            icon: '/logo/postman.svg',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'King Herbs - Export Platform',
        slug: 'king-herbs-export-platform',
        liveUrl: 'https://king-herbs.com/en',
        year: 2026,
        description: `
      A comprehensive export platform for King Herbs, a leading Egyptian exporter of premium dried herbs, spices, and botanicals serving global markets. <br/> <br/>
      
      About King Herbs:<br/>
      King Herbs is a premier Egyptian exporter with over 45 years of experience in delivering high-quality agricultural products to global markets. The company serves importers, manufacturers, and distributors across 50+ countries with ISO-certified processes and sustainable farming practices.
      <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>🌿 Product Catalog: Comprehensive showcase of premium dried herbs, spices, and botanicals</li>
        <li>🌍 Global Reach: Platform supporting export operations to 50+ countries</li>
        <li>📦 Export Management: End-to-end solutions from sourcing to worldwide shipping</li>
        <li>✅ Quality Assurance: ISO-certified processes and strict quality control integration</li>
        <li>🌱 Sustainability: Highlighting sustainable farming practices and certifications</li>
        <li>📊 Business Solutions: Scalable solutions for importers, manufacturers, and distributors</li>
        <li>📱 Responsive Design: Optimized experience for international B2B clients</li>
      </ul>
      `,
        role: `
      Frontend Developer (Freelance) <br/>
      Responsible for developing the export platform:
      <ul>
        <li>✅ Built a professional B2B platform showcasing products and export capabilities</li>
        <li>🌍 Implemented multilingual support for international markets</li>
        <li>📦 Developed product catalog and export service presentation</li>
        <li>🎨 Created responsive, professional UI for global business clients</li>
        <li>⚡ Optimized for performance and international accessibility</li>
      </ul>
      `,
        techStack: [
            'Next.js',
            'React',
            'TypeScript',
            'Tailwind CSS',
        ],
        thumbnail: '/projects/images/kings-herb1.png',
        longThumbnail: '/projects/images/kings-herb1.png',
        images: [
            '/projects/images/kings-herb1.png',
            '/projects/images/kings-herb2.png',
            '/projects/images/kings-herb3.png',
        ],
    },
    {
        title: 'Mazraaty Digital Agriculture Platform',
        slug: 'mazraaty-digital-agriculture',
        liveUrl: undefined,
        year: 2024,
        description: `
      Comprehensive agricultural management web portal for UAE stakeholders with advanced geospatial and multilingual capabilities. <br/> <br/>
      Key Features:<br/>
      <ul>
        <li>🗺️ Interactive Mapbox GL interface with boundary drawing and area calculations</li>
        <li>📊 Analytics dashboards using Chart.js and Recharts (emirate-wise statistics)</li>
        <li>📝 Complex multi-step forms with React Hook Form and Zod validation</li>
        <li>🌐 Multilingual (Arabic/English) with RTL support via next-intl</li>
        <li>🔐 Role-based navigation and dynamic permission-based UI</li>
        <li>🔎 Real-time filtering and search synced to URL state (nuqs)</li>
        <li>⚡ Performance optimizations for fast load and smooth UX</li>
      </ul>
      `,
        role: `
      Front-End Engineer (Mahaseel) <br/>
      <ul>
        <li>✅ Implemented geospatial UI and complex form flows</li>
        <li>🔧 Integrated internationalization and RTL layouts</li>
        <li>📈 Built dashboards and optimized performance</li>
      </ul>
      `,
        techStack: [
            'Next.js 15',
            'TypeScript',
            'React',
            'Mantine UI',
            'Tailwind CSS',
            'Mapbox GL',
            'Chart.js',
            'Recharts',
            'React Hook Form',
            'Zod',
            'next-intl',
            'nuqs',
        ],
        thumbnail: '/projects/images/mazzraty.png',
        longThumbnail: '/projects/images/mazzraty.png',
        images: [],
    },
    {
        title: 'EFB System (Egyptian Food Bank)',
        slug: 'efb-system',
        liveUrl: undefined,
        year: 2024,
        description: `
      End-to-end supply chain and warehouse management platform with QR code-based inventory tracking and public transparency. <br/> <br/>
      Key Features:<br/>
      <ul>
        <li>🏷️ QR-based inventory tracking across multi-warehouse architecture</li>
        <li>🧾 Procurement-to-delivery workflows with automated approvals</li>
        <li>⚙️ Purchase order management, quality control, and stock validation</li>
        <li>📦 Advanced inventory (processed/non-processed, expiration, waste tracking)</li>
        <li>🌐 Public portal for QR scanning to trace items from farm to distribution</li>
        <li>📊 Analytics dashboards and reports (procurement & departmental performance)</li>
        <li>🔔 Real-time order fulfillment workflows and notifications</li>
        <li>🖨️ QR code generation/printing for labeling and movement tracking</li>
      </ul>
      `,
        role: `
      Front-End Engineer (Mahaseel) <br/>
      <ul>
        <li>✅ Built core UI flows, inventory modules, and dashboards</li>
        <li>🔄 Implemented complex workflow and state management</li>
        <li>🔗 Integrated APIs and ensured responsive UX</li>
      </ul>
      `,
        techStack: [
            'React 18',
            'TypeScript',
            'Chakra UI',
            'Redux Toolkit',
            'React Hook Form',
            'Chart.js',
            'Recharts',
            'QR Code',
            'React Router',
            'Axios',
        ],
        thumbnail: '/projects/images/Efb.png',
        longThumbnail: '/projects/images/Efb.png',
        images: [],
    },
    {
        title: 'Qamhawy (Agricultural Services Platform)',
        slug: 'qamhawy',
        liveUrl:
            'https://play.google.com/store/apps/details?id=com.qamhawy.app&hl=ar',
        year: 2024,
        description: `
      Agricultural platform including a community wall, service requests, and an agri-waste marketplace. <br/> <br/>
      Key Features:<br/>
      <ul>
        <li>👥 Community Wall with posts and interactions</li>
        <li>🛠️ Service Request workflows</li>
        <li>♻️ Agri Waste Marketplace module</li>
      </ul>
      `,
        role: `
      Front-End Engineer (Mahaseel) <br/>
      <ul>
        <li>✅ Implemented core modules and UI flows</li>
        <li>🎯 Focused on usability and performance</li>
      </ul>
      `,
        techStack: ['React 18', 'TypeScript', 'Refine', 'Ant Design'],
        thumbnail: '/projects/images/qamhawy.png',
        longThumbnail: '/projects/images/qamhawy.png',
        images: [],
    },
    {
        title: 'Takweed System (Egyptian Plant Quarantine)',
        slug: 'takweed-system',
        liveUrl:
            'https://play.google.com/store/apps/details?id=com.takweed.app&hl=en',
        year: 2024,
        description: `
      B2G solution for plant quarantine with certification reporting and geospatial compliance tracking. <br/> <br/>
      Key Features:<br/>
      <ul>
        <li>📄 PDF certification reporting</li>
        <li>🗺️ Geospatial compliance and monitoring</li>
        <li>⏱️ Real-time monitoring dashboard</li>
      </ul>
      `,
        role: `
      Front-End Engineer (Mahaseel) <br/>
      <ul>
        <li>✅ Developed dashboard and reporting flows</li>
        <li>🗺️ Integrated mapping and compliance tracking</li>
      </ul>
      `,
        techStack: [
            'React 18',
            'TypeScript',
            'Bootstrap',
            'Formik',
            'Yup',
            'Mapbox',
        ],
        thumbnail: '/projects/images/takweed.png',
        longThumbnail: '/projects/images/takweed.png',
        images: [],
    },
    {
        title: 'Egy Medya',
        slug: 'egy-medya',
        liveUrl: 'https://www.egymedya.com/',
        year: 2024,
        description: `
      A modern business website for Egy Medya showcasing real estate and media services with video streaming capabilities. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>🎬 Video Streaming: Integrated Supabase for seamless video content delivery</li>
        <li>🎨 Modern UI: Responsive design with smooth animations and transitions</li>
        <li>📱 Mobile-First: Fully optimized experience across all device sizes</li>
        <li>📧 Contact Integration: Seamless client communication through EmailJS</li>
        <li>⚡ Performance Optimization: Fast loading times with Next.js 14 features</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Built with Next.js 14 and React 18 for optimal performance and SEO</li>
        <li>Implemented animations using Framer Motion for engaging user interactions</li>
        <li>Designed responsive layouts with Tailwind CSS for consistent styling</li>
        <li>Created dynamic content sliders with Swiper and Keen Slider libraries</li>
        <li>Maintained code quality with ESLint and modern development practices</li>
      </ul>
      `,
        role: `
      Frontend Developer (Freelance) <br/>
      Responsible for the complete frontend implementation:
      <ul>
        <li>✅ Developed the entire website using Next.js 14 and React 18</li>
        <li>🎨 Created responsive UI with Tailwind CSS and Framer Motion animations</li>
        <li>🖼️ Implemented content carousels using Swiper and Keen Slider</li>
        <li>📧 Integrated EmailJS for client communication functionality</li>
        <li>🔄 Optimized for performance, code quality, and mobile responsiveness</li>
      </ul>
      `,
        techStack: [
            'Next.js 14',
            'React 18',
            'Tailwind CSS',
            'Framer Motion',
            'Supabase',
            'EmailJS',
            'Swiper',
            'Keen Slider',
        ],
        thumbnail: '/projects/images/egy-medya-3.png',
        longThumbnail: '/projects/images/egy-medya-3.png',
        images: [
            '/projects/images/egy-medya-1.png',
            '/projects/images/egy-medya-2.png',
            '/projects/images/egy-medya-3.png',
        ],
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Fullstack Developer (Frontend Focus)',
        company: 'Mahaseel Masr',
        duration: 'Feb 2024 - Present',
    },
    {
        title: 'Fullstack Developer (Freelance)',
        company: 'Freelance',
        duration: 'March 2024 - Present',
    },
];
