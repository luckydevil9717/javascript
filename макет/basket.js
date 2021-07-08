const products = document.querySelector('.featuredItem')
const openBasketBtn = document.querySelector('.cartIconWrap');
const basketEl = document.querySelector('.basket');
const basketCounterEl = document.querySelector('.cartIconWrap span');
const basketTotalEl = document.querySelector('.basketTotal');
const basketTotalValueEl = document.querySelector('.basketTotalValue');
openBasketBtn.addEventListener('click', function () {
    basketEl.classList.toggle('hidden');
});


/**
 * В корзине хранится количество каждого товара
 */
let basket = {};

/**
 * Метод добавляет продукт в объект basket.
 */
function addProductToObject(productId) {
    if (!(productId in basket)) {
        basket[productId] = 1;
    } else {
        basket[productId]++;
    }
}

/**
 * Функция срабатывает когда нужно отрисовать продукт в корзине.
 */
function renderProductInBasket(productId) {
    let productExist = document.querySelector(`.productCount[data-productId="${productId}"]`);
    if (productExist) {
        increaseProductCount(productId);
        recalculateSumForProduct(productId);
    } else {
        renderNewProductInBasket(productId);
    }
}

/**
 * Функция отрисовывает новый товар в корзине.
 * @param {number} productId
*/ 
function renderNewProductInBasket(productId) {
    let productRow = `
        <div class="basketRow">
            <div>${[productId].featuredName}</div>
            <div>
                <span class="productCount" data-productId="${productId}">1</span> шт.
            </div>
            <div>${[productId].featuredPrice}</div>
            <div>
                $<span class="productTotalRow" data-productId="${productId}">${[productId].featuredPrice}</span>
            </div>
        </div>
    `;
    basketTotalEl.insertAdjacentHTML("beforebegin", productRow);
}



/**
 * Функция увеличивает количество товаров в строке в корзине.
 */
function increaseProductCount(productId) {
    const productCountEl = document.querySelector(`.productCount[data-productId="${productId}"]`);
    productCountEl.textContent++;
}

/**
 * Функция пересчитывает стоимость товара умноженное на количество товара
 * в корзине.
 */
function recalculateSumForProduct(productId) {
    const productTotalRowEl = document.querySelector(`.productTotalRow[data-productId="${productId}"]`);
    let totalPriceForRow = (basket[productId] * featuredItem[productId].featuredPrice).toFixed(2);
    productTotalRowEl.textContent = totalPriceForRow;
}

/**
 * Функция пересчитывает общую стоимость корзины и выводит это значение на страницу.
 */
function calculateAndRenderTotalBasketSum() {
    let totalSum = 0;
    for (let productId in basket) {
        totalSum += basket[productId] * featuredItem[productId].featuredPrice;
    }
    basketTotalValueEl.textContent = totalSum.toFixed(2);
}

/**
 * Функция увеличивает счетчик количества товаров рядом с иконкой корзины.
 */
function increaseProductsCount() {
    basketCounterEl.textContent++;
}

/**
 * Эта функция срабатывает когда добавляют новый товар в корзину.
 */
function addProductIntoBasket(productId) {
    increaseProductsCount();
    addProductToObject(productId);
    renderProductInBasket(productId);
    calculateAndRenderTotalBasketSum();
} 