import images from '~/assets/images';

const projects_data = [
    {
        image: images.project1,
        projectTechUsed: ['Flask', 'Python', 'SCSS'],
        projectContent: {
            name: 'ChertNodes',
            desc: 'Minecraft servers hosting',
        },
        projectLinks: [
            {
                href: 'https://google.com',
                btn_name: 'Live =>',
            },
            {
                href: 'https://google.com',
                btn_name: 'Figma =>',
            },
        ],
    },
    {
        image: images.project2,
        projectTechUsed: ['Express', 'Node.js', 'React', 'RTK', 'Discord.js'],
        projectContent: {
            name: 'ProtectX web',
            desc: 'Discord anti-crash bot',
        },
        projectLinks: [
            {
                href: 'https://google.com',
                btn_name: 'Live =>',
            },
            {
                href: 'https://google.com',
                btn_name: 'Figma =>',
            },
        ],
    },
    {
        image: images.project3,
        projectTechUsed: ['Express', 'Node.js', 'EJS'],
        projectContent: {
            name: 'Kahoot Answers',
            desc: 'Get answers from kahoot quiz',
        },
        projectLinks: [
            {
                href: 'https://google.com',
                btn_name: 'Live =>',
            },
            {
                href: 'https://google.com',
                btn_name: 'Github =>',
            },
        ],
    },
    {
        image: images.project4,
        projectTechUsed: ['HTML', 'CSS', 'JavaScript'],
        projectContent: {
            name: 'KotkBot',
            desc: 'Landing for multi-funtional cute discord bot',
        },
        projectLinks: [
            {
                href: 'https://google.com',
                btn_name: 'Live =>',
            },
            {
                href: 'https://google.com',
                btn_name: 'Github =>',
            },
        ],
    },
    {
        image: images.project5,
        projectTechUsed: ['SASS', 'ReactJS'],
        projectContent: {
            name: 'Porfolio',
            desc: 'My personal portfolio',
        },
        projectLinks: [
            {
                href: 'https://google.com',
                btn_name: 'Figma =>',
            },
            {
                href: 'https://google.com',
                btn_name: 'Github =>',
            },
        ],
    },
    {
        image: images.project6,
        projectTechUsed: ['Pug', 'Less', 'Gulp', 'Node.js'],
        projectContent: {
            name: 'MadHost',
            desc: 'Minecraft and websites hosting with low prices',
        },
        projectLinks: [
            {
                href: 'https://google.com',
                btn_name: 'Live =>',
            },
            {
                href: 'https://google.com',
                btn_name: 'Github =>',
            },
        ],
    },
];

export const smallProject = [
    {
        image: images.smallProject,
        projectTechUsed: ['Vue', 'SCSS', 'EJS'],
        projectContent: {
            name: 'My blog',
            desc: 'Front-end of my future blog website',
        },
        projectLinks: [
            {
                href: 'https://google.com',
                btn_name: 'Github =>',
            },
        ],
    },
    {
        image: '',
        projectTechUsed: ['Discord.js', 'Node.js', 'TypeScript'],
        projectContent: {
            name: 'Discord Bot Boilerplate',
            desc: 'Start creating scalable discord.js bot with typescript in seconds',
        },
        projectLinks: [
            {
                href: 'https://google.com',
                btn_name: 'Github =>',
            },
        ],
    },
    {
        image: '',
        projectTechUsed: ['Figma'],
        projectContent: {
            name: 'Chess PRO',
            desc: 'Landing page about service for viewing chess tournaments',
        },
        projectLinks: [
            {
                href: 'https://google.com',
                btn_name: 'Figma =>',
            },
        ],
    },
    {
        image: '',
        projectTechUsed: ['Python', 'Flask'],
        projectContent: {
            name: 'Ooku',
            desc: 'Link shortener with discord auth',
        },
        projectLinks: [
            {
                href: 'https://google.com',
                btn_name: 'Live =>',
            },
        ],
    },
];

export default projects_data;
