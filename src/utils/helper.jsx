import { Figure_four, Figure_one, Figure_three, Figure_two, Insta, Linkedin, Real_Four, Real_one, Real_Six, Real_Three, Real_Two, Twitter } from "./icons";
import rocket from '../assets/webp/rocket.webp'
import Journey1 from '../assets/webp/ats.webp';
import Journey2 from '../assets/webp/solutions.webp'
import Journey3 from '../assets/webp/aws.webp'
import Journey4 from '../assets/webp/ait.webp'
import Journey5 from '../assets/webp/tech.webp'
import Journey6 from '../assets/webp/IT.webp'
import Journey7 from '../assets/webp/apple.webp'
import profile1 from '../assets/webp/profile1.webp'
import profile2 from '../assets/webp/profile2.webp'


export const Social_Links = [
    Insta,
    Linkedin,
    Twitter,
]

export const Navlinks = [
    { label: 'About', path: 'about' },
    { label: 'Experience', path: 'experience' },
    { label: 'Tech Stack', path: 'tech' },
    { label: 'Contact', path: 'contact' },
]

export const Bussiness_Data = [
    {
        icon: Real_one,
        description: 'Hands-on engineering leadership',
    },
    {
        icon: Real_Two,
        description: 'Reduced AWS bills by 70%',
    },
    {
        icon: Real_Three,
        description: 'Transformed startup to $50M revenue',
    },
    {
        icon: Real_Four,
        description: 'Delivered 7-figure SaaS exit',
    },
    {
        icon: Real_one,
        description: '8-Figure Staffing company exit',
    },
    {
        icon: Real_Six,
        description: 'Worked for two FAANG companies',
    },
]


export const Figure_Data = [
    {
        title: '7-Figure Exit',
        description: 'Built and sold ATS/HR onboarding SaaS with $400K ARR & 60+ clients.',
        bullets: [
            { icon: Figure_one, heading: 'Leadership', text: 'Ex-AWS engineer with top-tier problem solving record.' },
            { icon: Figure_two, heading: 'Hyper Efficiency', text: 'Resolved tickets at 10s avg. time at AWS.' },
        ],
    },
    {
        type: 'image',
        image_url: rocket,  // <-- use the imported value
        alt_text: 'Rocket launching from a laptop',
    },
    {
        title: '8-Figure Exit',
        description: 'Scaled staffing company to multi-million dollar exit, serving 50+ clients.',
        bullets: [
            { icon: Figure_three, heading: 'Scalable Infra', text: 'Cut AWS costs by 70% for DoD contractor.' },
            { icon: Figure_four, heading: 'Startup to Scale', text: 'Built and sold ATS/HR onboarding SaaS with $400K ARR & 60+ clients.' },
        ],
    },
]

export const Tech = [
    {
        title: 'Cloud & DevOps',
        languages: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub/GitLab Actions'],
    },
    {
        title: 'Programming',
        languages: ['JavaScript', 'TypeScript', 'Golang', 'Python', 'Java', 'Bash', 'SQL'],
    },
    {
        title: 'Tools & Frameworks',
        languages: ['Angular', 'React', 'Next.js', 'Node.js', 'Spring Boot', 'Cypress', 'Jest', 'Jasmine'],
    },
    {
        title: 'OS & Collaboration',
        languages: ['Linux', 'macOS', 'Windows', 'Jira', 'Confluence', 'Slack', 'Trello', 'ClickUp'],
    },
    {
        title: 'AI/ML',
        languages: ['AWS Bedrock', 'OpenAI API', 'Grok', 'Cursor'],
    },
    {
        title: 'Databases',
        languages: ['PostgreSQL', 'MySQL', 'MongoDB'],
    },
    {
        title: 'Infrastructure & Servers',
        languages: ['Terraform', 'Ansible', 'CloudFormation', 'Apache', 'Nginx'],
    },
];

export const Journey_Data = [
    {
        image: Journey1,
        description: 'CTO / Architect / Founder',
    },
    {
        image: Journey2,
        description: 'VP of Product Dev. & Technical Director',
    },
    {
        image: Journey3,
        description: 'Sr. DevOps Engineer',
    },
    {
        image: Journey4,
        description: 'Sr. Systems Engineer',
    },
    {
        image: Journey5,
        description: 'Linux Admin & DevOps',
    },
    {
        image: Journey6,
        description: 'IT Technician 4',
    },
    {
        image: Journey7,
        description: 'Technical Support & Genius',
    },
]

export const Current_Data = [
    {
        validity: '4 hours/month',
        price: '$1,800',
        description: 'Perfect for quick consultations, strategic guidance, or periodic check-ins. Ideal for founders who need a seasoned CTO’s insight without a long-term commitment.',

    },
    {
        validity: '10 hours/month',
        price: '$4,000',
        description: 'A balance of strategy and hands-on execution. Designed for startups scaling quickly and needing consistent CTO involvement to manage infrastructure, optimize costs, and guide teams.',

    },
    {
        validity: '20 hours/month',
        price: '$7,000',
        description: 'Ready to level up fast. Full CTO advisory plus hands-on leadership to guide engineering teams, implement complex systems, and drive major product milestones.',
    },
]

export const Leader_Data = [
    {
        profile: profile1,
        description: 'Kody excels at solving complex problems, communicating clearly, and delivering under pressure. He has built platforms from scratch, led innovation in challenging markets, and added value as both a technologist and strategic partner. Thoughtful, hard-working, and committed to excellence — I highly recommend him.',
        name: 'Ross O Rourke',
        role: 'Former CEO, IC-1 Solutions',

    },
    {
        profile: profile2,
        description: 'Kody helped transform our start-up into a powerhouse that scaled to 200+ staff and $50M revenue in 2 years. He is a genius-level engineer and fantastic with people, leadership, and business outcomes. Ideal for any role requiring innovation, grit, and results.',
        name: 'Adam kepper',
        role: 'Founder, Jax Equity',
    },
    {
        profile: profile1,
        description: 'Kody excels at solving complex problems, communicating clearly, and delivering under pressure. He has built platforms from scratch, led innovation in challenging markets, and added value as both a technologist and strategic partner. Thoughtful, hard-working, and committed to excellence — I highly recommend him..',
        name: 'Capro ella',
        role: 'CEO',
    },
    {
        profile: profile2,
        description: 'Kody helped transform our start-up into a powerhouse that scaled to 200+ staff and $50M revenue in 2 years. He is a genius-level engineer and fantastic with people, leadership, and business outcomes. Ideal for any role requiring innovation, grit, and results.',
        name: 'Ellot Hober',
        role: 'Manager',
    },
    {
        profile: profile1,
        description: 'Kody excels at solving complex problems, communicating clearly, and delivering under pressure. He has built platforms from scratch, led innovation in challenging markets, and added value as both a technologist and strategic partner. Thoughtful, hard-working, and committed to excellence — I highly recommend him..',
        name: 'Capro ella',
        role: 'CEO',
    },


]