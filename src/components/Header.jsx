import { Link } from 'react-router-dom'
import { Menu, X } from "lucide-react"
import { useState, useEffect } from 'react'
import MobileMenu from './MobileMenu';
import { HashLink } from 'react-router-hash-link';
export default function Header() {

    const [isOpen, setIsOpen] = useState(false);
    //saber si esta haciendo scroll
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);




    return (
        <>
            <header className={`
                    w-full sticky top-0 z-50 backdrop-blur-md border-b border-slate-200
                    transition-all duration-300
                    ${isScrolled ? 'bg-white/95 h-16 shadow-md' : 'bg-white/90 h-20'}
                `}>
                <div className="container max-w-7xl mx-auto px-6 w-full">
                    <div className="flex justify-between h-16 md:h-20 items-center w-full">
                        <HashLink className="font-bold tracking-widest text-lg md:text-xl text-slate-900" smooth to="/#inicio">MASP</HashLink>

                        <nav className="hidden md:flex text-sm font-medium text-slate-600  gap-8 items-center ">

                            <HashLink className="hover:text-slate-900 transition-colors duration-200" smooth to="/#proyectos">Portafolio</HashLink>


                            <HashLink className="hover:text-slate-900 transition-colors duration-200" smooth to="/#sobre-mi">Sobre Mí</HashLink>

                            <HashLink className="hover:text-slate-900 transition-colors duration-200" smooth to="/#contacto">Contacto</HashLink>


                        </nav>

                        {!isOpen && (
                            <Menu
                                className='hover:cursor-pointer md:hidden'
                                onClick={e => setIsOpen(true)}

                            />
                        )}
                    </div>
                </div>
            </header >



            <MobileMenu
                onClose={() => setIsOpen(false)}
                isOpen={isOpen}
            />
        </>
    )
}
