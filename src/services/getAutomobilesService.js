import { readJsonFromFile } from '../utils/jsonUtils.js';

/**
 * Read automobiles from a JSON file.
 *
 * @param {string} filePath - The path to the JSON file.
 * @returns {Promise<Array>} - An array of automobiles.
 */
async function getAllAutomobiles(filePath) {
    try {
        const automobiles = await readJsonFromFile(filePath);

        return automobiles;
    } catch (error) {
        console.error(`Error reading automobiles from file: ${error.message}`);
        throw error;
    }
}

export {
    getAllAutomobiles
};
