import AboutMe from "../components/AboutMe"
import ArchitectureSection from "../components/ArchitectureSection"
import CTA from "../components/CTA"
import Hero from "../components/Hero"
import SelectWork from "../components/SelectWork"


function MASP() {
  return (
    <>
    <Hero id="inicio" />
    <ArchitectureSection id="arquitectura" />
    <SelectWork id="proyectos"/>
    <AboutMe id="sobre-mi" />
    <CTA id="contacto" />

    </>
  )
}

export default MASP