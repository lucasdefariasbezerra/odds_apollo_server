
const paginatedMatches = (_source, { pageNum, pageSize }, { dataSources }) => {
    const response = dataSources.matchDataSource.getPaginatedMatches(pageNum, pageSize);
    return response;
}

module.exports = {
    paginatedMatches
}