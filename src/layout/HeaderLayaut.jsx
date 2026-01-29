import { Outlet, Link } from "react-router-dom";
function HeaderLayaut() {

    return (
        <>
            <div className="container mx-auto">
                <div className="flex justify-between">
                    <div className="p-5">
                        <Link className="text-slate-900 text-3xl" to="/">MASP</Link>
                    </div>
                    <div className="">
                        <nav className="">
                            <ul className="flex justify-between gap-6 p-5">
                                <li>
                                    <Link to="/portafolio">Portafolio</Link>
                                </li>
                                <li>
                                    <Link to="/informacion">Sobre Mí</Link>
                                </li>
                                <li>
                                    <Link to="/habilidades">Habilidades</Link>
                                </li>
                                <li>
                                    <Link to="/experiencia">Experiencia</Link>
                                </li>
                                <li>
                                    <Link to="/contacto">Contacto</Link>
                                </li>

                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default HeaderLayaut