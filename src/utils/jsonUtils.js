import fs from 'fs';
import path from 'path';

/**
 * Writes JSON data to a file, creating the directory if it doesn't exist.
 *
 * @param {string} filePath - The path to the JSON file.
 * @param {object} data - The JSON data to write.
 * @returns {Promise<void>} A promise that resolves when the data is successfully written to the file.
 */
async function writeJsonToFile(filePath, data) {
    try {
        if (typeof data !== 'object') {
            throw new Error('Invalid data format. Data must be an object.');
        }

        const folderPath = path.dirname(filePath);

        await fs.promises.mkdir(folderPath, { recursive: true });

        const jsonData = JSON.stringify(data, null, 2);
        await fs.promises.writeFile(filePath, jsonData, 'utf8');

        console.log(`Data has been successfully written to the file: ${filePath}`);
    } catch (error) {
        throw new Error(`Error writing JSON data to the file: ${error.message}`);
    }
}

/**
 * Reads JSON data from a file.
 *
 * @param {string} filePath - The path to the JSON file.
 * @returns {Promise<object>} A promise that resolves with the JSON data read from the file.
 */
async function readJsonFromFile(filePath) {
    try {
        if (typeof filePath !== 'string') {
            throw new Error('Invalid file path. File path must be a string.');
        }

        const jsonData = await fs.promises.readFile(filePath, 'utf8');
        if (!jsonData) {
            throw new Error('File does not contain valid JSON data.');
        }

        return JSON.parse(jsonData);
    } catch (error) {
        throw new Error(`Error reading JSON data from file: ${error.message}`);
    }
}

export {
    writeJsonToFile,
    readJsonFromFile,
};
