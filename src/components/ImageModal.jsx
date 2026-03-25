import React, { useState, useEffect } from 'react'
import { X } from 'lucide-react';


const ImageModal = ({ imagen, onClose }) => {
  useEffect(() => {
    
    document.body.classList.add('overflow-hidden');
    //escucha por un scape
    function btnClose(e){
      
      if(e.key==='Escape'){
        onClose();
      }
    }
    window.addEventListener('keydown', btnClose);
  
    return () => {
      document.body.classList.remove('overflow-hidden');
      window.removeEventListener('keydown', btnClose);
    }
  }, [])


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
        <div className="bg-white/85 backdrop-blur-md rounded-md w-7 hover:cursor-pointer p-1 absolute right-0 -top-9  drop-shadow-xl hover:bg-white/90">
          <X className='text-slate-600 w-full h-full  hover:text-slate-800'
            onClick={onClose}
          />
        </div>

        <img
          src={imagen}
          alt="imagen-proyect"
          className='max-h-[90vh] max-w-full '
        />

      </div>

    </div>
  );
}

export default ImageModal