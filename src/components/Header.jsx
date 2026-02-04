import { Link } from 'react-router-dom'
import { Menu, X } from "lucide-react"
import { useState } from 'react'
export default function Header() {
    const [abierto, setAbierto] = useState(false);


    const handleAbierto = () => {

        if (abierto) {
            setAbierto(false);

        } else {
            setAbierto(true);
        }


    }


    return (
        <>
            <header className="w-full bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-between h-16 md:h-20 items-center">
                        <Link className="font-bold tracking-widest text-lg md:text-xl text-slate-900" to="/">MASP</Link>

                        <nav className="hidden md:flex text-sm font-medium text-slate-600  gap-8 items-center ">

                            <Link className="hover:text-slate-900 transition-colors duration-200" to="/portafolio">Portafolio</Link>

                            <Link className="hover:text-slate-900 transition-colors duration-200" to="/informacion">Sobre Mí</Link>

                            <Link className="hover:text-slate-900 transition-colors duration-200" to="/habilidades">Habilidades</Link>

                            <Link className="hover:text-slate-900 transition-colors duration-200" to="/experiencia">Experiencia</Link>

                            <Link className="hover:text-slate-900 transition-colors duration-200" to="/contacto">Contacto</Link>


                        </nav>

                        {abierto ? <X

                            className='block md:hidden'
                            height={24}
                            values={abierto}
                        /> : <Menu
                            values={abierto}

                            height={24}
                            className='block md:hidden'
                        />}




                    </div>
                </div>
            </header>

        </>
    )
}
