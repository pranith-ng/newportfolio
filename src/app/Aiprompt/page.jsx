import React from 'react'
import Project from '../components/components/Projecttemplate/Project';

const page = () => {

  const exampleProject = {
    title: 'AI prompt',
    description: 'This Next.js project uses Gemini API to provide real-time AI-generated responses to user prompts. The application allows users to input questions or statements and receive relevant answers instantly, creating an interactive conversational experience.',
      color: "#b1c0ef",
    imgsrc: "/projectGifs/aiprompt/aiimage.png",
    techStack: [
      { category: 'Frontend', details: ['Next.js', 'Tailwind CSS', 'React'] },
      { category: 'API', details: ['Gemini API'] },
      { category: 'Authentication', details: ['Firebase'] },
      { category: 'Deployment', details: ['Vercel'] },
      { category: 'Version Control', details: ['Git', 'GitHub'] },
    ],
    features: [
      {
        description: 'generates answers based on user prompts.',
        gif: '/projectGifs/aiprompt/AIprompt1.mp4',
      },
      {
        description: 'Stores and maintains a history of user prompts.',
        gif: '/projectGifs/aiprompt/AIprompt2.mp4',
      },
      {
        description: 'Generates programming code dynamically based on user prompts.',
        gif: '/projectGifs/aiprompt/AIprompt4.mp4',
      },
      {
        description: 'Responsive design that works seamlessly across all devices, including mobile, PC, and tablet.',
        gif: '/projectGifs/aiprompt/AIprompt3.mp4',
      },
    ],
    links: [
      {
        name: "GitHub Repo",
        href: "https://github.com/pranith-ng/AIprompt"
      },
      {
        name: "Live Website",
        href: "https://a-iprompt-25dx.vercel.app/"
      }
    ],

  };



  return (
    <>
      <Project projectData={exampleProject} />
    </>
  )
}

export default page
