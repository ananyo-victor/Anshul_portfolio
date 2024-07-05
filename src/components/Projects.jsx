import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import projectImage from '../path/to/your/image.png'; // Adjust the path accordingly

// const projectsData = [
//     {
//         title: "Real Time Chat App",
//         description: "Developed a dynamic real-time chat application using the MERN stack (MongoDB, Express.js, React, Node.js) and Socket.IO. The application supports instant messaging with features like user authentication, private and group chats.",
//         imageUrl: "",
//         link: "#"
//     },
//     // Add more projects here
// ];
// bg from-purple-950 via-black to-blue-950
const Projects = () => {
    const [projects, setProjects] = useState([{ _id: '', id: 1, image: '', name: '', description: '', link: '' }]);
    
    useEffect(() => {
        fetchPortfolio();
    }, []);

    const fetchPortfolio = async () => {
        try {
            const response = await axios.get('https://anshul-portfolio-admin-be.onrender.com/portfolio/receive');
            const data = response.data;

            if (data) {
                setProjects(data[data.length - 1].projects.map(project => ({
                    id: project.id,
                    image: project.image,
                    name: project.name,
                    description: project.description,
                    link: project.link,
                    _id: project._id
                })));
            }
        } catch (error) {
            console.error('Error fetching portfolio data', error);
        }
    };
    return (
        <div id='project' className="bg-gradient-to-br from-purple-950 via-black to-blue-950 text-white lg:h-screen max-h-fit w-full px-5">
            <div className='h-16 w-full'></div>
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">Projects</h2>
                <div className="space-y-6">
                    {projects.map((project, index) => (
                        <div key={index} className="border border-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto flex flex-col md:flex-row items-center">
                            <img src={project.image} alt={project.name} className="w-full md:w-1/3 h-48 object-cover rounded-md" />
                            <div className="md:ml-6 mt-4 md:mt-0 text-left">
                                <h3 className="text-2xl font-semibold">{project.name}</h3>
                                <p className="text-gray-400 mt-2">{project.description}</p>
                                <a href={project.link} className="mt-4 inline-block bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg">View Project</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
