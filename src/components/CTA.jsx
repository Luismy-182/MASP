import React from 'react'

const CTA = ({ id }) => {
    return (
        <section className="bg-white py-24 md:py-32 scroll-mt-24" id={id} >
            <div className="max-w-6xl mx-auto px-6">
                <p className='text-sm text-slate-400 text-center mx-auto mb-2 tracking-widest uppercase'>Contacto</p>
                <h3 className='text-center text-4xl md:text-5xl text-slate-900 font-bold '>Construyamos sistemas bien diseñados</h3>
                <p className='text-slate-600 mt-6 md:mt-8  max-w-2xl mx-auto text-center leading-relaxed text-lg md:text-xl'>Actualmente estoy enfocado en integrarme a proyectos donde pueda aportar valor real desde la arquitectura, optimización y diseño de sistemas backend sólidos.</p>

                <div className="flex justify-center mt-10 gap-5 max-w-lg mx-auto text-center">
                    <a href="mailto:miguel.buny@gmail.com"
                        className='bg-slate-800 px-6 py-3 rounded-md font-semibold text-white hover:bg-slate-900 flex-1  transition-colors duration-300'

                    >Contactar</a>
                    <a
                        href="storage/miguel_suarez_backend_developer.pdf"
                        download='miguel_suarez_backend.pdf'
                        className='border  border-slate-200 text-slate-700 px-6 py-3 rounded-md font-semibold hover:border-slate-900  flex-1 transition-colors duration-300'
                    >Ver CV</a>

                </div>

                <p className='text-sm  text-slate-600 text-center mt-6'>O escríbeme directamente: miguel.buny@gmail.com</p>

            </div>

        </section>
    )
}

export default CTA