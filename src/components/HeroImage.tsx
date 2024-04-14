import React from 'react'
import Image from 'next/image'
import hero from '../../public/assets/images/hero.png'
import Link from 'next/link'

const HeroImage = () => {
    return (
        <section className='w-[42.08%]'>
            <div className='img_size'>
                <Image className='img_size' src={hero} alt="smiling students" />
            </div>
            <Link
                className='btn_contact top-[30px] right-[160px] nav_links '
                href='/contact'
            >
                Contact Us
            </Link>
        </section>
    )
}

export default HeroImage