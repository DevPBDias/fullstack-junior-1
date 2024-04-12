import React from 'react'
import logo from '../assets/Livia..png'
import Image from 'next/image'
import Link from 'next/link'
import { headerLinks } from '@/utils/navbarLinks'
const Navbar = () => {
    return (
        <header className='w-full h-[120px] flex justify-between m-auto items-center'>
            <section className='w-4/5 flex flex-row justify-between m-auto items-center'>
                <div className='flex flex-row justify-between gap-x-[188px]'>
                    <div className='w-[92px] h-[54px] flex items-center'>
                        <Image className='h-[36px]' src={logo} alt="logo icon" />
                    </div>
                    <div className='flex flex-row justify-between m-auto items-center gap-x-[56px]'>
                        {
                            headerLinks?.map((link) => (
                                <Link
                                    className='font-normal text-lg text-[#FBFBFB]'
                                    key={link.id}
                                    href={link.path}>
                                    {link.name}
                                </Link>
                            ))
                        }
                    </div>
                </div>
                <button
                className='p-2 font-normal text-lg text-[#FBFBFB] bg-[#515DEF]'
                type="button">
                    Contact Us
                </button>
            </section>
        </header>
    )
}

export default Navbar