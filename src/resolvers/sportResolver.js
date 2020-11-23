const getAllSports = (_source, _args, { dataSources }) => {
    const { sportDataSource } = dataSources;
    return sportDataSource.getAllSports();
}

module.exports = {
    getAllSports
}