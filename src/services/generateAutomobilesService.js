import { generateMongoId } from '../utils/idUtils.js';
import { getRandomPrice } from '../utils/priceUtils.js';
import { writeJsonToFile } from '../utils/jsonUtils.js';
import * as constants from '../config/automobileConstants.js';
import { filePathData } from '../config/configPaths.js';

/**
 * Generates a random automobile with specified characteristics.
 *
 * @returns {Object} A randomly generated automobile.
 */
function generateAutomobile() {
    const brand = constants.brands[Math.floor(Math.random() * constants.brands.length)];
    const year = constants.years[Math.floor(Math.random() * constants.years.length)];
    const color = constants.colors[Math.floor(Math.random() * constants.colors.length)];
    const price = getRandomPrice(constants.minPrice, constants.maxPrice);
    const turbo = constants.turbos[Math.floor(Math.random() * constants.turbos.length)];
    const type = constants.types[Math.floor(Math.random() * constants.types.length)];
    const engine = constants.engines[type][Math.floor(Math.random() * constants.engines[type].length)];
    const popularity = 0;

    const { cabins, sunroof } = determineAdditionalFeatures(type);

    const automobile = {
        id: generateMongoId(),
        brand,
        year,
        color,
        price,
        turbo,
        type,
        engine,
        cabins,
        sunroof,
        popularity,
    };

    return automobile;
}

/**
 * Determines additional features of an automobile based on its type.
 *
 * @param {string} type - The type of the automobile.
 * @returns {Object} An object containing additional features like cabins and sunroof.
 */
function determineAdditionalFeatures(type) {
    let cabins = null;
    let sunroof = null;

    if (type === 'Truck') {
        cabins = constants.truckCabins[Math.floor(Math.random() * constants.truckCabins.length)];
    } else if (type === 'SUV') {
        sunroof = constants.suvSunroofs[Math.floor(Math.random() * constants.suvSunroofs.length)];
    }

    return { cabins, sunroof };
}

/**
 * Generates and saves N random automobiles to a JSON file.
 *
 * @param {number} numberOfAutomobiles - The number of automobiles to generate and save.
 * @returns {Promise<Array>} An array of the generated and saved automobiles.
 */
async function generateAndSaveAutomobiles(numberOfAutomobiles) {
    const automobiles = [];

    for (let i = 0; i < numberOfAutomobiles; i++) {
        const automobile = generateAutomobile();
        automobiles.push(automobile);
    }

    await writeJsonToFile(filePathData, automobiles);

    return automobiles;
}

export {
    generateAutomobile,
    generateAndSaveAutomobiles,
};
