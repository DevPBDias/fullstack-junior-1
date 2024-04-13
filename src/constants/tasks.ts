import { ITasks } from "@/interfaces";
import webDesign from '../assets/Web Design.svg'
import socialMedia from '../assets/Social Media.svg'
import artWork from '../assets/Design.svg'

export const tasksData: ITasks[] = [
    {
        icon: webDesign,
        title: 'Web Design Projects',
        description: 'Make your website user friendly and look more professional',
    },
    {
        icon: socialMedia,
        title: 'Social Media Templates',
        description: 'Gain more followers or subscribers with the right template',
    },
    {
        icon: artWork,
        title: 'Digital Artwork',
        description: 'Complete your digital work with appropriate artwork',
    },
]