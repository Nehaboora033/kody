import { Figure_four, Figure_one, Figure_three, Figure_two, Insta, Linkedin, Real_Five, Real_Four, Real_one, Real_Six, Real_Three, Real_Two, Twitter } from "./icons";
import rocket from '../assets/webp/rocket.webp'

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
        icon: Real_Five,
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

