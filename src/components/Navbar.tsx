import React from 'react'
import logo from '../assets/Livia..png'
import Image from 'next/image'
import Link from 'next/link'
import { headerLinks } from '@/utils/navbarLinks'

const Navbar = () => {
    return (
        <header>
            <section>
                <div>
                    <div>
                        <Image src={logo} alt="logo icon" />
                    </div>
                    <div>
                        {
                            headerLinks?.map((link) => (
                                <Link key={link.id} href={link.path}>
                                    {link.name}
                                </Link>
                            ))
                        }
                    </div>
                </div>
                <button type="button">
                    Contact Us
                </button>
            </section>
        </header>
    )
}

export default Navbar