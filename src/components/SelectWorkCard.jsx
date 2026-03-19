import { listaProyectos } from '../helpers/projectData'
import WorkCard from './WorkCard'

const SelectWorkCard = () => {
  const projects = listaProyectos;



  return (
    <>
      <div className="mt-20 md:mt-28">
        {
          projects.map((project, index) => <WorkCard proyecto={project} key={project.id} posicion={index}/>)
        }
      </div>

    </>
  )
}

export default SelectWorkCard