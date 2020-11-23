const handleError = (error) => {
    const { extensions } = error;
    const { response } = extensions;
    if (response.status === 404 || response.status === 400) {
            throw new Error(response.body.message);
    }
}

module.exports = {
    handleError
}