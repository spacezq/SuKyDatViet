fetch('products.json')
    .then(response => response.json())
    .then(data => {
        const productList = document.getElementById('productList');
        const filterCategory = document.getElementById('filterCategory');
        const filterPrice = document.getElementById('filterPrice');

        function renderProducts(products) {
            productList.innerHTML = products.map(product => `
                <div class="bg-gray-800 p-4 rounded shadow">
                    <img src="${product.image}" alt="${product.name}" class="w-full h-40 object-cover rounded mb-4">
                    <h3 class="text-lg font-bold text-orange-400">${product.name}</h3>
                    <p class="text-sm text-gray-400">${product.description}</p>
                    <p class="text-lg font-bold text-green-400">${product.price} VNĐ</p>
                    <button class="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 mt-4"
                            onclick="addToCart('${product.id}')">
                        Thêm vào giỏ hàng
                    </button>
                </div>
            `).join('');
        }

        function filterProducts() {
            let filtered = data;
            if (filterCategory.value) {
                filtered = filtered.filter(p => p.category === filterCategory.value);
            }
            if (filterPrice.value === 'low') {
                filtered = filtered.filter(p => parseFloat(p.price.replace(/,/g, '')) < 200000);
            } else if (filterPrice.value === 'mid') {
                filtered = filtered.filter(p => parseFloat(p.price.replace(/,/g, '')) >= 200000 && parseFloat(p.price.replace(/,/g, '')) <= 500000);
            } else if (filterPrice.value === 'high') {
                filtered = filtered.filter(p => parseFloat(p.price.replace(/,/g, '')) > 500000);
            }
            renderProducts(filtered);
        }

        renderProducts(data);

        filterCategory.addEventListener('change', filterProducts);
        filterPrice.addEventListener('change', filterProducts);
    });
