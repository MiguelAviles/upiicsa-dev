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
                    <li className=" mb-5 flex justify-between mx-6">
                        <strong>
                            Gomitas
                        </strong>
                        <strong>
                            $5
                        </strong>
                    </li>
                    <li className=" mb-5 flex justify-between mx-6">
                        <strong>
                            Pulparindos
                        </strong>
                        <strong>
                            $5
                        </strong>
                    </li>
                    <li className=" mb-5 flex justify-between mx-6">
                        <strong>
                            Paletas
                        </strong> 
                        <strong>
                            $5
                        </strong>  
                    </li>
                    <li className=" mb-5 flex justify-between mx-6">
                        <strong>
                            Gelatinas
                        </strong>
                        <strong>
                            $5
                        </strong>
                    </li>
                    <li className=" mb-5 flex justify-between mx-6">
                        <strong>
                            Chicles
                        </strong>
                        <strong>
                            $5
                        </strong>
                    </li>
                    <li className=" mb-5 flex justify-between mx-6">
                        <strong>
                            Helado
                        </strong>
                        <strong>
                            $5
                        </strong>
                    </li>
                </ul>
            </section>
            <section>
                <Carousel/>
            </section>
  
            </div>
            <div className="text-xl my-8 px-8">
            <a href="https://wa.me/5524367193?text=Hola,%20que%20productos%20vas%20a%20llevar" className=" text-emerald-500"> Contactar con vendedor</a>
            <Link className="flex justify-end" to="/">Volver</Link>         
            </div>
        </main>
    )
}