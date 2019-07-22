require("dotenv").config();

const SiteClient = require("datocms-client").SiteClient;

const client = new SiteClient(process.env.DATOCMS_TOKEN);
//types = models
//items = records

/**
 * Converts human-readable apiKey of specified model to non-readable ID
 * @param apiKey apiKey of filtered Model to convert
 */
async function apiKeyToId(apiKey) {
    let ModelID;
    var types = await client.itemTypes.all();
    types.forEach((type) => {
        if (type.collectionAppeareance === "table" && type.apiKey === apiKey) {
            ModelID = type.id;
        }
    });
    return ModelID;
}

/**
 * Returns title value of specified model ID records
 * @param modelApiKey apiKey of filtered Model
 * @param returnField apiKey of field to be returned
 */
async function getFilteredValues(Filter, returnField){
    var returnedValues = [];

    var items = await client.items.all({
        "filter[type]": await apiKeyToId(Filter.ModelApiKey),//107674
        "version": "published"
    });
    items.forEach((item) => {
        if (eval("item."+Filter.FieldApiKey) === Filter.DesiredValue) {
            var returnedObject = {value: item.id, text: eval("item."+returnField)};
            returnedValues.push(returnedObject);
        }
    });
    return returnedValues;
}

module.exports = getFilteredValues;