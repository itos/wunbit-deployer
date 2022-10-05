var fs = require('fs');

Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

var attribute_origin = fs.readFileSync('./attributes_list/origin.csv').toString().split("\n");
for(i in attribute_origin) {
    //console.log(attribute_origin[i]);
}

var attribute_food = fs.readFileSync('./attributes_list/food.csv').toString().split("\n");
for(i in attribute_food) {
    //console.log(attribute_food[i]);
}

for(var i = 1; i <5; i++) {
    var json = {}
    json.name = "Crazy Food #" + [i-1];
    json.description = "Crazy Foods vol.1 is an epic collection of 7.500 art pieces. Each one represents the food variety this world has to offer. These foods will bring out your inner madness. Are you ready? This is Crazy Food #" + [i-1];
    json.image = "ipfs://bafybeic455qzhnnbntwzn4amh5d465axby5llpuqkwpdyz6w6f54thtu2e/" + [i-1] + ".png";
    json.artist = "Wunbit";
    json.external_url = "https://wunbit.com",
    json.attributes = [
        {
          "trait_type": "Serial",
          "display_type": "number",
          "value": i-1
        },
        {
          "trait_type": "Cooking",
          "value": "Cooking"
        },
        {
          "trait_type": "Feeling",
          "value": "Default Feeling"  
        },
        {
          "trait_type": "Flavor",
          "value": ['Acid','Bitter','Cool','Delicious','Hot','Meaty','Salty','Sour','Sweat','Tasty','Umami','Spicy'].random()
        },
        {
          "trait_type": "Origin",
          "value": attribute_origin.random()
        },
        {
          "trait_type": "Food",
          "value": attribute_food[i-1].trim('\r')
        }
      ],

      fs.writeFileSync('' + i-1 + '.json', JSON.stringify(json, null, 4));
}