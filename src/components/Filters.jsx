export function Filters () {
    return (
        <section className="filters flex justify-between items-center mb-3 my-3">
            <div className="flex gap-2">
                <label htmlFor="category">Categoría</label>
                <select id="category">
                    <option value="all">Todas</option>
                    <option value="lap">Laptops</option>
                    <option value="smartphone">Celulares</option>
                </select>
            </div>

        </section>
    )
}