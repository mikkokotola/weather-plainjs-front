document.addEventListener("DOMContentLoaded", (event) => {
  const aeris = new AerisWeather("AERISID", "AERISSECRET");

  const location = "lahti,fi";

  aeris
    .api()
    .endpoint("observations")
    .place(location)
    .get()
    .then((result) => {
      const data = result.data.ob;
      document.getElementById(
        "obs"
      ).innerHTML = `The current weather in Lahti, Finland is ${data.weatherPrimary.toLowerCase()} and ${
        data.tempC
      } degrees Celcius.`;
    });

  aeris
    .map()
    .layers("flat,radar,counties,admin")
    .center(location)
    .zoom(7)
    .size(1000, 600)
    .get()
    .then((result) => {
      // append result image to a DOM target
      document.getElementById("map-target").appendChild(result.image);

      // output image valid time to a DOM target
      document.getElementById(
        "map-metadata"
      ).innerHTML = `Valid: ${result.metadata.validDate}`;
    });

  aeris.apps().then((apps) => {
    const map = new apps.InteractiveMapApp("#ia-map", {
      map: {
        strategy: "leaflet",
        zoom: 4,
        layers: "satellite,radar",
      },
      panels: {
        layers: {
          buttons: [
            {
              id: "radar",
              value: "radar:80",
              title: "Radar",
            },
            {
              id: "satellite",
              value: "satellite:75",
              title: "Satellite",
            },
            {
              id: "alerts",
              value: "alerts",
              title: "Alerts",
            },
          ],
        },
      },
    });
  });
});
