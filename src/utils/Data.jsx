import { FaReact, FaNode, FaCss3Alt, FaPhp, FaPython } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';

import Project1 from '../assets/Project1.png';
import Project2 from '../assets/Project2.png';
import Project3 from '../assets/Project3.png';
import Project4 from '../assets/Project4.png';
import Project5 from '../assets/Project5.png';

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
        project_url: 'http://youtube.com',
        reverse: false
    },
    {
        id: 1,
        project_name: 'IE Admin',
        project_desc: `A platform in which I find myself working in my free time, the purpose is to help the 
                        administrative part of an online English school, with the possibility of managing all 
                        its staff, its payroll, as well as sending alerts or reminders about pending payments 
                        of your student via WhatsApp and your attendance record.`,
        tech_stack: ['JavaScript','Bootstrap 5', 'HTML', 'CSS', 'PHP', 'Node JS','MariaDB'],
        project_img: Project5,
        project_url: 'http://youtube.com',
        reverse: false
    },
    {
        id: 2,
        project_name: 'S.A.R.A.I.',
        project_desc: `It is a platform for the administration of information from a security company, although 
                        I did not develop it in its entirety, I adopted the project, finalizing it, correcting it, adding 
                         modules and functionalities.`,
        tech_stack: ['JavaScript','Bootstrap 4', 'JQuery', 'HTML', 'CSS', 'PHP', 'Node JS', 'MariaDB'],
        project_img: Project3,
        project_url: 'http://youtube.com',
        reverse: false
    },
    {
        id: 3,
        project_name: 'IE Portal',
        project_desc: `It is a platform currently used by an online English school, the objective was to 
                        be a support for the students, it has different types of activities and exercises for 
                        them, pre-recorded classes, readings, audios, etc. It also has an administration panel 
                        to continue adding more reagents, users, teachers among other functionalities, I am 
                        currently working on the rework of the project.`,
        tech_stack: ['JavaScript','Bootstrap 3', 'JQuery', 'HTML', 'CSS', 'PHP', 'MariaDB'],
        project_img: Project2,
        project_url: 'http://youtube.com',
        reverse: false
    },
    {
        id: 5,
        project_name: 'ADVANCED SEARCHER',
        project_desc: `A project carried out in a short time with the purpose of showing an MVP of what would later 
                        become a more advanced one with more functionalities, it has a search for records in different 
                        databases, of different categories, facial recognition, as well as search in sources open.`,
        tech_stack: ['JavaScript','Bootstrap 4', 'HTML', 'CSS', 'PHP', 'MariaDB'],
        project_img: Project4,
        project_url: 'http://youtube.com',
        reverse: false
    },

]

export const navLinks = [
    {
        id:0,
        name: 'Home',
        href: '#Home'
    },
    {
        id:1,
        name: 'My Skills',
        href: '#Skills'
    },

    {
        id:2,
        name: 'My Projects',
        href: '#Projects'
    },

    {
        id:3,
        name: 'My Contact',
        href: '#Contact'
    },
]
    