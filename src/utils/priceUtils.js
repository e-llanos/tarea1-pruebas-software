
/**
 * Generates a random price within the specified range.
 *
 * @param {number} min - The minimum price.
 * @param {number} max - The maximum price.
 * @returns {number} A random price within the specified range.
 */
function getRandomPrice(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export { 
    getRandomPrice 
};