import React from 'react';
import vscode from '../images/vs_code.png';
import html from '../images/html.png';
import css from '../images/css.png';
import js from '../images/js.png';
import tailwind from '../images/tailwind.png';
import mongodb from '../images/mongoDB.png';
import sql from '../images/sql.png';
import socketIO from '../images/socketIO.png';
import git from '../images/git.png';
import reactIcon from '../images/react.png';
import java from '../images/java.png';
import python from '../images/python.png';
import github from '../images/github.png';
import nodejs from '../images/nodejs.png';
import postman from '../images/postman.png';
import expressJS from '../images/expressjs.png';
import docker from '../images/docker.png';

const skillsData = [
    {
        category: "Frontend",
        skills: [
            { name: "React Js", icon: reactIcon },
            { name: "HTML", icon: html },
            { name: "CSS", icon: css },
            { name: "Tailwind", icon: tailwind },
            { name: "JavaScript", icon: js }
        ]
    },
    {
        category: "Backend",
        skills: [
            { name: "Node Js", icon: nodejs },
            { name: "Express Js", icon: expressJS },
            { name: "Socket io", icon: socketIO },
            { name: "Java", icon: java },
            { name: "Python", icon: python }
        ]
    },
    {
        category: "Database",
        skills: [
            { name: "MongoDB", icon: mongodb },
            { name: "MySQL", icon: sql }
        ]
    },
    {
        category: "Others",
        skills: [
            { name: "Git", icon: git },
            { name: "GitHub", icon: github },
            { name: "Docker", icon: docker },
            { name: "VS Code", icon: vscode },
            { name: "Postman", icon: postman }
        ]
    }
];

const Skills = () => {
    return (
        <div id='skill' className="lg:h-screen max-h-fit text-white w-full bg-gradient-to-bl to-purple-950 via-black from-blue-950">
            <div className='h-16 w-full'></div>
            <div className="container mx-auto text-center px-5 lg:w-[70%]">
                <h1 className="lg:text-5xl text-4xl font-bold mb-6">Skills</h1>
                <p className="text-gray-400 lg:text-2xl text-lg mb-12">Here are some of my skills on which I have been working on for the past 2 years.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 pb-5">
                    {skillsData.map((category) => (
                        <div key={category.category} className="bg-gray-800 p-6 rounded-lg border border-purple-600">
                            <h3 className="text-2xl font-semibold mb-4">{category.category}</h3>
                            <div className="flex flex-wrap justify-center">
                                {category.skills.map((skill) => (
                                    <div key={skill.name} className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg lg:m-2 m-1 inline-flex items-center">
                                        <img src={skill.icon} alt={skill.name} className="w-6 h-6 mr-2" />
                                        {skill.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
