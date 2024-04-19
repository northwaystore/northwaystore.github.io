const marcasPorCategorias = {
    procesadores: ["Intel", "AMD"],
    'tarjetas-graficas': ["Nvidia", "AMD"],
    'memorias-ram': ["Corsair", "Kingston", "Crucial"],
    // Agrega más categorías y marcas según necesites
};

const categoriasDropdown = document.getElementById('categorias');
const marcaProcesadorDropdown = document.getElementById('marca-procesador');

categoriasDropdown.addEventListener('change', (event) => {
    const selectedCategory = event.target.value;
    marcaProcesadorDropdown.innerHTML = ''; // Limpiar el menú de marcas

    if (selectedCategory) {
        const marcas = marcasPorCategorias[selectedCategory];
        marcas.forEach((marca) => {
            const option = document.createElement('option');
            option.textContent = marca;
            option.value = marca;
            marcaProcesadorDropdown.appendChild(option);
        });
    } else {
        const option = document.createElement('option');
        option.textContent = 'Selecciona la marca deseada';
        marcaProcesadorDropdown.appendChild(option);
    }
});