import { readJsonFromFile, writeJsonToFile } from '../utils/jsonUtils.js';
import { filePathData } from '../config/configPaths.js';

/**
 * Finds an automobile by ID in the JSON data, increments its popularity, and updates the JSON file.
 *
 * @param {string} id - The ID of the automobile to find and increment popularity.
 * @returns {Promise<Object|null>} - The found automobile object with incremented popularity or null if not found.
 * @throws {Error} - Throws an error if there is an issue reading, finding, or updating the JSON data.
 */
async function findAndIncrementPopularity(id) {
    try {
        const automobiles = await readJsonFromFile(filePathData);
        const automobileIndex = automobiles.findIndex((auto) => auto.id === id);

        if (automobileIndex === -1) {
            return null;
        }

        const automobile = { ...automobiles[automobileIndex] };
        automobile.popularity += 1;

        automobiles[automobileIndex] = automobile;

        await writeJsonToFile(filePathData, automobiles);

        delete automobile.popularity;

        return automobile;
    } catch (error) {
        throw new Error(`Error searching for and incrementing automobile popularity: ${error.message}`);
    }
}

export { findAndIncrementPopularity };
