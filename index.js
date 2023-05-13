const Utilty = require("util.js")

let headers = new Headers();
let username = "b24172339ffc43889bb67a7b51fb3fc4";
let password = "3qhTK12dHPWb7BRKVgSxNPXrCx15LV0l";

headers.set(
  "Authorization",
  "Basic " + Buffer.from(username + ":" + password).toString("base64")
);



function calculateIlvl(characterResponse){
  console.log(characterResponse.equipped_items.filter(item => item.slot.type != "TABARD" && item.slot.type != "SHIRT" ).length)
}

function getCharacter(token) {
  fetch(
    "https://eu.api.blizzard.com/profile/wow/character/draenor/wallythepaly/equipment?namespace=profile-eu&locale=en_US&access_token="
      + token
  )
    .then((data) => data.json())
    .then((data) => getFilteredItems(data));
}

fetch("https://oauth.battle.net/token", {
  method: "POST",
  headers: {
    Authorization:
      "Basic " +
      btoa("ce8a396ce4624010a0424b603013e9c9:hhI1KzlxakD1tf886YUfu7pG8fYz5vAX"),
  },
  body: new URLSearchParams({
    grant_type: "client_credentials",
  }),
})
  .then((data) => data.json())
  .then((data) => getCharacter(data.access_token));
