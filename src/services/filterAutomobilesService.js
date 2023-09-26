

/**
 * Filter automobiles based on specified criteria.
 *
 * @param {Array} automobiles - Array of automobiles to filter.
 * @param {Object} filters - Filter criteria.
 * @returns {Array} - Filtered automobiles without the 'popularity' attribute.
 */
function filterAutomobiles(automobiles, filters) {
    if (!filters) {
        return automobiles.map(({ popularity, ...rest }) => rest);
    }

    const filteredAutomobiles = automobiles.map(({ popularity, ...rest }) => rest).filter((automobile) => {
        if (filters.maxPrice && automobile.price > Number(filters.maxPrice)) {
            return false;
        }

        if (filters.type && automobile.type !== filters.type) {
            return false;
        }

        return !(filters.color && automobile.color !== filters.color);
    });

    return filteredAutomobiles;
}


/**
 * Filters and optionally increments popularity for automobiles based on specified criteria.
 *
 * @param {Array} automobiles - Array of automobiles to filter.
 * @param {Object} filters - Filter criteria.
 * @param {boolean} isAgent - Indicates if the user is an agent.
 * @returns {Array} - Filtered automobiles with or without the 'popularity' attribute.
 */
function filterAutomobilesAndPopularity(automobiles, filters, isAgent) {
    const filteredAutomobiles = automobiles.filter((automobile) => {
        if (filters.maxPrice && automobile.price > Number(filters.maxPrice)) {
            return false;
        }

        if (filters.type && automobile.type !== filters.type) {
            return false;
        }

        return !(filters.color && automobile.color !== filters.color);
    });

    if (!isAgent) {
        filteredAutomobiles.forEach((automobile) => {
            delete automobile.popularity;
        });
    }

    return filteredAutomobiles;
}

export {
    filterAutomobiles,
    filterAutomobilesAndPopularity
};
