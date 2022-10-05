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

for(var i = 1; i <2; i++) {
    var json = {}

    cooking = attribute_cooking.random();
    feeling = attribute_feeling.random();
    flavor = attribute_flavor.random();
    origin = attribute_origin.random();
    food = attribute_food[i-1].trim('\r');
    label = attribute_label.random();

    json.name = flavor + ' ' + feeling + ' ' + food;
    json.description = food + " obtained in a " + origin.toLowerCase() + " with a" + flavor.toLowerCase() + " flavor. " + "Is feeling " + feeling.toLowerCase() + " about being " + cooking.toLowerCase() + ".";
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
          "value": cooking
        },
        {
          "trait_type": "Feeling",
          "value": feeling
        },
        {
          "trait_type": "Flavor",
          "value": flavor
        },
        {
          "trait_type": "Origin",
          "value": origin
        },
        {
          "trait_type": "Food",
          "value": food
        },
        {
          "trait_type": "Label",
          "value": label
        }
      ],

      fs.writeFileSync('' + i-1 + '.json', JSON.stringify(json));
}