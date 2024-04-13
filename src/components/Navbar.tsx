import React from 'react'
import logo from '../../public/assets/images/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { headerLinks } from '@/constants/navbarLinks'

const Navbar = () => {
    return (
        <header className='w-[1112px] h-[120px]'>
            <nav className='ml-[160px]'>
                <div className='flex_horizontal_bw gap-x-[148px]'>
                    <div className='w-[92px] h-[36px] flex items-center'>
                        <Image className='img_size' src={logo} alt="logo icon" />
                    </div>
                    <nav className='gap-x-[56px]'>
                        {
                            headerLinks?.map((link) => (
                                <Link
                                    className='nav_links'
                                    key={link.id}
                                    href={link.path}>
                                    {link.name}
                                </Link>
                            ))
                        }
                    </nav>
                </div>
            </nav>
        </header>
    )
}

export default Navbar