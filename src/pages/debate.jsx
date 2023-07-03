import { LoMasVisto } from "../components/loMasVisto.jsx"
import { Publicacion } from "../components/publicacion.jsx"

export function Debate (){
    return (
        <main className="flex flex-row gap-4 my-7">
            <section className="basis-3/4 container mx-auto px-8">
  
                <div className="flex items-start my-4">
                <button className="bg-red-800">Abrir debate</button>
                </div>
                <div className="bg-stone-900">
                    <nav className=" flex justify-between my-4">
                        <a href="">categoria 1</a>
                        <a href="">categoria 2</a>
                        <a href="">categoria 3</a>
                        <a href="">categoria 4</a>
                        <a href="">categoria 5</a>
                    </nav>
                </div>
                <Publicacion/>
            </section>
            <nav className=" basis-1/4 mx-8">
                <LoMasVisto/>
            </nav>
        </main>
    )
}