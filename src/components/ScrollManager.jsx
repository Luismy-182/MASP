import React from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const ScrollManager = () => {

    const link = useLocation();

    useEffect(() => {
        //si existe una url y no tiene un hash de contenido entonces

        if (link.pathname && !link.hash) {
            //restablecer scroll a cero
            window.scrollTo(0, 0);
        }

        //siempre va a escuchar la url completa para comportarse
    }, [link.pathname]);


    return (
        <>
        </>
    );

}

export default ScrollManager