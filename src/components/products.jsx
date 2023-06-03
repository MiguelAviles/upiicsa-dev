import './Products.css'

export function Products ({products}) {
    return(
        <main className='products'>
            <ul>
                {products.map (product => (
                    <li key={product.id} >
                        <div>
                            <strong>{product.title}</strong>
                        </div>
                        <img src={product.thumbnail} 
                        alt={product.title} 
                        />
                        <div>
                            <p>
                                {product.description}
                            </p>
                        </div>
                        <div>
                            <a href="">Ver productos</a>
                        </div>
                    </li>
                ))}
            </ul>
        </main>    
    )
}

