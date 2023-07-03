import { Link } from "react-router-dom"

export function Header (){
    return(
        <header>
            <div className="flex justify-between bg-neutral-900 p-2 mb-3">
            <Link to="/">
                <h1 className="p-1 text-xl">UPIICSA-DEV</h1>
            </Link>
            <div className="flex place-items-end">
            <a className=" bg-stone-400 rounded-xl p-1 px-3 text-xl mx-3" href="#">Registrarse</a>
            <a className=" bg-red-900 rounded-xl p-1 px-3 text-xl" href="#">Iniciar sesión</a>
            </div>
            </div>
            <nav className="flex justify-between bg-neutral-900 p-2 mb-3">
                <Link className="hover:text-red-700 text-xl hover:underline hover:underline-offset-4 p-1" to="/">Comprar</Link>
                <Link className="hover:text-red-700 text-xl hover:underline hover:underline-offset-4 p-1" to="/prestamos">Busquedas</Link>
                <Link className="hover:text-red-700 text-xl hover:underline hover:underline-offset-4 p-1" to="/debate">Debate</Link>
                <Link className="hover:text-red-700 text-xl hover:underline hover:underline-offset-4 p-1" to="/blogs">Blogs</Link>
                <Link className="hover:text-red-700 text-xl hover:underline hover:underline-offset-4 p-1" to="/profesores">Profesores</Link>
            </nav>
        </header>
    )
}