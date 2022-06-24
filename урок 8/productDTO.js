'use strict'
/**класс хранит информацию о конкретном товаре
 * 
 */
class ProductDTO {
/**
 * 
 * @param {number} id идентификатор
 * @param {string} image картинка
 * @param {string} name имя
 * @param {string} description описание
 * @param {number} price цена 
 */

    constructor(id, image, name, description, price) {
        this.id = id;
        this.image = image;
        this.name = name;
        this.description = description;
        this.price = price;
    }
}