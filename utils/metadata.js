var fs = require('fs');

for(var i = 0; i <10; i++) {
    var json = {}
    json.name = "Crazy Food #" + i;
    json.description = "Crazy Foods vol.1 is an epic collection of 5.000 artpieces. Each one representing the food variety this world has to offer. These foods will bring out your inner madness. Are you ready? This is Crazy Food #" + i;
    json.image = "ipfs://QmbtiPZfgUzHd79T1aPcL9yZnhGFmzwar7h4vmfV6rV8Kq/" + i + ".png";
    json.artist = "Wunbit"

    fs.writeFileSync('' + i, JSON.stringify(json));
}