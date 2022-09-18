
const paginatedMatches = (_source, { pageNum, pageSize, seasonId }, { dataSources }) => {
    const response = dataSources.matchDataSource.getPaginatedMatches(pageNum, pageSize, seasonId);
    return response;
}

const updateScores = (_source, { scoreUpdatePayload }, { dataSources }) => {
    console.log(' score update payload ', scoreUpdatePayload);
    const response = dataSources.matchDataSource.updateMatchesScore(scoreUpdatePayload);
    return response;
};

module.exports = {
    paginatedMatches,
    updateScores
}