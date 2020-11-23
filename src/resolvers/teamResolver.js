const getAllTeams = (_source, _args, { dataSources }) => {
    return dataSources.teamDataSource.getAllTeams();
}

const getTeamById = (_source, { id }, { dataSources }) => {
    return dataSources.teamDataSource.getTeamById(id);
}

const getPaginatedTeams = (_source, { pageNum, pageSize }, { dataSources }) => {
    return dataSources.teamDataSource.getPaginatedTeam(pageNum, pageSize);
}

const updateTeams = (_source, { teamPayload }, { dataSources }) => {
    const response = dataSources.teamDataSource.updateTeam(teamPayload);
    return response;
}

module.exports = {
    getAllTeams,
    getTeamById,
    getPaginatedTeams,
    updateTeams,
}
