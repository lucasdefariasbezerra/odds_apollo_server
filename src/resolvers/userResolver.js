const userInfo = (_source, _args, { dataSources }) => {
    const { userDataSource } = dataSources
    return userDataSource.currentUser();
}

module.exports = {
    userInfo
};