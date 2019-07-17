require('babel-polyfill');
const SiteClient = require('datocms-client').SiteClient;

const client = new SiteClient('5dd428fe395f6270ac86b04c56e85c');
//types = models
//items = records

//Converts human-readable apiKey of specified model to non-readable ID
//Takes 1 parameter: -apiKey (apiKey of filtered Model to convert)
function apiKeyToID(apiKey){
client.itemTypes.all()
.then((types) => {
      types.forEach((type) => {
          try{
            if(type.collectionAppeareance === 'table' && type.apiKey === apiKey){
              console.log(type.id);
            }
          } catch {}
      });
    });
}

//Returns title value of specified model ID records
//Takes 2 parameters: -modelID (ID of filtered Model), -returnField (apiKey of field to be returned)
function getFilteredValues(){
  client.items.all({
    "filter[type]": "107674",
    "version": "published"
  })
    .then((items) => {
      items.forEach((item) => {
          try{
              if(item.statute === 'Vlastní'){
                console.log(item.title['cs']);
              } 
    } catch {}
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

  // apiKeyToID('ensemble');
  // getFilteredValues();

  client.fields.all('107674')
  .then((fields) => {
      fields.forEach((field) => {
            try{
              console.log(field);
            } catch {}
        });
    });
