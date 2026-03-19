import { useParams } from "react-router-dom";
import { apv, devJobs, freshCoffee } from "../helpers/projectData";

const ProjectDetail = () => {
    //leyendo los parametros de la url
    const params = useParams();
    const { id } = params;
    console.log(id);

    //buscar en la lista de proyectos con el ID

    return (
        <>

        </>
    )
}

export default ProjectDetail