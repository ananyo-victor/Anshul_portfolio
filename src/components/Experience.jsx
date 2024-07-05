import React, { useState, useEffect } from 'react';
import axios from 'axios';
// const experienceData = [
//     {
//         role: "Web Developer Intern",
//         company: "Bharat Intern",
//         date: "Sep 2023 - Oct 2023",
//         description: "During my web development internship at Bharat Intern (November - December 2023), I developed dynamic web applications using HTML, CSS, JavaScript, and React, and collaborated on team projects following agile methodologies. I integrated backend services with Node.js, optimized code for performance, and more.",
//         skills: ["React js", "JavaScript", "Node Js", "Express js"],
//         companyLogo: "https://bharatintern-logo-url.png" // Replace this URL with the actual logo URL
//     },
//     {
//         role: "Web Developer Intern",
//         company: "Bharat Intern",
//         date: "Sep 2023 - Oct 2023",
//         description: "During my web development internship at Bharat Intern (November - December 2023), I developed dynamic web applications using HTML, CSS, JavaScript, and React, and collaborated on team projects following agile methodologies. I integrated backend services with Node.js, optimized code for performance, and more.",
//         skills: ["React js", "JavaScript", "Node Js", "Express js"],
//         companyLogo: "https://bharatintern-logo-url.png" // Replace this URL with the actual logo URL
//     },
//     {
//         role: "Web Developer Intern",
//         company: "Bharat Intern",
//         date: "Sep 2023 - Oct 2023",
//         description: "During my web development internship at Bharat Intern (November - December 2023), I developed dynamic web applications using HTML, CSS, JavaScript, and React, and collaborated on team projects following agile methodologies. I integrated backend services with Node.js, optimized code for performance, and more.",
//         skills: ["React js", "JavaScript", "Node Js", "Express js"],
//         companyLogo: "https://bharatintern-logo-url.png" // Replace this URL with the actual logo URL
//     }
// ];

const Experience = () => {
    const [experiences, setExperiences] = useState([{ id: 1, logo: '', role: '', company: '', start: '', end: '', description: '', skills: [{ id: 1, name: '' }] }]);
    useEffect(() => {
        fetchPortfolio();
    }, []);
    const fetchPortfolio = async () => {
        try {
            const response = await axios.get('https://anshul-portfolio-admin-be.onrender.com/portfolio/receive');
            const data = response.data;

            if (data) {
                // console.log(data);
                // set_id(data[data.length - 1]._id);
                
                setExperiences(data[data.length - 1].experiences.map(experience => ({
                    // id: experience.id,
                    logo: experience.logo,
                    role: experience.role,
                    company: experience.company,
                    start: experience.start,
                    end: experience.end,
                    description: experience.description,
                    skills: experience.skills.map(skill => ({
                        // id: skill.id,
                        name: skill.name,
                        // _id: skill._id
                    }))
                    // _id: experience._id
                })));
            }
        } catch (error) {
            console.error('Error fetching portfolio data', error);
        }
    };
    return (
        <div id='experience' className="text-white w-full min-h-screen h-fit bg-gradient-to-br from-purple-950 via-black to-blue-950">
            <div className='h-16 w-full'></div>
            <div className="container mx-auto text-center px-5">
                <h2 className="text-4xl font-bold mb-6">Experience</h2>
                <p className="text-gray-400 mb-12 text-xl">My work experience as a software engineer and working on different companies and projects.</p>
                <div className="flex flex-col items-center justify-center">
                    {experiences.map((experience, index) => (
                        <div key={index} className="bg-transparent my-3 p-6 shadow-lg max-w-xl border border-blue-700 rounded-xl">
                            <div className="flex items-center mb-4">
                                <img src={experience.logo} alt="Company Logo" className="w-16 h-16 rounded-full mr-4" />
                                <div className="text-left">
                                    <h3 className="text-2xl font-semibold">{experience.role}</h3>
                                    <p className="text-gray-400">{experience.company}</p>
                                    <p className="text-gray-400">{experience.date}</p>
                                </div>
                            </div>
                            <p className="text-left mb-4">{experience.description}</p>
                            <div className="text-left">
                                <strong className="font-bold">Skills:</strong>
                                <ul className="list-none flex flex-wrap mt-2">
                                    {experience.skills.map((skill, index) => (
                                        <li key={index} className="bg-gray-700 text-white py-1 px-3 rounded-xl m-1">{skill.name}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
