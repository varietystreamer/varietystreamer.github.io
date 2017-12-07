window.onload = function() {
  //twitch stuff
  var live = document.getElementById("live");
  var img = document.getElementById("main")
  var print = console.log;
  var clientID = "fhsmf83hxlkz35cza4d8fo6g7apfi8k";
  var url = `https://api.twitch.tv/kraken/streams/willardjbradley?client_id=${clientID}`;
  var games = ["The Legend of Zelda", "Zelda II: The Adventure of Link", "The Legend of Zelda: A Link to the Past"]
  fetch(url)
  .then(res => res.json())
  .then(data => {
    if(data.stream != null) {
      if(games.indexOf(data.stream.game) === -1) {
        live.innerHTML = `\<center>I've currently live!<br>Playing <s>${data.stream.game}</s><br>The Legend of Zelda: A Link to the Past Randomizer!`;
        main.style.borderColor = "green";
      } else {
        live.innerHTML = `\<center>I've currently live!<br><p>Playing <span id="rainbow">V A R I E T Y</span></p>`;
        main.style.borderColor = "green";
      }
    } else {
      live.innerHTML = "<center>I'm not live!";
      main.style.borderColor = "red";
    }
  })
}
