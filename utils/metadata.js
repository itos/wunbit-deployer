var fs = require('fs');

for(var i = 0; i <10; i++) {
    var json = {}
    json.name = "Crazy Food #" + i;
    json.description = "Crazy Foods vol.1 is an epic collection of 5.000 art pieces. Each one represents the food variety this world has to offer. These foods will bring out your inner madness. Are you ready? This is Crazy Food #" + i;
    json.image = "ipfs://bafybeic455qzhnnbntwzn4amh5d465axby5llpuqkwpdyz6w6f54thtu2e/" + i + ".png";
    json.artist = "Wunbit"

    fs.writeFileSync('' + i, JSON.stringify(json));
}