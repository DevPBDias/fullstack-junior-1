import { ITasks } from "@/interfaces";
import webDesign from '../../public/assets/icons/webDesign.svg'
import socialMedia from '../../public/assets/icons/socialMedia.svg'
import artWork from '../../public/assets/icons/artWork.svg'

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