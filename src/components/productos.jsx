export function Products ({products}) {
    return(
        <main className='flex justify-center items-center'>
            <ul className="grid grid-cols-3 gap-4">
                {products.map (product => (
                    <li className="flex flex-col gap-2 shadow-slate-950 bg-stone-950 rounded text-white" key={product.id} >
                        <div className="m-0 mb-1">
                            <strong>{product.title}</strong>
                        </div>
                        <img className="rounded-md w-full block object-cover aspect-video bg-white" src={product.thumbnail} 
                        alt={product.title} 
                        />
                        <div className="opacity-90">
                            <p>
                                {product.description}
                            </p>
                        </div>
                        <div>
                            <a href="producto.jsx">Ver productos</a>
                        </div>
                    </li>
                ))}
            </ul>
        </main>    
    )
}

