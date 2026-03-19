import { useParams } from "react-router-dom";
import { listaProyectos } from '../helpers/projectData';
import { Link } from "react-router-dom";
const ProjectDetail = () => {
    //leyendo los parametros de la url
    const params = useParams();
    const { id } = params;
    const mensaje = 'No existe este proyecto';




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

    const { title, description, longDescription, tags, images, backend, frontend } = proyecto;



    //buscar en la lista de proyectos con el ID

    return (
        <>
            <p>presentando el proyecto....</p>
        </>
    )
}

export default ProjectDetail