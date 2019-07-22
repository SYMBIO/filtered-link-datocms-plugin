const getFilteredValues = require('./getFilteredValues');

async function ProcessInput(inputQuery, returnField){

        let InputFilters = inputQuery.split(',');

        var Filter = {
                ModelApiKey: InputFilters[0].split('.')[0],
                FieldApiKey: (InputFilters[0].split('.')[1]).split('=')[0],
                DesiredValue: (InputFilters[0].split('.')[1]).split('=')[1],
        };

return await getFilteredValues(Filter, returnField);
}

module.exports = ProcessInput;