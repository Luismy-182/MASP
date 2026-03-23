import ImageModal from './ImageModal'
import { useState } from 'react';

const ProjectGalery = ({ galery }) => {
    //state para saber que imagen picaron
    const [selectedImage, setSelectedImage] = useState(null);





    return (

        <>
            {selectedImage && (
                <ImageModal
                    imagen={selectedImage}
                    onClose={() => setSelectedImage(null)}
                />
            )}
            <section className="my-24 md:my-32">
                <div className="max-w-6xl mx-auto">
                    <h2 className='text-slate-800 font-bold text-2xl md:text-4xl text-center'>Galería del producto</h2>
                    <div className="grid md:grid-cols-2 gap-12 rounded-xl mt-24 md:mt-32 ">
                        {
                            galery.map((picture, index) => {
                                return (
                                    <div key={index} className="shadow-sm hover:shadow-lg hover:cursor-pointer  w-full border border-slate-200 bg-white hover:scale-105 transition-all duration-300 overflow-hidden
                                    h-62.5 md:h-75
                                "
                                        onClick={e => {
                                            return setSelectedImage(picture);
                                        }}
                                    >
                                        <img src={picture} alt={`preview-${index}`} className='w-full object-contain bg-slate-100 h-full'

                                        />

                                    </div>

                                )
                            }
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProjectGalery