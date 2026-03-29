import { useParams } from "react-router-dom";
import { listaProyectos } from '../helpers/projectData';
import { Link } from 'react-router-dom';
import { tagColors } from "../helpers/tagColors";
import ProjectGalery from "../components/ProjectGalery";
import {
    ShoppingCart,
    ShieldCheck,
    LayoutDashboard,
    RefreshCw,
    Brain,
    Smartphone,
    Code
} from "lucide-react";

const ProjectDetail = () => {
    //leyendo los parametros de la url
    const params = useParams();
    const { id } = params;


    //colores para los tags


    //iconos para features
    const iconFeatures = {
        "shopping-cart": ShoppingCart,
        "shield-check": ShieldCheck,
        "layout-dashboard": LayoutDashboard,
        "refresh-cw": RefreshCw,
        "brain": Brain,
        "smartphone": Smartphone
    };




    //recorriendo la lista
    const proyecto = listaProyectos.find(project => project.id === id);

    if (!proyecto) {

        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
                <h1 className="text-3xl font-bold text-slate-900 mb-4">
                    Proyecto no encontrado
                </h1>

                <p className="text-slate-600 mb-6">
                    El proyecto que buscas no existe o la URL es incorrecta.
                </p>

                <Link
                    to="/"
                    className="px-6 py-2 bg-slate-800 text-white rounded-md hover:bg-slate-900 transition-colors"
                >
                    Volver al portafolio
                </Link>
            </div>
        );
    }

    const { title, heroTitle, subtitle, tags, heroImage, description, longDescription, images, backend, frontend, trouble, context, impact, solution, results, features } = proyecto;






    //buscar en la lista de proyectos con el ID

    return (
        <>
            <section>
                <div className="mx-auto bg-white">

                    <div className="md:flex justify-between lg:items-center gap-8 px-6 lg:px-24  py-12 lg:py-32 items-center w-full min-h-[calc(100vh-6rem)]">
                        <div className="md:w-[35%] pb-12">

                            <h2 className="max-w-xl text-4xl md:text-5xl  font-bold tracking-tight leading-[1.1] text-slate-900 lg:translate-y-4">{heroTitle}</h2>
                            <p className="mt-4 md:mt-5 text-lg md:text-xl leading-relaxed text-slate-600 max-w-xl">{subtitle}</p>
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
                            <div className="flex gap-3 mt-8 ">
                                <div className="text-base">

                                    <a
                                        className="flex gap-2 py-2 px-3 md:px-6 rounded-md bg-slate-800 text-white items-center font-bold hover:bg-slate-900 transition-colors duration-200"
                                        href={backend}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Code className="w-4 h-4" />
                                        {!frontend ? 'Ver código fuente' : 'Ver backend'}
                                    </a>
                                </div>

                                {frontend && (
                                    <div className="text-base">

                                        <a
                                            className="flex gap-2 py-2 px-3 md:px-6 rounded-md border border-slate-300 text-slate-600 items-center hover:border-slate-900 hover:text-slate-900 transition-colors duration-200"
                                            href={frontend}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Code className="w-4 h-4" />
                                            Ver frontend
                                        </a>
                                    </div>
                                )}

                            </div>

                        </div>

                        <div className="md:w-[65%]  justify-center lg:justify-center rounded-xl">
                            <img
                                className="w-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] lg:translate-x-16"
                                src={heroImage}
                                alt={`imagen - ${id}`}
                            />
                        </div>
                    </div>
                </div>
            </section>


            <section className="">
                <div className="py-24 md:py-28">

                    <h2
                        className="text-2xl md:text-4xl text-center font-bold text-slate-700 tracking-tight leading-[1.1]"
                    >
                        Problema y contexto
                    </h2>

                    <p className="text-xl text-slate-600 text-center mt-6 px-6">Análisis del problema real y el contexto operativo del sistema</p>
                </div>
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">


                    <div className="p-6 bg-white shadow-sm hover:shadow-lg rounded-xl">
                        <h3 className="text-xl md:text-2xl  font-bold tracking-tight leading-[1.1] text-slate-900  text-center py-3">
                            Problema
                        </h3>

                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                            {trouble}
                        </p>
                    </div>


                    <div className="  p-6 bg-white shadow-sm hover:shadow-lg rounded-xl">
                        <h3 className="text-xl md:text-2xl  font-bold tracking-tight leading-[1.1] text-slate-900  text-center py-3">
                            Contexto
                        </h3>

                        <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                            {context}
                        </p>
                    </div>


                    <div className="  p-6 bg-white shadow-sm hover:shadow-lg rounded-xl">
                        <h3 className="text-xl md:text-2xl font-bold tracking-tight leading-[1.1] text-slate-900  text-center py-3">
                            Impacto
                        </h3>

                        <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                            Antes de implementar una solución digital:</p>
                        <ul className="pl-5 list-disc">
                            {impact.map((impacts, index) => {
                                return (
                                    <li className="text-slate-600" key={index}>{impacts}</li>)

                            })}
                        </ul>

                    </div>


                </div>
            </section>

            <section className="my-24 md:my-32 bg-white  py-24 ">
                <div className="mx-auto  px-6   max-w-4xl  ">
                    <h2 className="text-4xl text-center text-slate-800 font-bold ">Solución</h2>

                    <div className=" bg-slate-50  px-5  rounded-lg mt-12 md:mt-14">
                        <div className="border-l-4 border-slate-400 py-4">

                            {
                                solution.map((solucion, index) => {
                                    return (
                                        <p className="text-slate-600 ml-5 leading-relaxed mt-5 text-md md:text-xl pb-6 border-b-2  border-slate-200 last:border-none " key={index}>{solucion}</p>
                                    )
                                })
                            }
                        </div>
                    </div>

                </div>

                <div className="mx-auto py-12 px-6 mt-12 max-w-4xl border-t-2 border-slate-200">
                    <h2 className="text-4xl text-center text-slate-800 font-bold">Resultados</h2>

                    <div className="bg-slate-50 rounded-lg mt-12 md:mt-14 py-8 ">

                        <ul className="pl-5 space-y-10">

                            {
                                results.map((result, index) => {

                                    return (

                                        <li key={index} className="text-slate-600 ml-5 leading-relaxed text-md md:text-xl  flex items-start gap-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 bg-green-500 rounded-[100%] text-white">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                            </svg>
                                            {result}</li>

                                    )
                                })
                            }
                        </ul>

                    </div>


                </div>
            </section>


            <section className="my-24 md:my-32">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-2xl md:text-4xl text-center text-slate-800 font-bold uppercase">Capacidades del sistema</h2>
                    <p className="text-xl md:text-2xl text-slate-600 text-center mt-6">Funcionalidades principales del sistema</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24 md:mt-32  md:px-0">
                        {
                            features.map((feature, index) => {
                                const Icon = iconFeatures[feature.icon] || Code;
                                const { title, description } = feature;
                                return (
                                    /*Targeta */
                                    <div className="bg-white rounded-xl shadow-sm hover:-translate-y-1
                                    transition-all duration-200 p-6 flex flex-col gap-3"
                                        key={index}>
                                        <div className="flex justify-center rounded-xl">
                                            {
                                                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-slate-100 mb-4">
                                                    <Icon className="w-6 h-6 text-slate-700" />
                                                </div>

                                            }
                                        </div>

                                        <div className="">
                                            <h3 className="font-semibold text-xl text-slate-900 mb-2">{title}</h3>

                                        </div>

                                        <div className="">
                                            <p className="text-slate-600 text-base leading-relaxed">{description}</p>
                                        </div>
                                    </div>
                                )

                            })

                        }
                    </div >

                </div>
            </section>
            <ProjectGalery galery={images} />
        </>
    )
}

export default ProjectDetail