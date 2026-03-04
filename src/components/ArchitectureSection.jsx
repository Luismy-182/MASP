import React from 'react'

const ArchitectureSection = () => {
    return (
        <>
            <div className="bg-slate-50">

                <div className="container max-w-6xl mx-auto px-6 py-24 md:py-32">

                    <h2 className='text-4xl md:text-5xl font-bold text-center text-slate-900'>Arquitectura pensada para escalar.</h2>
                    <p className='mt-6 md:mt-8 max-w-2xl mx-auto text-center text-slate-600 text-lg md:text-xl leading-relaxed'>Backend sólido. Sistemas mantenibles. Performance medible.</p>

                    {/* card 1 */}
                    <div className="grid  md:grid-cols-3 gap-6 mt-14 md:mt-16 lg:gap-8" >
                        <div className="bg-white  w-full  shadow-sm rounded-xl border border-slate-200 p-8">
                            <h3 className='font-semibold text-slate-900 text-xl md:text-2xl mb-3'>Arquitectura modular </h3>

                            <p className='text-slate-600 text-base md:text-lg leading-relaxed '>
                                Servicios desacoplados, responsabilidades claras y patrones que permiten evolución sin fricción. </p>
                        </div>

                        {/* card 2 */}
                        <div className="bg-white  w-full  shadow-sm rounded-xl border border-slate-200 p-8">
                            <h3 className='font-semibold text-slate-900 text-xl md:text-2xl mb-3'>Optimización desde el core</h3>

                            <p className='text-slate-600 text-base md:text-lg leading-relaxed '>
                                No optimizo al final. Analizo cuellos de botella, tiempos de respuesta y uso de recursos desde la fase de diseño.</p>
                        </div>
                        {/* card 3 */}
                        <div className="bg-white  w-full  shadow-sm rounded-xl border border-slate-200 p-8">
                            <h3 className='font-semibold text-slate-900 text-xl md:text-2xl mb-3'>Escala real, no improvisada</h3>

                            <p className='text-slate-600 text-base md:text-lg leading-relaxed '>
                                Construyo sistemas preparados para crecer: manejo de carga, caching estratégico y estructura preparada para distribución.</p>
                        </div>



                    </div>


                </div>

            </div>


        </>
    )
}

export default ArchitectureSection