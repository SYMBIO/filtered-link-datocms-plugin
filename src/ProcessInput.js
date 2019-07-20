const getFilteredValues = require('./getFilteredValues');

async function ProcessInput(InputString, returnField){

        let InputFilters = InputString.split(',');

        var Filter = {
                ModelApiKey: InputFilters[0].split('.')[0],
                FieldApiKey: (InputFilters[0].split('.')[1]).split('=')[0],
                DesiredValue: (InputFilters[0].split('.')[1]).split('=')[1],
        };

return getFilteredValues(Filter, returnField);
}

module.exports = ProcessInput;