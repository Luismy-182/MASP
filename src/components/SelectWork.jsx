import React from 'react'
import ArchitectureSection from './ArchitectureSection'
import SelectWorkCard from './SelectWorkCard'

const SelectWork = ({ id }) => {
    return (
        <>
            <section className='bg-slate-50 pt-16 md:pt-20 scroll-mt-24' 

                id={id}
            >
                <div className="max-w-6xl mx-auto px-6"
                >
                    <p className='text-sm text-slate-400 text-center mx-auto mb-2 tracking-widest'>PROYECTOS DESTACADOS</p>
                    <h3 className='text-center text-4xl md:text-5xl text-slate-900 font-bold '>Ingeniería orientada a producto digital</h3>
                    <p className='text-slate-600 mt-6 md:mt-8  max-w-2xl mx-auto text-center leading-relaxed text-lg md:text-xl'>Construcción de aplicaciones con enfoque backend-first, priorizando arquitectura clara y crecimiento sostenible del producto.</p>
                </div>
            </section>
            <SelectWorkCard />
        </>
    )
}

export default SelectWork