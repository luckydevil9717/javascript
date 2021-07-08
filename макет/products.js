'use strict';
/**
 * Функция-обработчик события клика по кнопке "Add to cart".
 */
function buttonClickHandler(event) { 
    const productId = event.currentTarget.getAttribute('button[data-productId]');
    addProductIntoBasket(productId);

}

/**
 * Функция назначает обработку клика на все кнопки "Add to cart".
 */
 function addEventListenersForAddToCartButtons() {
    const addToCartBtns = document.querySelectorAll('.featuredImgWrap');
    addToCartBtns.forEach(function (button) {
        button.addEventListener('click', buttonClickHandler);
    })
}

addEventListenersForAddToCartButtons();

