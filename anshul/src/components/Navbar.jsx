import React from 'react';
import { Navbar, Button } from 'flowbite-react';
import { HiMenu } from 'react-icons/hi';

const MyNavbar = () => {
  return (
    <header className="fixed w-full top-0 bg-gray-900 z-20">
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="#">
          <span className="text-2xl font-bold text-white">Portfolio</span>
        </Navbar.Brand>
        <Navbar.Toggle>
          <HiMenu className="text-white" />
        </Navbar.Toggle>
        <Navbar.Collapse>
          <Navbar.Link href="#about" className="text-gray-300 hover:text-white">
            About
          </Navbar.Link>
          <Navbar.Link href="#skill" className="text-gray-300 hover:text-white">
            Skills
          </Navbar.Link>
          <Navbar.Link href="#experience" className="text-gray-300 hover:text-white">
            Experience
          </Navbar.Link>
          <Navbar.Link href="#project" className="text-gray-300 hover:text-white">
            Projects
          </Navbar.Link>
          <Navbar.Link href="#education" className="text-gray-300 hover:text-white">
            Education
          </Navbar.Link>
        </Navbar.Collapse>
        <Button href="https://github.com/your-profile" gradientDuoTone="purpleToBlue">
          Github Profile
        </Button>
      </Navbar>
    </header>
  );
};

export default MyNavbar;
