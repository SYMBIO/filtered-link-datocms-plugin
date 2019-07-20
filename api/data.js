const getFilteredValues = require('../src/getFilteredValues');
const ProcessInput = require('../src/ProcessInput');

module.exports = async (req, res) => {
    try {
        await res.json(await ProcessInput(req.body.inputQuery, req.body.returnField));
    } catch (e) {
        res.errorCode = 500;
        res.end('Error: ' + e.message);
    }
};
