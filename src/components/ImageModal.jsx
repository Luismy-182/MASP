import React from 'react'
import { X } from 'lucide-react';

const ImageModal = ({ imagen }) => {
  console.log('mostrando modal..');

  return (
    //fondo
    <div className='bg-black/70 fixed inset-0 '>
      {/* <!--contenedor --> */}
      <div className="flex items-center justify-center p-12 relative">
        <div className="bg-white rounded-4xl absolute right-3 top-3 w-8">
          <X  className='text-red-700 h-8 w-8 '/>
        </div>
        <img
          src={imagen}
          alt="imagen-proyect"
          className='w-full h-full object-cover'
        />
      </div>

    </div>
  );
}

export default ImageModal