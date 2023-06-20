export function Filters () {
    return (
        <section className="filters flex justify-between mb-3 items-center">
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