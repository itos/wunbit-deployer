var fs = require('fs');

Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

var attribute_cooking = fs.readFileSync('./attributes_list/cooking.txt').toString().split("\r\n");
for(i in attribute_cooking) {
    //console.log(attribute_cooking[i]);
}

var attribute_feeling = fs.readFileSync('./attributes_list/feeling.txt').toString().split("\r\n");
for(i in attribute_feeling) {
    //console.log(attribute_feeling[i]);
}

var attribute_flavor = fs.readFileSync('./attributes_list/flavor.txt').toString().split("\r\n");
for(i in attribute_flavor) {
    //console.log(attribute_flavor[i]);
}

var attribute_origin = fs.readFileSync('./attributes_list/origin.txt').toString().split("\r\n");
for(i in attribute_origin) {
    //console.log(attribute_origin[i]);
}

var attribute_food = fs.readFileSync('./attributes_list/food.txt').toString().split("\n");
for(i in attribute_food) {
    //console.log(attribute_food[i]);
}

var attribute_label = fs.readFileSync('./attributes_list/label.txt').toString().split("\r\n");
for(i in attribute_label) {
    //console.log(attribute_type[i]);
}

for(var i = 1; i <11; i++) {
    var json = {}
    json.name = "Crazy Food #" + [i-1];
    json.description = "Crazy Foods vol.1 is an epic collection of 7.500 art pieces. Each one represents the food variety this world has to offer. These foods will bring out your inner madness. Are you ready? This is Crazy Food #" + [i-1];
    json.image = "ipfs://bafybeicivtikjz7golnkvqhihfitps3gajhpqdixsb3ktfyji7xksspwym/" + [i-1] + ".png";
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
          "value": attribute_cooking.random()
        },
        {
          "trait_type": "Feeling",
          "value": attribute_feeling.random()
        },
        {
          "trait_type": "Flavor",
          "value": attribute_flavor.random()
        },
        {
          "trait_type": "Origin",
          "value": attribute_origin.random()
        },
        {
          "trait_type": "Food",
          "value": attribute_food[i-1].trim('\r')
        },
        {
          "trait_type": "Label",
          "value": attribute_label.random()
        }
      ],

      fs.writeFileSync('' + i-1 + '.json', JSON.stringify(json, null, 4));
}