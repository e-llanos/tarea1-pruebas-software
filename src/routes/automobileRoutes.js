import express from 'express';
import {
    generateAutomobiles,
    getAutomobiles,
    filterAndGetsAutomobiles,
    filterAutomobilesAgent,
    consultAutomobile
} from '../controllers/automobileController.js';

const router = express.Router();

/**
 * Generate a specified number of random automobiles and save them to a JSON file.
 *
 * @route POST /automobiles
 * @param {number} req.body.numberOfAutomobiles - The number of automobiles to generate and save.
 * @returns {Response} 200 - A list of generated automobiles.
 * @throws {Error} 500 - Failed to generate and save automobiles.
 */
router.post('/automobiles', generateAutomobiles);

/**
 * Retrieve all automobiles from the database.
 *
 * @route GET /automobiles
 * @returns {Response} 200 - A list of automobiles.
 * @throws {Error} 500 - Failed to retrieve automobiles.
 */
router.get('/automobiles', getAutomobiles);

/**
 * Filter and retrieve automobiles based on specified criteria.
 *
 * @route GET /automobiles/filter
 * @param {number} req.query.maxPrice - Maximum price for filtering.
 * @param {string} req.query.type - Type of automobile for filtering.
 * @param {string} req.query.color - Color of automobile for filtering.
 * @returns {Response} 200 - A list of filtered automobiles.
 * @throws {Error} 500 - Failed to filter and retrieve automobiles.
 */
router.get('/automobiles/filter', filterAndGetsAutomobiles);

/**
 * Filter and retrieve automobiles based on specified criteria for an agent.
 *
 * @route GET /automobiles/filter/agent
 * @param {number} req.query.maxPrice - Maximum price for filtering.
 * @param {string} req.query.type - Type of automobile for filtering.
 * @param {string} req.query.color - Color of automobile for filtering.
 * @param {boolean} req.query.isAgent - Indicates whether the request is from an agent.
 * @returns {Response} 200 - A list of filtered automobiles with popularity if isAgent is true.
 * @throws {Error} 500 - Failed to filter and retrieve automobiles for an agent.
 */
router.get('/automobiles/filter/agent', filterAutomobilesAgent);

/**
 * Consult an automobile by its ID and increase its popularity.
 *
 * @route GET /automobiles/consult
 * @param {string} req.query.id.required - ID of the automobile to consult.
 * @returns {Response} 200 - The consulted automobile.
 * @throws {Error} 404 - Automobile not found.
 */
router.get('/automobiles/consult', consultAutomobile);

export default router;
