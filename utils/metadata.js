var fs = require('fs');

Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

for(var i = 1; i <5; i++) {
    var json = {}
    json.name = "Crazy Food #" + i;
    json.description = "Crazy Foods vol.1 is an epic collection of 7.500 art pieces. Each one represents the food variety this world has to offer. These foods will bring out your inner madness. Are you ready? This is Crazy Food #" + i;
    json.image = "ipfs://bafybeic455qzhnnbntwzn4amh5d465axby5llpuqkwpdyz6w6f54thtu2e/" + i + ".png";
    json.artist = "Wunbit";
    json.external_url = "https://wunbit.com",
    json.attributes = [
        {
          "trait_type": "Background",
          "value": "Default Background"
        },
        {
          "trait_type": "Eyes",
          "value": "Default Eyes"
        },
        {
          "trait_type": "Feeling",
          "value": ['Acid','Bitter','Cool','Delicious','Hot','Meaty','Salty','Sour','Sweat','Tasty','Umami','Spicy'].random()
        },
        {
          "trait_type": "Flavor",
          "value": "Default Flavor"
        },
        {
          "trait_type": "Type",
          "value": "Default Pickle"
        }
      ],

      fs.writeFileSync('' + i + '.json', JSON.stringify(json, null, 4));
}