
import { Link } from 'react-router-dom';
import { Code } from 'lucide-react';
import ProjectSlider from './ProjectSlider';
import { tagColors } from '../helpers/tagColors';
const WorkCard = ({ proyecto, posicion }) => {

    const { id, title, description, tags, images, backend, frontend } = proyecto;

    return (
        <>
            {/* card-1 */}
            <div className="my-20 md:my-28 py-16 md:py-20 block md:grid  
            md:grid-cols-2 gap-12 bg-white w-full shadow-sm hover:shadow-lg transition-shadow duration-300 px-6 md:px-10 rounded-2xl">
                <div
                    className={`w-full mb-12 md:mb-0 ${posicion % 2 === 0 ? "md:order-1" : "md:order-2"}`}
                >

                    <h2 className='text-slate-900 text-3xl md:text-4xl mt-0 mb-5 font-bold'>{title}</h2>
                    <p className='text-slate-600 mt-4  max-w-2xl leading-relaxed text-lg md:text-xl'>{description}</p>
                    <p className='flex flex-wrap gap-2 mt-6'>{
                        tags.map((tag, index) => (
                            <span
                                key={index}
                                className={`px-3 py-1 text-sm rounded-full hover:scale-105 transition-transform ${tagColors[tag] || "bg-slate-100 text-slate-700"}`}
                            >
                                {tag}
                            </span>
                        ))
                    }</p>

                    {/* Área de botones */}
                    < div className="flex flex-col lg:flex-row gap-6 md:gap-3 mt-8" >
                        <Link
                            className="py-2 px-6 font-semibold bg-slate-800 text-white rounded-md hover:bg-slate-900 transition-colors duration-200 text-center" to={`/proyecto/${id}`}>Más Detalles
                        </Link>
                        <a
                            className="flex gap-2 py-2 px-4 rounded-md border  hover:border-slate-900 transition-colors duration-200
                                text-slate-600 border-slate-300 hover:text-slate-900 items-center justify-center
                                "
                            href={backend}
                            target='_blank'
                        >
                            <Code
                                className='inline w-4 h-4' />

                            {!frontend ? 'Código fuente' : 'Ver Backend'}
                        </a>
                        {frontend && (
                            <>

                                <a

                                    className="flex gap-2 py-2 px-4 rounded-md border  hover:border-slate-900 transition-colors duration-200
                                text-slate-600 border-slate-300 hover:text-slate-900 items-center justify-center
                                "
                                    href={frontend}
                                    target='_blank'
                                >
                                    <Code
                                        className='inline w-4 h-4' />
                                    Ver Frontend
                                </a>

                            </>

                        )}

                    </div>
                </div>

                <div
                    className={
                        `w-full rounded-xl overflow-hidden border aspect-16/10 border-slate-200 bg-slate-100 ${posicion % 2 === 0 ? "md:order-2" : "md:order-1"}
                `}
                >
                    <ProjectSlider images={images} />
                </div>





            </div >

        </>
    )
}

export default WorkCard