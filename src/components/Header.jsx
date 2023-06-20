export function Header (){
    return(
        <header>
            <div className="flex justify-between bg-neutral-900 p-3 mb-3">
            <h1>UPIICSA-DEV</h1>
            <a href="#">Iniciar sesión</a>
            </div>
            <div className="flex justify-between bg-neutral-900 p-2 mb-3">
                <a href="#">Comprar</a>
                <a href="#">Prestamos</a>
                <a href="#">Debate</a>
                <a href="#">Profesores</a>
            </div>
        </header>
    )
}