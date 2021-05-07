// put a table in place that displays the hall name and location for all dining halls on campus.

// "name"
// hall_name:
   // type: DataTypes.STRING,



// "location"
// hall_address: 
  //  type: DataTypes.STRING
  
  
const endpoint = 'C:\Users\jared\Documents\GitHub\Sequelize\routes\apiRoutes.js';
const name = [];

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => hall.push(...data))

    function findHalls(wordToMatch, zips){
      return zips.filter(loc => {
          const regex = new RegExp(wordToMatch, 'gi');
          return loc.zip.match(regex)
      });
  }