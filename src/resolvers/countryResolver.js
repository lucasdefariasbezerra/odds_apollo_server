
const getAllCountries = (_source, _args, { dataSources }) => {
    return dataSources.countryDataSource.getAllCountries();
}

const getCountryById = (_source, { id }, { dataSources }) => {
    return dataSources.countryDataSource.getCountryById(id);
}

const paginatedCountries = (_source, { pageNum, pageSize }, { dataSources }) => {
    return dataSources.countryDataSource.getPaginatedCountries(pageNum, pageSize);
}

module.exports = {
    getAllCountries,
    getCountryById,
    paginatedCountries
}