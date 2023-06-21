export function Header (){
    return(
        <header>
            <div className="flex justify-between bg-neutral-900 p-2 mb-3">
            <h1 className="p-1 text-xl">UPIICSA-DEV</h1>
            <a className=" bg-red-900 rounded-xl p-1 px-3 text-xl" href="#">Iniciar sesión</a>
            </div>
            <div className="flex justify-between bg-neutral-900 p-2 mb-3">
                <a className="hover:text-red-700 text-xl hover:underline hover:underline-offset-4 p-1" href="#">Comprar</a>
                <a className="hover:text-red-700 text-xl hover:underline hover:underline-offset-4 p-1" href="#">Prestamos</a>
                <a className="hover:text-red-700 text-xl hover:underline hover:underline-offset-4 p-1" href="#">Debate</a>
                <a className="hover:text-red-700 text-xl hover:underline hover:underline-offset-4 p-1" href="#">Profesores</a>
            </div>
        </header>
    )
}