import React, { useState, useEffect } from 'react'
import { X, ArrowRight, ArrowLeft } from 'lucide-react';

const ImageModal = ({ currentIndex, onClose, galery, onNext, onPrev }) => {

  //existe 2 mundos, el render (el jsx que regresas)
  useEffect(() => {
    //cuando inicia el componente, usa un effecto, tocar el DOM. hacer fetch, modificar cosas externas
    document.body.classList.add('overflow-hidden');
    //escucha por un scape
    function keyFunction(e){
      if(e.key==='Escape'){
        onClose();
        return;
      }
      if(e.key==='ArrowRight'){
        onNext();
        return;
      }
      if(e.key==='ArrowLeft'){
        onPrev();
        return;
      }


    }
    //cerrarModal al precionar una tecla
    window.addEventListener('keydown', keyFunction);
  
    return () => { //cuando muera el componente, o se desmonta: cleanup corre →
      document.body.classList.remove('overflow-hidden');
      window.removeEventListener('keydown', keyFunction);
    }
  }, [onClose, onNext, onPrev]);




  
  
  
  return (
    //fondo overlay
    <div className={`bg-black/70 backdrop-blur-md fixed inset-0  
    p-15 flex justify-center h-full items-center hover:cursor-pointer`}

      onClick={onClose}

    >


      {/* <!--contenedor --> */}
      <div
        className="relative max-w-[85%] hover:cursor-auto "
        onClick={(e) => e.stopPropagation()}

      >
        <div className="bg-white/85 backdrop-blur-md rounded-md w-9 hover:cursor-pointer p-1 absolute -right-8 -top-10  md:-top-12 drop-shadow-xl hover:bg-white/90">
          <X className='text-slate-600 w-full h-full  hover:text-slate-800'
            onClick={onClose}
          />
        </div>
        <div className="bg-white/85 backdrop-blur-md rounded-md w-12 hover:cursor-pointer  absolute bottom-[50%] -right-20 drop-shadow-xl hover:bg-white/90">
          <ArrowRight className='text-slate-600 w-full h-full  hover:text-slate-800'
            onClick={onNext}
          />
        </div>
        <div className="bg-white/85 backdrop-blur-md rounded-md w-12 hover:cursor-pointer  absolute -left-20 bottom-[50%] md:-right-10 drop-shadow-xl hover:bg-white/90">
          <ArrowLeft className='text-slate-600 w-full h-full  hover:text-slate-800'
            onClick={onPrev}
          />
        </div>

        <img
          src={galery[currentIndex]}
          alt="imagen-proyect"
          className='max-h-[90vh] max-w-full '
        />

      </div>

    </div>
  );
}

export default ImageModal