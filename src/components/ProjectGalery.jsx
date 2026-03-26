import ImageModal from './ImageModal'
import { useState } from 'react';

const ProjectGalery = ({ galery }) => {
    //state para saber que imagen picaron
    const [currentIndex, setCurrentIndex] = useState(null);
console.log(currentIndex);

    
    return (

        <>
            {currentIndex!==null && (
                <ImageModal
                    currentIndex={currentIndex}
                    galery={galery}
                    onClose={() => setCurrentIndex(null)}
                  
                    onNext={()=>setCurrentIndex(currentIndex+1)}
                    onPrev={()=>setCurrentIndex(currentIndex-1)}
                />
            )}
            <section className="my-24 md:my-32">
                <div className="max-w-6xl mx-auto">
                    <h2 className='text-slate-800 font-bold text-2xl md:text-4xl text-center'>Galería del producto</h2>
                    <div className="grid md:grid-cols-2 gap-12 rounded-xl mt-24 md:mt-32 px-6 md:px-0">
                        {
                            galery.map((picture, index) => {
                                
                                
                                return (

                                    <div key={index} className="shadow-sm hover:shadow-lg hover:cursor-pointer  w-full border border-slate-200 bg-white hover:scale-105 transition-all duration-300 overflow-hidden
                                    h-62.5 md:h-75 group
                                "
                                        onClick={()=> {
                                            return setCurrentIndex(index);
                                        }}
                                    >
                                        <img src={picture} alt={`preview-${index}`} className='w-full object-contain bg-slate-100 h-full group-hover:scale-110 transition-transform duration-300'
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