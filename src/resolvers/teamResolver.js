const getAllTeams = (_source, _args, { dataSources }) => {
    return dataSources.teamDataSource.getAllTeams();
}

const getTeamById = (_source, { id }, { dataSources }) => {
    try {
        return dataSources.teamDataSource.getTeamById(id);
    } catch (error) {
        console.log('error on resolve ', error);
    }
    
}

const getPaginatedTeams = (_source, { pageNum, pageSize }, { dataSources }) => {
    return dataSources.teamDataSource.getPaginatedTeam(pageNum, pageSize);
}

const updateTeams = (_source, { teamPayload }, { dataSources }) => {
    const response = dataSources.teamDataSource.updateTeam(teamPayload);
    return response;
}

const addTeam = (_source, { teamPayload }, { dataSources }) => {
    const response = dataSources.teamDataSource.addTeam(teamPayload);
    return response;
};

module.exports = {
    getAllTeams,
    getTeamById,
    getPaginatedTeams,
    updateTeams,
    addTeam,
}
