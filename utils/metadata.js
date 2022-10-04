var fs = require('fs');

for(var i = 1; i <10; i++) {
    var json = {}
    json.name = "Crazy Food #" + i;
    json.description = "Crazy Foods vol.1 is an epic collection of 7.500 art pieces. Each one represents the food variety this world has to offer. These foods will bring out your inner madness. Are you ready? This is Crazy Food #" + i;
    json.image = "ipfs://bafybeic455qzhnnbntwzn4amh5d465axby5llpuqkwpdyz6w6f54thtu2e/" + i + ".png";
    json.artist = "Wunbit";
    json.external_url = "https://wunbit.com",
    json.attributes = [
        {
          "trait_type": "Background",
          "value": "Sky Blue"
        },
        {
          "trait_type": "Eyes",
          "value": "Two"
        },
        {
          "trait_type": "Feeling",
          "value": "Crazy"
        },
        {
          "trait_type": "Flavor",
          "value": "Salty"
        },
        {
          "trait_type": "Type",
          "value": "Pickle"
        }
      ],

    fs.writeFileSync('' + i + '.json', JSON.stringify(json, null, 4));
}