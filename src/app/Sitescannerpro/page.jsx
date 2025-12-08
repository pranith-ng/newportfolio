import React from 'react'
import Project from '../components/components/Projecttemplate/Project';

const page = () => {

    const exampleProject = {
        title: 'SiteScannerPro',
        description: 'SiteScannerPro is a Next.js application that analyzes websites. When a user submits a URL, the application scans the site to retrieve key performance metrics such as speed, accessibility, SEO, and best practices. Using the Gemini API, SiteScannerPro generates real-time AI-driven recommendations to help users optimize their websites for better performance and user experience.',
        color: "#b1c0ef",
        imgsrc: "/projectGifs/sitescannerpro/sspimg.png",
        techStack: [
            { category: 'Frontend', details: ['Next.js', 'Tailwind CSS', 'React'] },
            { category: 'API', details: ['Gemini API', 'Google PageSpeed Insights API'] },
            { category: 'Authentication', details: ['Supabase'] },
            { category: 'Deployment', details: ['Vercel'] },
            { category: 'Version Control', details: ['Git', 'GitHub'] },
        ]
        ,
        features: [
            {
                description: 'Scans websites using Google PageSpeed Insights and fetches real-time analysis data.',
                gif: '/projectGifs/sitescannerpro/ssp1.mp4',
            },
            {
                description: 'Breaks down results into key metrics including performance, accessibility, SEO, and best practices.',
                gif: '/projectGifs/sitescannerpro/ssp2.mp4',
            },
            {
                description: 'Generates AI-powered optimization recommendations using the Gemini API.',
                gif: '/projectGifs/sitescannerpro/ssp3.mp4',
            },
            {
                description: 'Secure authentication system with user login functionality.',
                gif: '/projectGifs/sitescannerpro/ssp4.mp4',
            },
            {
                description: 'Responsive design that adapts seamlessly to mobile, tablet, and desktop devices.',
                gif: '/projectGifs/sitescannerpro/ssp5.mp4',
            },
        ],

        links: [
            {
                name: "GitHub Repository",
                href: "https://github.com/pranith-ng/sitescannerpro"
            },
            {
                name: "Visit Website",
                href: "https://sitescannerpro.vercel.app/"
            }
        ]
    };

    return (
        <>
            <Project projectData={exampleProject} />
        </>
    )
}

export default page
