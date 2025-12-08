import React from 'react'
import Project from '../components/Projecttemplate/Project';

const page = () => {

    const exampleProject = {
        title: 'Web.builder',
        description: 'A powerful, easy-to-use Drag and Drop website builder for creating websites without any code. Built using Next.js and Tailwind CSS for seamless user experience.',
        color: "#81b7bf",
        imgsrc: "/projectGifs/web.builder/wbimage.png",
        techStack: [
            { category: 'Frontend', details: ['Next.js', 'Tailwind CSS', 'React'] },
            { category: 'Backend', details: ['Firestore Database'] },
            { category: 'Authentication', details: ['Firebase'] },
            { category: 'Storage', details: ['Supabase'] },
            { category: 'Version Control', details: ['Git', 'GitHub'] },
        ]
        ,
        features: [
            {
                description: 'Authentication and user dashboard (All user data is stored in firebase Database)',
                gif: '/projectGifs/web.builder/webbuilder1.mp4',
            },
            {
                description: 'Live customization of elements',
                gif: '/projectGifs/web.builder/webbuilder2.mp4',
            },
            {
                description: 'Drag and Drop elements',
                gif: '/projectGifs/web.builder/webbuilder3.mp4',
            },
            {
                description: 'Undo / Redo Functionalities',
                gif: '/projectGifs/web.builder/webbuilder4.mp4',
            },
            {
                description: 'CSS Style customization tool',
                gif: '/projectGifs/web.builder/webbuilder5.mp4',
            },
            {
                description: 'Sidebar tools',
                gif: '/projectGifs/web.builder/webbuilder6.mp4',
            },
        ],
        links: [
            {
                name: "GitHub Repository",
                href: "https://github.com/pranith-ng/Web.builder"
            },
            {
                name: "Visit Website",
                href: "https://web-builder-sandy.vercel.app/"
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
