import React, { useState, useEffect } from 'react'
import { X, ArrowRight, ArrowLeft } from 'lucide-react';



const ImageModal = ({ currentIndex, onClose, galery, onNext, onPrev }) => {
  //existe 2 mundos, el render (el jsx que regresas)


  useEffect(() => {
    //montando el modal con animacion

    setIsVisible(true);

    //cuando inicia el componente, usa un effecto, tocar el DOM. hacer fetch, modificar cosas externas
    document.body.classList.add('overflow-hidden');
    //escucha por un scape
    function keyFunction(e) {
      

      if (e.key === 'Escape') {
        handleCerrarModal();
        return;
      }
      if (e.key === 'ArrowRight') {
        handleSiguienteImg();
        return;
      }
      if (e.key === 'ArrowLeft') {
        handleAnteriorImg();
        return;
      }
    }
    //cerrarModal al precionar una tecla
    window.addEventListener('keydown', keyFunction);

    return () => { //cuando muera el componente, o se desmonta: cleanup corre →
      document.body.classList.remove('overflow-hidden');
      window.removeEventListener('keydown', keyFunction);
    }
  }, []);


  //estado mientras abre o cierran el visualizador
  const [isVisible, setIsVisible] = useState(false);
  //estados transición entre imagenes
  const [visible, setVisible] = useState(true);
  //estado, para que si ya esta animando no cliquen de más
  const [animating, setAnimating] = useState(false);

  console.log('el estado es visible? :', visible);

  function handleSiguienteImg() {
    if (animating) {
      return;
    }
    setVisible(false)
    setAnimating(true);
    setTimeout(() => {
      onNext();
      setVisible(true);
      setAnimating(false);
    }, 200);



  }

  function handleAnteriorImg() {
    if (animating) {
      return;
    }
    setVisible(false)
    setAnimating(true);
    setTimeout(() => {
      onPrev(),
        setVisible(true);
      setAnimating(false);
    }, 200);

  }


  function handleCerrarModal() {

    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 200);
  }
  return (
    //fondo overlay
    <div className={`bg-black/70 backdrop-blur-md fixed inset-0  z-50
    md:p-12  flex justify-center h-full items-center hover:cursor-pointer 
    ${isVisible ? 'opacity-100 scale-100 ' : 'opacity-0  scale-105'}
     ease-in-out transition-opacity  duration-200
    `}

      onClick={() => handleCerrarModal()}

    >


      {/* <!--contenedor --> */}
      <div
        className={`relative max-w-[85%] hover:cursor-auto md:max-w-[75%] ${isVisible ? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-95'}
     ease-in-out transition-all  duration-200`}
        onClick={(e) => e.stopPropagation()}

      >

        <div className="bg-white/85 backdrop-blur-md rounded-md w-12 md:w-10 hover:cursor-pointer absolute -bottom-30  md:bottom-auto left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:-right-8 md:-top-12 drop-shadow-xl hover:bg-white/90">
          <X className='text-slate-600 w-full h-full  hover:text-slate-800'
            onClick={() => handleCerrarModal()}
          />
        </div>
        <div className="bg-white/85 backdrop-blur-md rounded-md w-12 hover:cursor-pointer  absolute -bottom-30 md:bottom-[50%]  md:-right-20 right-0 drop-shadow-xl hover:bg-white/90">
          <ArrowRight className='text-slate-600 w-full h-full  hover:text-slate-800'
            onClick={() => handleSiguienteImg()}
          />
        </div>
        <div className="bg-white/85 backdrop-blur-md rounded-md w-12 hover:cursor-pointer  absolute -bottom-30  left-0 md:-left-20 md:bottom-[50%] drop-shadow-xl hover:bg-white/90">
          <ArrowLeft className='text-slate-600 w-full h-full  hover:text-slate-800'
            onClick={() => handleAnteriorImg()}
          />
        </div>

        <img
          src={galery[currentIndex]}
          alt="imagen-proyect"
          className={`max-h-[90vh] max-w-full ${visible ? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-90'} ease-in-out transition-all  duration-150`}
        />

      </div>

    </div>
  );
}

export default ImageModal