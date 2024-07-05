import React,{useState,useEffect} from 'react';
import axios from 'axios';

// const educationData = [
//     {
//         institution: "Shri Vaishav Institute Of Management, Indore",
//         date: "Oct 2021 - Sep 2024",
//         grade: "8.3 CGPA",
//         description: "I completed my Bachelor of Computer Applications (BCA) with an 8.3 CGPA from Shri Vaishnav Institute of Management between 2021 and 2024. Throughout my studies, I gained a strong foundation in software development, database management, and web technologies, equipping me with the essential skills for",
//     },
//     {
//         institution: "Choithram Fountain Higher Secondary School, Indore",
//         date: "Apr 2019 - Apr 2021",
//         grade: "79.2%",
//         description: "I completed my high school education at Choithram Fountain Higher Secondary School located in Indore. This institution provided me with a robust academic foundation and a nurturing environment for personal growth and development.",
//     },
// ];

const Education = () => {
    const [educations, setEducations] = useState([{ _id: '', id: 1, institute: '', start: '', end: '', grade: '', description: '' }]);
    useEffect(() => {
        fetchPortfolio();
    }, []);
    const fetchPortfolio = async () => {
        try {
            const response = await axios.get('https://anshul-portfolio-admin-be.onrender.com/portfolio/receive');
            const data = response.data;

            if (data) {
                console.log(data);
                // set_id(data[data.length - 1]._id);
                setEducations(data[data.length - 1].educations.map(education => ({
                    id: education.id,
                    institute: education.institute,
                    start: education.start,
                    end: education.end,
                    grade: education.grade,
                    description: education.description,
                    _id: education._id
                })));
                
            }
        } catch (error) {
            console.error('Error fetching portfolio data', error);
        }
    };


    return (
        <div id='education' className="bg-gradient-to-bl to-purple-950 via-black from-blue-950 text-white min-h-screen h-fit w-full px-5 pb-5 flex-grow">
            <div className='h-16 w-full'></div>
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">Education</h2>
                <p className="text-gray-400 mb-12">My education has been a journey of self-discovery and growth. My educational details are as follows.</p>
                <div className="space-y-6">
                    {educations.map((education, index) => (
                        <div key={index} className="border group border-purple-700 hover:drop-shadow-[0_0_80px_rgba(109,40,217,0.85)] p-6 rounded-lg max-w-xl mx-auto text-left">
                            <h3 className="text-2xl font-semibold">{education.institution}</h3>
                            <p className="text-gray-400">{education.date}</p>
                            <p className="text-gray-400 mb-4">Grade: {education.grade}</p>
                            <p className="text-left lg:line-clamp-3 group-hover:line-clamp-none">{education.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Education;
