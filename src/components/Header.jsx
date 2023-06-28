import { Link } from "react-router-dom"

export function Header (){
    return(
        <header>
            <div className="flex justify-between bg-neutral-900 p-2 mb-3">
            <h1 className="p-1 text-xl">UPIICSA-DEV</h1>
            <div className="flex place-items-end">
            <a className=" bg-stone-400 rounded-xl p-1 px-3 text-xl mx-3" href="#">Registrarse</a>
            <a className=" bg-red-900 rounded-xl p-1 px-3 text-xl" href="#">Iniciar sesión</a>
            </div>
            </div>
            <div className="flex justify-between bg-neutral-900 p-2 mb-3">
                <Link className="hover:text-red-700 text-xl hover:underline hover:underline-offset-4 p-1" to="/">Comprar</Link>
                <Link className="hover:text-red-700 text-xl hover:underline hover:underline-offset-4 p-1" to="/prestamos">Busquedas</Link>
                <a className="hover:text-red-700 text-xl hover:underline hover:underline-offset-4 p-1" href="#">Debate</a>
                <a className="hover:text-red-700 text-xl hover:underline hover:underline-offset-4 p-1" href="#">Noticias</a>
                <a className="hover:text-red-700 text-xl hover:underline hover:underline-offset-4 p-1" href="#">Profesores</a>
            </div>
        </header>
    )
}