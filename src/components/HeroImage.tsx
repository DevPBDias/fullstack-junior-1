import React from 'react'
import Image from 'next/image'
import hero from '../../public/assets/images/hero.png'


const HeroImage = () => {
    return (
        <section className='absolute w-[808px] inset-y-0 right-0'>
            <div className='img_size'>
                <Image className='img_size'  src={hero} alt="smiling students" />
            </div>
            <button 
            className='btn_contact top-[30px] right-[160px] nav_links '
            type="button">Contact Us</button>
        </section>
    )
}

export default HeroImage