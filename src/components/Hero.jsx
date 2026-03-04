import React from 'react'
import { Link } from 'react-router-dom'
import { File } from 'lucide-react'


const Hero = () => {
    return (
        <>
            <div className='bg-white min-h-[calc(100vh-6rem)] flex items-center'>
                <div className="max-w-7xl px-6 mx-auto flex flex-col lg:flex-row  justify-between items-center lg:items-center gap-12">
                    {/* Textos y botones */}
                    <div className="">
                        <h1 className='max-w-xl text-4xl md:text-5xl  font-bold tracking-tight leading-[1.1] text-slate-900 lg:translate-y-4'>Ingeniería web orientada a rendimiento y escalabilidad.</h1>

                        <p className='mt-4 md:mt-5 text-lg md:text-xl leading-relaxed text-slate-600 max-w-xl'>Diseño arquitecturas sólidas enfocadas en performance, mantenibilidad y crecimiento sostenible.</p>
                        {/* Área de botones */}
                        <div className="flex gap-3 mt-6 md:mt-8">
                            <Link
                                className="py-2 px-6 bg-slate-800 text-white rounded-md hover:bg-slate-900 transition-colors duration-200" to="">Ver proyectos</Link>
                            <Link

                                className="flex gap-2 py-2 px-3 rounded-md border  hover:border-slate-900 transition-colors duration-200
                                text-slate-600 border-slate-300 hover:text-slate-900 
                                "
                                to=""
                            >
                                <File
                                    className='inline w-4' />
                                Descargar CV
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-1 justify-center lg:justify-end">
                        <img src="/img/mike-tech1.png" alt="img-mike" className='
                       max-h-[83vh] w-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] lg:translate-x-8' />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Hero

