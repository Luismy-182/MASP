import React from 'react'
import { Link } from 'react-router-dom'
import { X } from 'lucide-react'
const MobileMenu = ({ onClose, isOpen }) => {

    console.log(isOpen);

    return (
        <>
            <div className={`md:hidden fixed inset-0 z-50 flex justify-end transition-opacity   duration-300
                ${isOpen ? 'bg-black/50 opacity-100' : 'bg-transparent opacity-0 pointer-events-none'}`}
            onClick={onClose}
            >


                <div className={` bg-white p-5 w-[70%] shadow-xl h-full transform transition-transform duration-500 ease-in-out 
                ${isOpen ? 'translate-x-0' : 'translate-x-full'}`

                }
                    onClick={e => e.stopPropagation()}
                >
                    <div className="flex flex-col items-end mb-5 ">

                        <X
                            className='md:hidden '
                            onClick={onClose}
                        />
                    </div>

                    <nav className="flex flex-col text-sm font-medium text-slate-600  gap-8 items-start">






                        <Link className="hover:text-slate-900 transition-colors duration-200" to="/portafolio"
                            onClick={onClose}
                        >Portafolio</Link>

                        <Link className="hover:text-slate-900 transition-colors duration-200" to="/informacion"
                            onClick={onClose}
                        >Sobre Mí</Link>

                        <Link className="hover:text-slate-900 transition-colors duration-200" to="/habilidades" onClick={onClose}
                        >Habilidades</Link>

                        <Link className="hover:text-slate-900 transition-colors duration-200" to="/experiencia" onClick={onClose}
                        >Experiencia</Link>

                        <Link className="hover:text-slate-900 transition-colors duration-200" to="/contacto"
                            onClick={onClose}
                        >Contacto</Link>


                    </nav>

                </div>
            </div>

        </>
    )
}

export default MobileMenu