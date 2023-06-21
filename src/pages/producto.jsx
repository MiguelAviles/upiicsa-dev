import { Carousel } from "../components/carrusel"
import { Link } from "react-router-dom"

export function Producto () {
    return (
        <main>
            <div className="grid grid-cols-2 gap-5">
            <section className=" bg-neutral-700 rounded-sm  ">
                <h1 className=" text-2xl text-center">Productos a la venta</h1>
                <br />
                <ul className=" gap-5">
                    <li className=" mb-5">
                        <strong>
                            Gomitas
                        </strong>
                    </li>
                    <li className=" mb-5">
                        <strong>
                            Pulparindos
                        </strong>
                    </li>
                    <li className=" mb-5">
                        <strong>
                            Paletas
                        </strong>   
                    </li>
                    <li className=" mb-5">
                        <strong>
                            Gelatinas
                        </strong>
                    </li>
                </ul>
            </section>
            <section>
                <Carousel/>
            </section>
  
            </div>
            <div className=" flex text-xl my-8 flex-row justify-between px-8">
            <Link to="/">Volver</Link>
            <Link className=" text-emerald-500">Contactar con vendedor</Link>
            </div>
        </main>
    )
}