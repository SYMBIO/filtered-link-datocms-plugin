require("dotenv").config();

const SiteClient = require("datocms-client").SiteClient;

const client = new SiteClient(process.env.DATOCMS_TOKEN);
//types = models
//items = records

/**
 * Converts human-readable apiKey of specified model to non-readable ID
 * @param apiKey apiKey of filtered Model to convert
 */
function apiKeyToId(apiKey) {
    client.itemTypes.all()
        .then((types) => {
            types.forEach((type) => {
                try {
                    if (type.collectionAppeareance === "table" && type.apiKey === apiKey) {
                        console.log(type.id);
                    }
                } catch (e) {
                }
            });
        });
}

/**
 * Returns title value of specified model ID records
 * @param modelId key of filtered Model
 * @param returnField apiKey of field to be returned
 */
async function getFilteredValues(model, returnField) {
    try {
        var modelId = await apiKeyToId(model);

        var items = await client.items.all({
            "filter[type]": modelId,
            "version": "published"
        });

        items.forEach((item) => {
            try {
                if (item.statute === "Vlastní") {
                    console.log(item.title["cs"]);
                }
            } catch (e) {
            }
        });
    } catch (error) {
        console.log(error);
    }

    return [
        {
            value: 1,
            text: "Item 1"
        },
        {
            value: 2,
            text: "Item 2"
        }
    ];
}

module.exports = getFilteredValues;