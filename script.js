// Tailwind Configuration
tailwind.config = {
    darkMode: 'class',
};

// Global State and Constants
window.history.pushState(null, '', location.href);
window.onpopstate = function () {
    window.history.pushState(null, '', location.href);
    if (selectedProducts.length > 0) {
        showModal(warningModal);
    }
};

const productListEl = document.getElementById('productList');
const searchInput = document.getElementById('searchInput');
const filterSelectedBtn = document.getElementById('filterSelectedBtn');
const filterPanesBtn = document.getElementById('filterPanesBtn');
const filterPolarBtn = document.getElementById('filterPolarBtn');
const directOrderBtn = document.getElementById('directOrderBtn');
const filterButtonsContainer = document.getElementById('filterButtonsContainer');
const companyFiltersContainer = document.getElementById('companyFiltersContainer');
const selectedProductsContainer = document.getElementById('selectedProductsContainer');
const selectedProductsList = document.getElementById('selectedProductsList');

// Pre-procesar productos para la búsqueda de "Pedido Directo"
const directOrderProducts = [];
Object.keys(companyProductMapping).forEach(company => {
    const productNames = companyProductMapping[company];
    productNames.forEach(name => {
        const product = processedProducts.find(p => p.name === name);
        if (product) {
            if (!directOrderProducts.some(p => p.id === product.id)) {
                directOrderProducts.push({ ...product, company: company });
            }
        }
    });
});

let selectedProducts = [];
const calculatorModal = document.getElementById('calculatorModal');
const modalProductName = document.getElementById('modalProductName');
const calculatorDisplay = document.getElementById('calculatorDisplay');
const closeModalBtn = document.getElementById('closeModalBtn');
const exportExcelBtn = document.getElementById('exportExcelBtn');
const downloadImageBtn = document.getElementById('downloadImageBtn');
const shareBtn = document.getElementById('shareBtn');
const exportDirectOrderBtn = document.getElementById('exportDirectOrderBtn');
const mainCloseBtn = document.getElementById('mainCloseBtn');
const warningModal = document.getElementById('warningModal');
const cancelExitBtn = document.getElementById('cancelExitBtn');
const confirmExitBtn = document.getElementById('confirmExitBtn');
const warningTitle = document.getElementById('warningTitle');
const warningMessage = document.getElementById('warningMessage');
const topRightButtons = document.getElementById('topRightButtons');

// Modal de vista previa
const previewModal = document.getElementById('previewModal');
const previewImage = document.getElementById('previewImage');
const closePreviewBtn = document.getElementById('closePreviewBtn');
const downloadPreviewBtn = document.getElementById('downloadPreviewBtn');
const downloadPreviewIconBtn = document.getElementById('downloadPreviewIconBtn');

// Modal de ayuda
const helpBtn = document.getElementById('helpBtn');
const helpModal = document.getElementById('helpModal');
const closeHelpModalBtn = document.getElementById('closeHelpModalBtn');

// Elementos del modal de responsables
const addResponsablesBtn = document.getElementById('addResponsablesBtn');
const responsablesModal = document.getElementById('responsablesModal');
const responsable1Input = document.getElementById('responsable1Input');
const responsable2Input = document.getElementById('responsable2Input');
const cancelResponsablesBtn = document.getElementById('cancelResponsablesBtn');
const confirmResponsablesBtn = document.getElementById('confirmResponsablesBtn');

const optionsBtn = document.getElementById('optionsBtn');
const exportButtonsContainer = document.getElementById('exportButtonsContainer');

let currentQuantity = '';
let currentProduct = null;
let searchTimeout;
let productIdToDelete = null;
let responsables = ['', ''];
let menuTimeoutId = null;

let filters = {
    selected: false,
    panes: false,
    polar: false,
    directOrder: false,
    all: true
};

// Persistence Logic
function saveState() {
    localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
    localStorage.setItem('responsables', JSON.stringify(responsables));
}

function loadState() {
    const savedProducts = localStorage.getItem('selectedProducts');
    const savedResponsables = localStorage.getItem('responsables');

    if (savedProducts) {
        selectedProducts = JSON.parse(savedProducts);
    }
    if (savedResponsables) {
        responsables = JSON.parse(savedResponsables);
    }
}

// UI Functions
function showModal(modal) {
    if (!modal) return;
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
}

function hideModal(modal) {
    if (!modal) return;
    modal.classList.remove('show');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}

function renderProducts(filteredProducts) {
    productListEl.innerHTML = '';

    if (filteredProducts.length === 0) {
        productListEl.innerHTML += '<p class="col-span-full text-center text-gray-500 text-lg">No se encontraron productos que coincidan con los filtros o la búsqueda.</p>';
        return;
    }

    let sortedList = [...filteredProducts];
    sortedList.sort((a, b) => {
        const nameA = a.name.replace(/[•.-]/g, '').trim().toUpperCase();
        const nameB = b.name.replace(/[•.-]/g, '').trim().toUpperCase();
        return nameA.localeCompare(nameB);
    });

    const listHtml = sortedList.map(item => {
        const isSelected = selectedProducts.some(p => p.id === item.id);
        const cardClass = isSelected ? 'product-card selected' : 'product-card';
        return `
            <div class="${cardClass} flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm" data-id="${item.id}" data-name="${item.name}">
                <h2 class="product-name text-sm sm:text-lg font-medium text-gray-800">${item.id}. ${item.name}</h2>
            </div>
        `;
    }).join('');

    productListEl.innerHTML += listHtml;
}

function renderSelectedProducts(productsToRender) {
    const productsToShow = productsToRender !== undefined ? productsToRender : selectedProducts;
    selectedProductsList.innerHTML = '';

    const sortedProducts = [...productsToShow].sort((a, b) => {
        const nameA = a.name.replace(/[•.-]/g, '').trim().toUpperCase();
        const nameB = b.name.replace(/[•.-]/g, '').trim().toUpperCase();
        return nameA.localeCompare(nameB);
    });

    if (selectedProducts.length > 0) {
        helpBtn.classList.add('hidden');
    } else {
        helpBtn.classList.remove('hidden');
    }

    if (sortedProducts.length > 0) {
        const selectedHtml = sortedProducts.map(product => {
            return `
                <div class="bg-blue-50 dark:bg-slate-700 p-4 rounded-lg shadow-md flex justify-between items-center transition-all duration-200 border-2 border-blue-400 dark:border-blue-700">
                    <span class="font-medium text-blue-800 dark:text-blue-200">${product.name}</span>
                    <div class="flex items-center gap-4">
                        <span class="font-bold text-blue-900 dark:text-blue-100">${product.quantity} ${product.unit}</span>
                        <button class="delete-button" data-id="${product.id}">Eliminar</button>
                    </div>
                </div>
            `;
        }).join('');
        selectedProductsList.innerHTML = selectedHtml;
        document.querySelectorAll('.delete-button').forEach(button => {
            button.addEventListener('click', (event) => {
                const productId = parseInt(event.target.dataset.id, 10);
                productIdToDelete = productId;
                warningTitle.textContent = 'Confirmar Eliminación';
                warningMessage.textContent = '¿Estás seguro de que deseas eliminar este producto?';
                confirmExitBtn.textContent = 'Sí, eliminar';
                cancelExitBtn.textContent = 'Cancelar';
                showModal(warningModal);
            });
        });
    } else {
        if (selectedProducts.length > 0 && productsToRender !== undefined) {
            selectedProductsList.innerHTML = '<p class="text-center text-gray-500 text-lg">No se encontraron productos seleccionados que coincidan con la búsqueda.</p>';
        } else {
            selectedProductsList.innerHTML = '<p class="text-center text-gray-500 text-lg">Aún no has agregado productos.</p>';
        }
    }
}

function updateUI() {
    const isAnyFilterActive = filters.selected || filters.panes || filters.polar || filters.directOrder;
    const searchContainer = document.getElementById('searchContainer');
    const directOrderSearchResultsContainer = document.getElementById('directOrderSearchResultsContainer');

    filterSelectedBtn.classList.toggle('hidden', isAnyFilterActive && !filters.selected);
    filterPanesBtn.classList.toggle('hidden', isAnyFilterActive && !filters.panes);
    filterPolarBtn.classList.toggle('hidden', isAnyFilterActive && !filters.polar);
    directOrderBtn.classList.toggle('hidden', isAnyFilterActive && !filters.directOrder);

    if (isAnyFilterActive) {
        filterButtonsContainer.classList.remove('sm:grid-cols-4');
    } else {
        filterButtonsContainer.classList.add('sm:grid-cols-4');
    }

    if (isAnyFilterActive || selectedProducts.length > 0) {
        helpBtn.classList.add('hidden');
    } else {
        helpBtn.classList.remove('hidden');
    }

    if (isAnyFilterActive) {
        mainCloseBtn.classList.remove('hidden');
        topRightButtons.classList.add('hidden');
    } else {
        mainCloseBtn.classList.add('hidden');
        topRightButtons.classList.remove('hidden');
    }

    if (filters.selected) {
        productListEl.classList.add('hidden');
        selectedProductsContainer.classList.remove('hidden');
        companyFiltersContainer.classList.add('hidden');
        directOrderSearchResultsContainer.classList.add('hidden');
        renderSelectedProducts();
    } else {
        productListEl.classList.remove('hidden');
        selectedProductsContainer.classList.add('hidden');
    }

    filterPanesBtn.classList.toggle('active', filters.panes);
    filterPolarBtn.classList.toggle('active', filters.polar);
    filterSelectedBtn.classList.toggle('active', filters.selected);
    directOrderBtn.classList.toggle('active', filters.directOrder);

    if (filters.directOrder) {
        productListEl.classList.add('hidden');
        if (searchInput.value.trim()) {
            directOrderSearchResultsContainer.classList.remove('hidden');
            companyFiltersContainer.classList.add('hidden');
        } else {
            directOrderSearchResultsContainer.classList.add('hidden');
            companyFiltersContainer.classList.remove('hidden');
        }
    } else {
        companyFiltersContainer.classList.add('hidden');
        directOrderSearchResultsContainer.classList.add('hidden');
    }
}

function filterAndRenderProducts() {
    if (filters.selected) {
        updateUI();
        return;
    }

    const searchTerm = searchInput.value.toLowerCase();
    let baseProducts;

    if (filters.panes) {
        baseProducts = processedProducts.filter(product => product.name.includes('•'));
    } else if (filters.polar) {
        baseProducts = processedProducts.filter(product => product.name.endsWith('.'));
    } else {
        baseProducts = [...processedProducts];
    }

    const filteredProducts = searchTerm
        ? baseProducts.filter(product => product.name.toLowerCase().includes(searchTerm))
        : baseProducts;

    productListEl.classList.remove('flex', 'flex-col', 'gap-4');
    productListEl.classList.add('grid', 'sm:grid-cols-2', 'lg:grid-cols-3');

    renderProducts(filteredProducts);
    updateUI();
}

function updateDisplay() {
    calculatorDisplay.textContent = currentQuantity || '0';
}

function refreshCompanyProductViews() {
    const activeButton = companyFiltersContainer.querySelector('.company-list-item.active');
    if (!activeButton) return;

    const companyName = activeButton.dataset.company;
    const productsContainer = companyFiltersContainer.querySelector(`[data-container-for="${companyName}"]`);

    const productNames = companyProductMapping[companyName] || [];
    if (productNames.length > 0) {
        const companyProducts = processedProducts.filter(p => productNames.includes(p.name));

        companyProducts.sort((a, b) => {
            const nameA = a.name.replace(/[•.-]/g, '').trim().toUpperCase();
            const nameB = b.name.replace(/[•.-]/g, '').trim().toUpperCase();
            return nameA.localeCompare(nameB);
        });

        const productsHtml = companyProducts.map(item => {
            const isSelected = selectedProducts.some(p => p.id === item.id);
            const cardClass = isSelected ? 'product-card selected' : 'product-card';
            return `
                <div class="${cardClass} flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm" data-id="${item.id}" data-name="${item.name}">
                    <h2 class="product-name text-sm sm:text-lg font-medium text-gray-800">${item.id}. ${item.name}</h2>
                </div>
            `;
        }).join('');
        productsContainer.innerHTML = productsHtml;
    } else {
        productsContainer.innerHTML = '<p class="col-span-full text-center text-gray-500 text-lg">No hay productos para esta empresa.</p>';
    }
}

function renderDirectOrderSearchResults() {
    const searchTerm = searchInput.value.toLowerCase();
    const companyContainer = document.getElementById('companyFiltersContainer');
    const searchResultsContainer = document.getElementById('directOrderSearchResultsContainer');

    if (!searchTerm) {
        companyContainer.classList.remove('hidden');
        searchResultsContainer.classList.add('hidden');
        searchResultsContainer.innerHTML = '';
        companyContainer.querySelectorAll('.company-section').forEach(section => {
            section.classList.remove('hidden');
        });
        return;
    }

    companyContainer.classList.add('hidden');
    searchResultsContainer.classList.remove('hidden');
    searchResultsContainer.innerHTML = '';

    const filteredResults = directOrderProducts.filter(item =>
        item.name.toLowerCase().includes(searchTerm) || item.company.toLowerCase().includes(searchTerm)
    );

    filteredResults.sort((a, b) => {
        const nameA = a.name.replace(/[•.-]/g, '').trim().toUpperCase();
        const nameB = b.name.replace(/[•.-]/g, '').trim().toUpperCase();
        return nameA.localeCompare(nameB);
    });

    if (filteredResults.length > 0) {
        const resultsHtml = filteredResults.map(item => {
            const isSelected = selectedProducts.some(p => p.id === item.id);
            const cardClass = isSelected ? 'product-card selected' : 'product-card';
            return `
                <div class="${cardClass} flex flex-col items-start w-full bg-gray-50 p-4 rounded-lg shadow-sm" data-id="${item.id}" data-name="${item.name}">
                    <h2 class="product-name text-sm sm:text-lg font-medium text-gray-800">${item.name}</h2>
                    <p class="text-xs text-purple-700 font-semibold mt-1">${item.company}</p>
                </div>
            `;
        }).join('');
        searchResultsContainer.innerHTML = resultsHtml;
    } else {
        searchResultsContainer.innerHTML = '<p class="col-span-full text-center text-gray-500 text-lg">No se encontraron productos o empresas.</p>';
    }
}

function handleCalculatorClick(event) {
    const value = event.target.dataset.value;
    if (!value) return;

    if (value === 'backspace') {
        currentQuantity = currentQuantity.slice(0, -1);
    } else if (value === 'confirm') {
        if (currentQuantity !== '' && currentProduct) {
            const quantity = parseInt(currentQuantity, 10);
            const existingProductIndex = selectedProducts.findIndex(p => p.id === currentProduct.id);

            if (quantity === 0) {
                if (existingProductIndex !== -1) {
                    selectedProducts.splice(existingProductIndex, 1);
                }
            } else {
                if (existingProductIndex !== -1) {
                    selectedProducts[existingProductIndex].quantity = quantity;
                } else {
                    selectedProducts.push({ id: currentProduct.id, name: currentProduct.name, quantity: quantity, unit: currentProduct.unit });
                }
            }

            saveState();
            hideModal(calculatorModal);
            currentQuantity = '';
            currentProduct = null;
            filterAndRenderProducts();
            refreshCompanyProductViews();
            if (filters.directOrder && searchInput.value) {
                renderDirectOrderSearchResults();
            }
        }
    } else {
        if (currentQuantity.length < 9) {
            currentQuantity += value;
        }
    }
    updateDisplay();
}

// Logic for Exporting
function exportToExcel() {
    const searchTerm = searchInput.value.toLowerCase();
    let productsToExport;
    let isExportingAll = false;

    if (filters.panes) {
        productsToExport = processedProducts.filter(product => product.name.includes('•'));
        isExportingAll = true;
    } else if (filters.polar) {
        productsToExport = processedProducts.filter(product => product.name.endsWith('.'));
        isExportingAll = true;
    } else if (filters.selected) {
        productsToExport = [...selectedProducts];
    } else {
        productsToExport = [...processedProducts];
        isExportingAll = true;
    }

    if (searchTerm) {
        productsToExport = productsToExport.filter(product => product.name.toLowerCase().includes(searchTerm));
    }

    if (productsToExport.length === 0) {
        const message = isExportingAll ?
            'No hay productos que coincidan con los filtros actuales para exportar.' :
            'No hay productos seleccionados para exportar.';
        showMessage(message, '#fca5a5', '#7f1d1d');
        return;
    }

    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    const dateString = `FECHA: ${day}-${month}-${year}`;

    const ws = XLSX.utils.aoa_to_sheet([]);
    ws['!cols'] = [{ width: 52 }, { width: 23 }, { width: 23 }, { width: 23 }, { width: 15 }, { width: 15 }];

    let orderTitle = 'FERIA ESTE';
    if (filters.polar) orderTitle = 'PEDIDO DE LA POLAR';
    else if (filters.panes) orderTitle = 'PEDIDO DE LA CAVA';
    else if (filters.selected) orderTitle = 'PRODUCTOS SELECCIONADOS';

    const responsablesString = responsables.filter(r => r).join('-');
    const infoHeaders = [[dateString], ['RESPONSABLES: ' + responsablesString]];

    XLSX.utils.sheet_add_aoa(ws, [[orderTitle]], { origin: 'C1' });
    XLSX.utils.sheet_add_aoa(ws, infoHeaders, { origin: 'A1' });
    XLSX.utils.sheet_add_aoa(ws, [['PRODUCTO', 'PEDIDO FERIA ESTE', 'PEDIDO FERIA CENTRO', 'PEDIDO FERIA RUIZ PINEDA', 'TOTAL', 'UNIDAD']], { origin: 'A3' });

    const productData = productsToExport.map(product => {
        let quantityText = '';
        const productUnit = product.unit || (processedProducts.find(p => p.id === product.id) || {}).unit || '';
        const productNameForExport = product.name.replace(/"(.*?)"/g, (match, group1) => {
            if (!group1) return '""';
            const unitText = group1.replace(/[\d/.*¿?¿¡]+/g, '').trim().toUpperCase();
            return `"${unitText}"`;
        });

        if (isExportingAll) {
            const selectedProd = selectedProducts.find(sp => sp.id === product.id);
            quantityText = selectedProd ? selectedProd.quantity : '';
        } else {
            quantityText = product.quantity;
        }

        return [
            productNameForExport,
            quantityText,
            '',
            '',
            '',
            productUnit.toUpperCase()
        ];
    });

    XLSX.utils.sheet_add_aoa(ws, productData, { origin: 'A4' });

    productsToExport.forEach((product, index) => {
        const rowIndex = 4 + index;
        const cellAddress = 'E' + rowIndex;
        const formula = `SUM(B${rowIndex}:D${rowIndex})`;
        ws[cellAddress] = { t: 'n', f: formula };
    });

    if (!ws['!rows']) ws['!rows'] = [];
    ws['!rows'][1] = { hpt: 24 };

    if (!ws['!merges']) ws['!merges'] = [];
    ws['!merges'].push({ s: { r: 0, c: 2 }, e: { r: 0, c: 5 } });

    const wb = XLSX.utils.book_new();
    let sheetName = filters.polar ? "Pedido De La Polar" : filters.panes ? "Pedido De La Cava" : filters.selected ? "Productos Seleccionados" : "PEDIDO DE FERIA ESTE";
    XLSX.utils.book_append_sheet(wb, ws, sheetName);

    let fileName = `Pedido de Feria del Este ${day}-${month}-${year}.xlsx`;
    if (filters.polar) fileName = `Pedido De La Polar Feria del Este ${day}-${month}-${year}.xlsx`;
    else if (filters.panes) fileName = `Pedido De La Cava Feria Del Este ${day}-${month}-${year}.xlsx`;
    else if (filters.selected) fileName = `Productos Seleccionados Feria Del Este ${day}-${month}-${year}.xlsx`;

    XLSX.writeFile(wb, fileName);
}

function exportDirectOrderToExcel() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    const dateStringForHeader = `${day}/${month}/${year}`;
    const dateStringForFile = `${day}-${month}-${year}`;

    // Preparar lista de TODOS los productos del pedido directo
    const exportList = [...directOrderProducts];

    // Ordenar alfabéticamente por nombre de producto
    exportList.sort((a, b) => {
        const nameA = a.name.replace(/[•.-]/g, '').trim().toUpperCase();
        const nameB = b.name.replace(/[•.-]/g, '').trim().toUpperCase();
        return nameA.localeCompare(nameB);
    });

    const ws = XLSX.utils.aoa_to_sheet([]);
    const responsablesString = responsables.filter(r => r).join('-');

    // Títulos y encabezados con origen específico para asegurar el diseño de la imagen
    XLSX.utils.sheet_add_aoa(ws, [[`FECHA:${dateStringForHeader}`]], { origin: 'A1' });
    XLSX.utils.sheet_add_aoa(ws, [['PEDIDO DIRECTO FERIA ESTE']], { origin: 'B1' });
    XLSX.utils.sheet_add_aoa(ws, [['RESPONSABLE: ' + responsablesString]], { origin: 'A2' });
    XLSX.utils.sheet_add_aoa(ws, [['PRODUCTO', 'EMPRESA', 'FERIA DEL ESTE', 'TOTAL', 'UNIDAD']], { origin: 'A3' });

    const productRows = exportList.map(product => {
        const selectedProd = selectedProducts.find(sp => Number(sp.id) === Number(product.id));
        const quantity = selectedProd ? Number(selectedProd.quantity) : '';

        const productNameForExport = product.name.replace(/"(.*?)"/g, (match, group1) => {
            if (!group1) return '""';
            const unitText = group1.replace(/[\d/.*¿?¿¡]+/g, '').trim().toUpperCase();
            return `"${unitText}"`;
        });

        return [
            `${product.id}. ${productNameForExport}`,
            product.company,
            quantity,
            '', // TOTAL (se llena con fórmula)
            product.unit.toUpperCase()
        ];
    });

    XLSX.utils.sheet_add_aoa(ws, productRows, { origin: 'A4' });

    let excelRowIndex = 4; // Los productos empiezan en la fila 4
    exportList.forEach(() => {
        const row = excelRowIndex;
        const cellAddress = 'D' + row; // Columna D es TOTAL
        // Fórmula simplificada que apunta a la columna C
        ws[cellAddress] = { t: 'n', f: `C${row}` };
        excelRowIndex++;
    });

    if (!ws['!rows']) ws['!rows'] = [];
    ws['!rows'][1] = { hpt: 24 };

    ws['!cols'] = [{ width: 50 }, { width: 50 }, { width: 18 }, { width: 12 }, { width: 12 }];

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "PEDIDO DIRECTO FERIA ESTE");
    XLSX.writeFile(wb, `PEDIDO_DIRECTO_FERIA_ESTE_${dateStringForFile}.xlsx`);
    showMessage('Pedido Directo exportado con éxito.', '#86efac', '#166534');
}

async function generateOrderImage() {
    if (selectedProducts.length === 0) {
        showMessage('No hay productos seleccionados para exportar.', '#fca5a5', '#7f1d1d');
        return null;
    }

    const contentToCapture = document.createElement('div');
    contentToCapture.classList.add('p-4', 'bg-white', 'w-full');
    contentToCapture.style.width = '350px';

    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    const dateString = `FECHA: ${day}-${month}-${year}`;
    const responsablesString = responsables.filter(r => r).join(' - ');

    contentToCapture.innerHTML = `
        <div class="text-center font-bold text-xl mb-3 text-gray-800">Pedido de Viveres</div>
        <div class="text-xs text-gray-600 mb-1 text-center"><span>${dateString}</span> | <span>FERIA ESTE</span></div>
        ${responsablesString ? `<div class="text-xs text-gray-600 mb-3 text-center"><span class="font-bold">RESPONSABLES:</span> ${responsablesString}</div>` : '<div class="mb-2"></div>'}
        <div id="captureList" class="flex flex-col gap-2"></div>
    `;

    const captureList = contentToCapture.querySelector('#captureList');
    const sortedProducts = [...selectedProducts].sort((a, b) => {
        const nameA = a.name.replace(/[•.-]/g, '').trim().toUpperCase();
        const nameB = b.name.replace(/[•.-]/g, '').trim().toUpperCase();
        return nameA.localeCompare(nameB);
    });

    sortedProducts.forEach(product => {
        const item = document.createElement('div');
        item.classList.add('bg-blue-50', 'p-3', 'rounded-lg', 'flex', 'justify-between', 'items-center', 'text-sm');
        item.innerHTML = `<span class="font-medium text-blue-800">${product.name}</span><span class="font-bold text-blue-900">${product.quantity} ${product.unit}</span>`;
        captureList.appendChild(item);
    });

    document.body.appendChild(contentToCapture);
    const canvas = await html2canvas(contentToCapture, { scale: 2, backgroundColor: '#ffffff' });
    document.body.removeChild(contentToCapture);
    return canvas.toDataURL('image/png');
}

async function shareToWhatsApp() {
    const image = await generateOrderImage();
    if (!image) return;

    try {
        const response = await fetch(image);
        const blob = await response.blob();
        const file = new File([blob], 'pedido.png', { type: blob.type });

        if (navigator.share && navigator.canShare({ files: [file] })) {
            await navigator.share({ files: [file], title: 'Pedido de Viveres', text: 'Aquí está el pedido de viveres.' });
            showMessage('Pedido compartido con éxito.', '#86efac', '#166534');
        } else {
            showMessage('La función de compartir no es compatible con este navegador. Descarga la imagen y compártela manualmente.', '#fca5a5', '#7f1d1d');
        }
    } catch (error) {
        showMessage('Ocurrió un error al intentar compartir.', '#fca5a5', '#7f1d1d');
    }
}

async function exportToImage() {
    const image = await generateOrderImage();
    if (!image) return;

    previewImage.src = image;
    showModal(previewModal);

    const downloadImage = () => {
        const link = document.createElement('a');
        link.href = image;
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const year = today.getFullYear();
        link.download = `Pedido_de_Viveres_${day}-${month}-${year}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        hideModal(previewModal);
        showMessage('Imagen descargada con éxito.', '#86efac', '#166534');
    };

    downloadPreviewBtn.onclick = downloadImage;
    downloadPreviewIconBtn.onclick = downloadImage;
}

function showMessage(message, bgColor, textColor) {
    const messageBox = document.createElement('div');
    messageBox.textContent = message;
    messageBox.style.cssText = `position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: ${bgColor}; color: ${textColor}; padding: 1.5rem; border-radius: 0.75rem; box-shadow: 0 4px 14px rgba(0,0,0,0.15); z-index: 2000; font-weight: bold; text-align: center;`;
    document.body.appendChild(messageBox);
    setTimeout(() => document.body.removeChild(messageBox), 3000);
}

// Event Listeners
document.getElementById('mainContainer').addEventListener('click', (event) => {
    const productCard = event.target.closest('.product-card');
    if (productCard) {
        const productId = parseInt(productCard.dataset.id, 10);
        const productName = productCard.dataset.name;
        const productWithUnit = processedProducts.find(p => p.id === productId);
        currentProduct = { id: productId, name: productName, unit: productWithUnit.unit };
        modalProductName.textContent = `Producto: ${productName}`;
        const existingProduct = selectedProducts.find(p => p.id === productId);
        currentQuantity = existingProduct ? String(existingProduct.quantity) : '';
        updateDisplay();
        showModal(calculatorModal);
    }
});

closeModalBtn.addEventListener('click', () => {
    hideModal(calculatorModal);
    currentQuantity = '';
    currentProduct = null;
});

calculatorModal.addEventListener('click', (event) => {
    if (event.target.id === 'calculatorModal') {
        hideModal(calculatorModal);
        currentQuantity = '';
        currentProduct = null;
    }
});

searchInput.addEventListener('input', () => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        if (filters.directOrder) {
            renderDirectOrderSearchResults();
        } else if (filters.selected) {
            const searchTerm = searchInput.value.toLowerCase();
            const filteredSelected = selectedProducts.filter(product => product.name.toLowerCase().includes(searchTerm));
            renderSelectedProducts(filteredSelected);
        } else {
            filterAndRenderProducts();
        }
    }, 300);
});

filterSelectedBtn.addEventListener('click', () => {
    searchInput.value = '';
    filters.selected = true; filters.panes = false; filters.polar = false; filters.directOrder = false;
    filterAndRenderProducts();
});

mainCloseBtn.addEventListener('click', () => {
    searchInput.value = '';
    filters.selected = false; filters.panes = false; filters.polar = false; filters.directOrder = false;
    document.getElementById('directOrderSearchResultsContainer').classList.add('hidden');
    filterAndRenderProducts();
});

filterPanesBtn.addEventListener('click', () => {
    searchInput.value = '';
    filters.selected = false; filters.panes = true; filters.polar = false; filters.directOrder = false;
    filterAndRenderProducts();
});

filterPolarBtn.addEventListener('click', () => {
    searchInput.value = '';
    filters.selected = false; filters.panes = false; filters.polar = true; filters.directOrder = false;
    filterAndRenderProducts();
});

directOrderBtn.addEventListener('click', () => {
    searchInput.value = '';
    filters.selected = false; filters.panes = false; filters.polar = false; filters.directOrder = !filters.directOrder;
    if (!filters.directOrder) {
        document.querySelectorAll('.products-for-company').forEach(container => container.classList.add('hidden'));
        document.querySelectorAll('.company-list-item.active').forEach(btn => btn.classList.remove('active'));
    }
    updateUI();
});

function renderCompanyList() {
    companyFiltersContainer.innerHTML = '';
    const companyNames = Object.keys(companyProductMapping).sort();
    companyFiltersContainer.innerHTML = companyNames.map(company => `
        <div class="company-section w-full">
            <button class="company-list-item" data-company="${company}">${company}</button>
            <div class="products-for-company grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 hidden" data-container-for="${company}"></div>
        </div>
    `).join('');
}

companyFiltersContainer.addEventListener('click', (event) => {
    const companyButton = event.target.closest('.company-list-item');
    if (!companyButton) return;
    const companyName = companyButton.dataset.company;
    const productsContainer = companyFiltersContainer.querySelector(`[data-container-for="${companyName}"]`);
    const isAlreadyOpen = companyButton.classList.contains('active');
    companyFiltersContainer.querySelectorAll('.company-list-item.active').forEach(btn => btn.classList.remove('active'));
    companyFiltersContainer.querySelectorAll('.products-for-company:not(.hidden)').forEach(c => c.classList.add('hidden'));
    if (isAlreadyOpen) return;
    companyButton.classList.add('active');
    productsContainer.classList.remove('hidden');
    const productNames = companyProductMapping[companyName] || [];
    const companyProducts = processedProducts.filter(p => productNames.includes(p.name));
    companyProducts.sort((a, b) => a.name.localeCompare(b.name));
    productsContainer.innerHTML = companyProducts.map(item => `
        <div class="${selectedProducts.some(p => p.id === item.id) ? 'product-card selected' : 'product-card'} flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm" data-id="${item.id}" data-name="${item.name}">
            <h2 class="product-name text-sm sm:text-lg font-medium text-gray-800">${item.id}. ${item.name}</h2>
        </div>
    `).join('');
});

document.querySelector('.calculator-buttons-grid').addEventListener('click', handleCalculatorClick);
exportExcelBtn.addEventListener('click', exportToExcel);
downloadImageBtn.addEventListener('click', exportToImage);
shareBtn.addEventListener('click', shareToWhatsApp);
exportDirectOrderBtn.addEventListener('click', exportDirectOrderToExcel);

window.addEventListener('beforeunload', (event) => {
    if (selectedProducts.length > 0) {
        event.returnValue = 'Tienes productos seleccionados. ¿Estás seguro de que quieres salir?';
    }
});

cancelExitBtn.addEventListener('click', () => hideModal(warningModal));
confirmExitBtn.addEventListener('click', () => {
    if (warningTitle.textContent === 'Confirmar Eliminación') {
        const index = selectedProducts.findIndex(p => p.id === productIdToDelete);
        if (index !== -1) selectedProducts.splice(index, 1);
        saveState();
        renderSelectedProducts();
        filterAndRenderProducts();
        refreshCompanyProductViews();
        hideModal(warningModal);
    } else {
        window.history.back();
    }
});

helpBtn.addEventListener('click', () => showModal(helpModal));
closeHelpModalBtn.addEventListener('click', () => hideModal(helpModal));
addResponsablesBtn.addEventListener('click', () => {
    responsable1Input.value = responsables[0];
    responsable2Input.value = responsables[1];
    showModal(responsablesModal);
});
cancelResponsablesBtn.addEventListener('click', () => hideModal(responsablesModal));
confirmResponsablesBtn.addEventListener('click', () => {
    responsables[0] = responsable1Input.value.trim();
    responsables[1] = responsable2Input.value.trim();
    saveState();
    hideModal(responsablesModal);
    showMessage('Responsables actualizados con éxito.', '#86efac', '#166534');
    if (responsables[0] || responsables[1]) {
        filterButtonsContainer.classList.remove('hidden');
        const filterItems = [document.getElementById('directOrderBtn'), document.getElementById('filterPolarBtn'), document.getElementById('filterPanesBtn'), document.getElementById('filterSelectedBtn')];
        filterItems.forEach((item, index) => {
            setTimeout(() => item.classList.add('show'), (index + 1) * 150);
        });
    } else {
        filterButtonsContainer.classList.add('hidden');
        document.querySelectorAll('.filter-item').forEach(item => item.classList.remove('show'));
    }
});

function hideOptionsMenu() {
    if (exportButtonsContainer.classList.contains('hidden')) return;
    const visibleMenuItems = Array.from(exportButtonsContainer.querySelectorAll('.menu-item')).filter(item => !item.classList.contains('hidden'));
    [...visibleMenuItems].reverse().forEach((item, index) => setTimeout(() => item.classList.remove('show'), index * 150));
    setTimeout(() => exportButtonsContainer.classList.add('hidden'), (visibleMenuItems.length * 150) + 500);
}

optionsBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    if (menuTimeoutId) clearTimeout(menuTimeoutId);
    if (exportButtonsContainer.classList.contains('hidden')) {
        document.getElementById('exportExcelBtn').classList.toggle('hidden', filters.directOrder);
        document.getElementById('exportDirectOrderBtn').classList.toggle('hidden', !filters.directOrder);
        exportButtonsContainer.classList.remove('hidden');
        const menuItemsToShow = Array.from(exportButtonsContainer.querySelectorAll('.menu-item')).filter(item => !item.classList.contains('hidden'));
        menuItemsToShow.forEach((item, index) => setTimeout(() => item.classList.add('show'), (index + 1) * 150));
        menuTimeoutId = setTimeout(hideOptionsMenu, 10000);
    } else {
        hideOptionsMenu();
    }
});

const darkModeToggle = document.getElementById('darkModeToggle');
const setTheme = (theme) => {
    if (theme === 'dark') { document.documentElement.classList.add('dark'); darkModeToggle.checked = true; }
    else { document.documentElement.classList.remove('dark'); darkModeToggle.checked = false; }
};
darkModeToggle.addEventListener('change', () => {
    const newTheme = darkModeToggle.checked ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
});
setTheme(localStorage.getItem('theme') || 'light');

// Initialization
loadState();
renderCompanyList();
filterAndRenderProducts();

// Si hay responsables guardados, mostrar los botones de filtro
if (responsables[0] || responsables[1]) {
    filterButtonsContainer.classList.remove('hidden');
    const filterItems = [document.getElementById('directOrderBtn'), document.getElementById('filterPolarBtn'), document.getElementById('filterPanesBtn'), document.getElementById('filterSelectedBtn')];
    filterItems.forEach((item, index) => {
        setTimeout(() => item.classList.add('show'), (index + 1) * 150);
    });
}
