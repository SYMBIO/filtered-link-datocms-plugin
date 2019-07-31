const getFilteredValues = require('./getFilteredValues');

/**
 * Handles splitting the inputQuery string into fundamental filter properties
 * @param inputQuery represents the filter string passed in by user in field configuration dialogue
 * @param returnField represents the field to be returned -- then will be loaded to the visible <select/>
*/
async function ProcessInput(inputQuery, returnField) {

        let FilterType = GetFilterType(inputQuery);

        var Filter = {
                ModelApiKey: inputQuery.split('.')[0],
                FieldApiKey: (inputQuery.split('.')[1]).split('{' + FilterType + '}')[0],
                DesiredValue: (inputQuery.split('.')[1]).split('{' + FilterType + '}')[1],
        };

        return await getFilteredValues(FilterType, Filter, returnField);
}

/**
 * Gets filter operator written inside of curly brackets, ie. {in},{=},...
 * @param InputFilter full inputQuery string
*/
function GetFilterType(InputFilter) {
        return InputFilter.split('{')[1].split('}')[0];
}

module.exports = ProcessInput;