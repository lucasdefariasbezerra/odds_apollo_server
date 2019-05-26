
const getAllCountries = (_source, _args, { dataSources }) => {
    return dataSources.countryDataSource.getAllCountries();
}

const getCountryById = (_source, { id }, { dataSources }) => {
    return dataSources.countryDataSource.getCountryById(id);
}

module.exports = {
    getAllCountries,
    getCountryById
}