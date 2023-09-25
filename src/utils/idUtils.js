import { ObjectId } from 'mongodb';

/**
 * Generates a unique MongoDB ObjectId.
 *
 * @returns {string} A unique MongoDB ObjectId.
 */
function generateMongoId() {
    try {
        return new ObjectId().toHexString();
    } catch (error) {
        throw new Error(`Error generating MongoDB ObjectId: ${error.message}`);
    }
}

export {
    generateMongoId,
};
