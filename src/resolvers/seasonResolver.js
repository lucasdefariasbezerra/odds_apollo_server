const getAllSeasons = (_source, _args, { dataSources }) => {
    return dataSources.seasonDataSource.getAllSeasons();
}

const getAllTournments = (_source, _args, { dataSources }) => {
    return dataSources.seasonDataSource.getAllTournments();
}

const getSeasonById = (_source, { id }, { dataSources }) => {
    return dataSources.seasonDataSource.getSeasonById(id);
}

const getPaginatedSeasons = (_source, { pageNum, pageSize }, { dataSources }) => {
    return dataSources.seasonDataSource.getPaginatedSeasons(pageNum, pageSize);
}

const addSeason = (_source, { seasonPayload }, { dataSources }) => {
    const response = dataSources.seasonDataSource.addSeason(seasonPayload);
    return response;
};

module.exports = {
    getAllSeasons,
    getSeasonById,
    getPaginatedSeasons,
    addSeason,
    getAllTournments
}
