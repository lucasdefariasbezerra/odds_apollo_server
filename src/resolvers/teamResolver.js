const getAllTeams = (_source, _args, { dataSources }) => {
    return dataSources.teamDataSource.getAllTeams();
}

const getTeamById = (_source, { id }, { dataSources }) => {
    return dataSources.teamDataSource.getTeamById(id);
}

const getPaginatedTeams = (_source, { pageNum, pageSize }, { dataSources }) => {
    return dataSources.teamDataSource.getPaginatedTeam(pageNum, pageSize);
}

module.exports = {
    getAllTeams,
    getTeamById,
    getPaginatedTeams,
}
