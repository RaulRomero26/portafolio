import { FaReact, FaNode, FaCss3Alt, FaPhp, FaPython } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';

import Project1 from '../assets/Project1.png';
import Project2 from '../assets/Project2.png';

export const Skills = [
    {
        id: 0,
        tech: 'React JS',
        icon: <FaReact/>
    },
    {
        id: 1,
        tech: 'Node JS',
        icon: <FaNode/>
    },
    {
        id: 2,
        tech: 'CSS',
        icon: <FaCss3Alt/>
    },
    {
        id: 3,
        tech: 'JavaScript',
        icon: <SiJavascript/>
    },
    {
        id: 4,
        tech: 'PHP',
        icon: <FaPhp/>
    },
    {
        id: 5,
        tech: 'Python',
        icon: <FaPython/>
    }
]

export const projectDetails = [
    {
        id: 0,
        project_name: 'A.R.G.O.S.',
        project_desc: `It is a system focused on the analysis of information from different databases, 
                        including search and filtering of records, facial recognition, geographic analysis, 
                        as well as statistics. Of course, the management of user accounts as well as
                        custom permissions is also included.`,
        tech_stack: ['React JS', 'Bootstrap 5', 'Node JS', 'Express', 'MongoDB', 'MariaDB'],
        project_img: Project1,
        project_url: 'htttp://youtube.com',
        reverse: false
    },
    {
        id: 1,
        project_name: 'IE Portal',
        project_desc: `It is a platform currently used by an online English school, the objective was to 
                        be a support for the students, it has different types of activities and exercises for 
                        them, pre-recorded classes, readings, audios, etc. It also has an administration panel 
                        to continue adding more reagents, users, teachers among other functionalities, I am 
                        currently working on the rework of the project.`,
        tech_stack: ['JavaScript','Bootstrap 3', 'JQuery', 'HTML', 'CSS', 'PHP', 'MariaDB'],
        project_img: Project2,
        project_url: 'htttp://youtube.com',
        reverse: false
    }
]