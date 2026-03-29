import React from 'react'

const AboutMe = ({ id }) => {
    return (
        <>
            <section className='bg-slate-50 py-24 md:py-32 scroll-mt-24'
                id={id}
            >
                <div className="max-w-6xl mx-auto px-6">
                    <p className='text-sm text-slate-400 text-center mx-auto mb-2 tracking-widest uppercase'>Sobre mi</p>
                    <h3 className='text-center text-4xl md:text-5xl text-slate-900 font-bold '>Ingeniería backend enfocada en arquitectura y rendimiento</h3>
                    <p className='text-slate-600 mt-6 md:mt-8  max-w-2xl mx-auto text-center leading-relaxed text-lg md:text-xl'>Desarrollo aplicaciones web con enfoque full-stack, priorizando backend sólido, sistemas mantenibles y decisiones técnicas bien fundamentadas.</p>


                    <p className='text-sm text-slate-500 text-center mx-auto mb-2 tracking-widest uppercase mt-10'>Arquitectura · Backend · Performance</p>
                    <div className="max-w-3xl mx-auto mt-12 space-y-6">

                        <p className='text-slate-600 leading-relaxed text-lg md:text-xl'>
                            Trabajo desde la estructura antes que desde el código. Me enfoco en definir cómo se organizan los sistemas, cómo se comunican sus partes y cómo pueden escalar sin volverse complejos.
                        </p>

                        <p className='text-slate-600 leading-relaxed text-lg md:text-xl'>
                            Desarrollo la lógica de negocio en el backend, diseñando arquitecturas, definiendo APIs y estableciendo bases sólidas para sistemas mantenibles.
                        </p>

                        <p className='text-slate-600 leading-relaxed text-lg md:text-xl'>
                            Priorizo la separación de responsabilidades, el uso de convenciones claras y decisiones técnicas bien fundamentadas. Me interesa entender el por qué de cada solución, no solo que funcione.
                        </p>

                        <p className='text-slate-600 leading-relaxed text-lg md:text-xl'>
                            Cuido especialmente la mantenibilidad, el rendimiento del backend y la estructura de la base de datos, buscando construir sistemas que puedan crecer sin comprometer su claridad ni estabilidad.
                        </p>

                    </div>


                    <div className="grid  md:grid-cols-3 gap-6 mt-20 md:mt-24 lg:gap-8 " >
                        {/* card 1 */}
                        <div className="bg-white shadow-sm rounded-xl border border-slate-200 p-8 transition-all hover:-translate-y-1 duration-300 hover:shadow-xl">
                            <h3 className='font-semibold text-slate-900 text-xl md:text-2xl mb-3'>Arquitectura primero</h3>

                            <p className='text-slate-600 text-base md:text-lg leading-relaxed '>
                                Diseño la estructura del sistema antes de escribir código. Me enfoco en la separación de responsabilidades, el uso de patrones y una base sólida que permita escalar sin fricción.</p>
                        </div>

                        {/* card 2 */}
                        <div className="bg-white shadow-sm rounded-xl border border-slate-200 p-8 transition-all hover:-translate-y-1 duration-300 hover:shadow-xl">
                            <h3 className='font-semibold text-slate-900 text-xl md:text-2xl mb-3'>Código claro y mantenible</h3>

                            <p className='text-slate-600 text-base md:text-lg leading-relaxed '>
                                Sigo convenciones y organizo el código de forma consistente, priorizando la legibilidad y la mantenibilidad a largo plazo. Un sistema entendible es más fácil de escalar y evolucionar.</p>
                        </div>
                        {/* card 3 */}
                        <div className="bg-white shadow-sm rounded-xl border border-slate-200 p-8 transition-all hover:-translate-y-1 duration-300 hover:shadow-xl">
                            <h3 className='font-semibold text-slate-900 text-xl md:text-2xl mb-3'>Optimización desde el diseño</h3>

                            <p className='text-slate-600 text-base md:text-lg leading-relaxed '>
                                Considero el rendimiento desde el inicio, especialmente en el backend y la base de datos, cuidando consultas, estructura y flujo de datos para evitar problemas a futuro.</p>
                        </div>



                    </div>








                    <div className="max-w-3xl mx-auto mt-20 space-y-6">

                        <p className='text-slate-600 leading-relaxed text-lg md:text-xl'>
                            Actualmente estoy enfocado en fortalecer mi lógica, mejorar mis patrones de arquitectura y profundizar en la seguridad de los sistemas backend.
                        </p>

                        <p className='text-slate-600 leading-relaxed text-lg md:text-xl'>
                            Me interesa trabajar en proyectos reales donde el software tenga impacto, especialmente en áreas como salud y sistemas financieros, donde la calidad, la estabilidad y la seguridad son fundamentales.
                        </p>

                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutMe