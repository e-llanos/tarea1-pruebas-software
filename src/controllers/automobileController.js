import { generateAndSaveAutomobiles } from '../services/generateAutomobilesService.js';
import { filterAutomobiles, filterAutomobilesAndPopularity } from '../services/filterAutomobilesService.js';
import { getAllAutomobiles } from '../services/getAutomobilesService.js';
import { findAndIncrementPopularity } from '../services/increasePopularityService.js';
import { filePathData } from '../config/configPaths.js';

/**
 * Generates and saves N random automobiles.
 *
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @returns {Response} A response indicating success or failure.
 * @param {number} req.body.numberOfAutomobiles - The number of automobiles to generate.
 */
async function generateAutomobiles(req, res) {
    const { numberOfAutomobiles } = req.body;

    try {
        const automobiles = await generateAndSaveAutomobiles(Number(numberOfAutomobiles));
        return res.status(200).json({ message: `${numberOfAutomobiles} automobiles generated and saved.`, automobiles });
    } catch (error) {
        return res.status(500).json({ error: 'Failed to generate and save automobiles.', message: error.message });
    }
}

/**
 * Controller to retrieve all automobiles.
 *
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object.
 * @returns {Response} A JSON response with the list of automobiles.
 */
async function getAutomobiles(req, res) {
    try {
        const automobiles = await getAllAutomobiles(filePathData);
        res.status(200).json(automobiles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

/**
 * Controller method to filter automobiles based on specified criteria.
 *
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object.
 * @param {Object} req.body.filters - Filter criteria to apply.
 */
async function filterAndGetsAutomobiles(req, res) {
    try {
        const { filters } = req.body;

        const automobiles = await getAllAutomobiles(filePathData);

        const filteredAutomobiles = filterAutomobiles(automobiles, filters);

        res.status(200).json(filteredAutomobiles);
    } catch (error) {
        console.error(`Error filtering automobiles: ${error.message}`);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

/**
 * Controller method to filter automobiles based on specified criteria for an agent.
 *
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object.
 * @param {Object} req.body.filters - Filter criteria to apply.
 * @param {boolean} req.body.isAgent - Indicates whether the request is from an agent.
 */
async function filterAutomobilesAgent(req, res) {
    try {
        const { filters, isAgent } = req.body;

        const automobiles = await getAllAutomobiles(filePathData);

        const filteredAutomobiles = filterAutomobilesAndPopularity(automobiles, filters, isAgent);

        res.status(200).json(filteredAutomobiles);
    } catch (error) {
        console.error(`Error filtering automobiles: ${error.message}`);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

/**
 * Controller method to consult an automobile by its ID and increase its popularity.
 *
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object.
 * @param {string} req.body.id - The ID of the automobile to consult.
 */
async function consultAutomobile(req, res) {
    try {
        const { id } = req.body;

        if (!id) {
            return res.status(400).json({ error: 'A valid automobile ID is required' });
        }

        const automobile = await findAndIncrementPopularity(id);

        if (!automobile) {
            return res.status(404).json({ error: 'Automobile not found' });
        }

        res.status(200).json(automobile);
    } catch (error) {
        console.error(`Error consulting automobile: ${error.message}`);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export {
    generateAutomobiles,
    getAutomobiles,
    filterAndGetsAutomobiles,
    filterAutomobilesAgent,
    consultAutomobile
};
