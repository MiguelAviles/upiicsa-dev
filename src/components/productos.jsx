import { Link } from "react-router-dom";

export function Products ({products}) {
    return(
        <main className='flex justify-center items-center'>
            <ul className="grid grid-cols-3 gap-4">
                {products.map (product => (
                    <li 
                    className="flex flex-col gap-2 shadow-slate-950 bg-stone-950 rounded text-white" 
                    key={product.id} 
                    >
                        <div className=" m-0 my-2 mb-1 text-2xl">
                            <strong>
                                {product.title}
                            </strong>
                        </div>
                        <Link to="producto">
                            <img className="rounded-md w-full block object-cover aspect-video bg-white" 
                            src={product.thumbnail} 
                            alt={product.title} 
                            />
                            <div className="opacity-90 mb-2">
                                <p>
                                    {product.description}
                                </p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </main>    
    )
}