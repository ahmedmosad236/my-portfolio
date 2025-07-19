import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'Ahmedmosad8754@gmail.com',

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
    {
        title: 'Shop-Wise',
        slug: 'shop-wise',
        liveUrl:
            'https://shop-wise-git-main-ahmeds-projects-a64d0fb5.vercel.app/',
        year: 2024,
        description: `
      A fully functional e-commerce web application built from scratch to provide a seamless shopping experience. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>🔐 User Authentication: Secure login, registration, and user sessions</li>
        <li>🛒 Shopping Cart: Complete product management with addition, removal, and order tracking</li>
        <li>📱 Responsive Design: Optimized user experience across all device sizes</li>
        <li>💳 Payment Integration: Secure checkout process with Stripe payment gateway</li>
        <li>⚡ Performance Optimization: Implemented lazy loading, code splitting, and caching strategies</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Built with React and Next.js for server-side rendering and optimal performance</li>
        <li>Implemented Redux for efficient state management across the application</li>
        <li>Utilized Firebase for backend services including authentication and data storage</li>
        <li>Designed with Tailwind CSS for a modern, responsive interface</li>
      </ul>
      `,
        role: `
      Frontend Developer <br/>
      Responsible for the entire frontend implementation:
      <ul>
        <li>✅ Designed and developed a responsive UI using React, Redux, and Tailwind CSS</li>
        <li>🔒 Implemented authentication and authorization with secure user sessions</li>
        <li>🛒 Developed a complete shopping cart system with product management</li>
        <li>⚡ Optimized frontend performance with advanced techniques</li>
        <li>💳 Integrated Stripe payment gateway for secure transactions</li>
      </ul>
      `,
        techStack: [
            'React',
            'Redux',
            'Next.js',
            'Tailwind CSS',
            'Firebase',
            'Stripe',
        ],
        thumbnail: '/projects/images/shop-wise-1.png',
        longThumbnail: '/projects/images/shop-wise-1.png',
        images: [
            '/projects/images/shop-wise-1.png',
            '/projects/images/shop-wise-2.png',
            '/projects/images/shop-wise-3.png',
        ],
    },
    {
        title: 'Umbrella Show',
        slug: 'umbrella-show',
        techStack: ['React', 'Bootstrap', 'Framer Motion', 'Netlify'],
        thumbnail: '/projects/images/umbrella-show-1.png',
        longThumbnail: '/projects/images/umbrella-show-1.png',
        images: [
            '/projects/images/umbrella-show-1.png',
            '/projects/images/umbrella-show-2.png',
            '/projects/images/umbrella-show-3.png',
        ],
        liveUrl: 'https://umbrellashow.com/',
        year: 2024,
        description: `
      A modern and visually engaging static landing page designed to showcase a creative show with smooth animations and a fully responsive layout. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>🎨 Visually Stunning: Pixel-perfect design implementation with attention to detail</li>
        <li>🚀 High Performance: Optimized for fast loading and smooth interactions</li>
        <li>📱 Fully Responsive: Perfect display across all device sizes</li>
        <li>✨ Interactive Elements: Engaging user experience with smooth animations</li>
      </ul>
      `,
        role: `
      Frontend Developer <br/>
      Responsible for the complete implementation:
      <ul>
        <li>✅ Developed a high-performance, pixel-perfect landing page using React</li>
        <li>🎬 Implemented smooth animations and interactive elements with Framer Motion</li>
        <li>📱 Optimized responsiveness across all devices using Bootstrap</li>
        <li>🚀 Deployed and configured the site on Netlify for optimal performance</li>
      </ul>
      `,
    },
    {
        title: 'Fast React Pizza',
        slug: 'fast-react-pizza',
        liveUrl: 'https://fast-react-pizza-omega-one.vercel.app/',
        year: 2024,
        description: `
      A pizza delivery application built with React, Redux, and Tailwind CSS that allows users to order pizzas without creating an account. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>🍕 Dynamic Menu: Pizza menu loaded from API with real-time updates</li>
        <li>🛒 Shopping Cart: Add multiple pizzas to cart before ordering</li>
        <li>📱 No Login Required: Simple ordering with just name, phone, and address</li>
        <li>📍 GPS Integration: Optional location sharing for easier delivery</li>
        <li>⚡ Priority Orders: Option to mark orders as priority (20% additional fee)</li>
        <li>🔍 Order Tracking: Unique ID for each order for easy lookup</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Built with React for a responsive and interactive UI</li>
        <li>Implemented Redux for global state management across the application</li>
        <li>Used React Router for seamless navigation and routing</li>
        <li>Styled with Tailwind CSS for a modern, responsive design</li>
        <li>Integrated with API for menu loading and order processing</li>
      </ul>
      `,
        role: `
      Frontend Developer <br/>
      Responsible for the complete implementation:
      <ul>
        <li>✅ Developed the entire application using React and Redux</li>
        <li>🛒 Built shopping cart functionality with state persistence</li>
        <li>🔄 Implemented API integration for menu loading and order submission</li>
        <li>📍 Added GPS location functionality for delivery optimization</li>
        <li>🎨 Created responsive UI with Tailwind CSS for all device sizes</li>
      </ul>
      `,
        techStack: [
            'React',
            'Redux',
            'React Router',
            'Tailwind CSS',
            'API Integration',
        ],
        thumbnail: '/projects/images/fast-react-pizza-2.png',
        longThumbnail: '/projects/images/fast-react-pizza-2.png',
        images: [
            '/projects/images/fast-react-pizza-1.png',
            '/projects/images/fast-react-pizza-2.png',
        ],
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Frontend Developer',
        company: 'Mahaseel Masr',
        duration: 'Feb 2024 - Present',
    },
    {
        title: 'Frontend Developer (Freelance)',
        company: 'Freelance',
        duration: 'March 2024 - Present',
    },
];
