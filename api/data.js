const getFilteredValues = require('../src/getFilteredValues');
const ProcessInput = require('../src/ProcessInput');

module.exports = async (req, res) => {
    try {
        await res.json(await ProcessInput('ensemble.statute=Vlastní', 'title'));
    } catch (e) {
        res.errorCode = 500;
        res.end('Error: ' + e.message);
    }
};
