import { Link } from 'react-router-dom'
import {Menu, X} from "lucide-react"
export default function Header() {
    return (
        <>
            <header className="w-full bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-between h-16 md:h-20 items-center">
                        <Link className="font-bold tracking-widest text-lg md:text-xl text-slate-900" to="/">MASP</Link>

                        <nav className="hidden md:flex text-sm font-medium text-slate-600  gap-8 items-center ">

                            <Link  className="hover:text-slate-900 transition-colors duration-200" to="/portafolio">Portafolio</Link>

                            <Link className="hover:text-slate-900 transition-colors duration-200"  to="/informacion">Sobre Mí</Link>

                            <Link className="hover:text-slate-900 transition-colors duration-200"  to="/habilidades">Habilidades</Link>

                            <Link className="hover:text-slate-900 transition-colors duration-200"  to="/experiencia">Experiencia</Link>

                            <Link className="hover:text-slate-900 transition-colors duration-200"  to="/contacto">Contacto</Link>

                      
                        </nav>
                              <button
                            className='p-2 text-slate-900 md:hidden'
                            onClick={()=>setOpen(true)}
                            aria-label='Abrir menu'

                            >
                                <Menu size={24} />
                            </button>
                            <button
                            className='p-2 text-slate-900 md:hidden'
                            onClick={()=>setOpen(false)}
                            aria-label='Cerrar menu'

                            >
                                <X size={24} />
                            </button>
                    </div>
                </div>
            </header>

        </>
    )
}
