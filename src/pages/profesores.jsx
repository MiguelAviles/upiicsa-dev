import { Publicacion } from "../components/publicacion"

export function Profesores (){
    return (
        <main className="flex flex-row gap-4 my-7">
            <section className="basis-3/4 container mx-auto px-8">
                <h3 className="text-xl font-semibold mb-3">Jesus Silva Montañez</h3>
                <Publicacion/>
            </section>
            <nav className=" basis-1/4 mx-8">
            <h3 className="font-semibold">Mejores calificados</h3>
                <div className="flex justify-between">
                <p>nombre</p>
                <p>calificacion</p>
                </div>
                <div className="flex justify-between">
                <a href="#">Jesus Silva Montañez</a>
                <p>8.5</p>
                </div>
                <h3 className="font-semibold">Peores calificados</h3>
                <div className="flex justify-between">
                <p>nombre</p>
                <p>calificacion</p>
                </div>
                <div className="flex justify-between">
                <a href="#">Maria Rivera De La Cruz</a>
                <p>3.5</p>
                </div>
                
            </nav>
        </main>
    )
}