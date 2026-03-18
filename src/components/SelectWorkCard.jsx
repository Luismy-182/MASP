import {apv, devJobs, freshCoffee} from '../helpers/projectData.js';
import React from 'react'
import { Link } from 'react-router-dom'
import { File, Code } from 'lucide-react'
import ProjectSlider from './ProjectSlider'
import WorkCard from './WorkCard'

const SelectWorkCard = () => {
  const projects = [freshCoffee,apv,devJobs];



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