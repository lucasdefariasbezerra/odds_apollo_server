const getAllTeams = (_source, _args, { dataSources }) => {
    return dataSources.teamDataSource.getAllTeams();
}

const getTeamById = (_source, { id }, { dataSources }) => {
    return dataSources.teamDataSource.getTeamById(id);
}

module.exports = {
    getAllTeams,
    getTeamById,
}
