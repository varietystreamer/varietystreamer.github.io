window.onload = function() {
  var live = document.getElementById("live");
  var img = document.getElementById("main")
  var print = console.log;
  var clientID = "fhsmf83hxlkz35cza4d8fo6g7apfi8k";
  var url = `https://api.twitch.tv/kraken/streams/willardjbradley?client_id=${clientID}`;
  fetch(url)
  .then(res => res.json())
  .then(data => {
    if(data.stream != null) {
      if(data.stream.game != "The Legend of Zelda: A Link to the Past") {
        live.innerHTML = `\<center>I'm currently live!<br>Playing <s>${data.stream.game}</s><br>The Legend of Zelda: A Link to the Past Randomizer!`;
        main.style.borderColor = "green";
      } else {
        live.innerHTML = `\<center>I'm currently live!<br><p id="rainbow">Playing V A R I E T Y</p>`;
        main.style.borderColor = "green";
      }
    } else {
      live.innerHTML = "<center>I'm not live!";
      main.style.borderColor = "red";
    }
  })
}
