const getFilteredValues = require('../src/getFilteredValues');

module.exports = async (req, res) => {
    try {
        await res.json(await getFilteredValues('ensemble', ''));
    } catch (e) {
        res.errorCode = 500;
        res.end('Error: ' + e.message);
    }
};
