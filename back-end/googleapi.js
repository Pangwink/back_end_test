//import googleMapsClient from "@googlemaps/google-maps-services-js";
const {Client, Status} = require("@googlemaps/google-maps-services-js");
const client = new Client({});
 
client
  .elevation({
    params: {
      locations: [{ lat: 45, lng: -110 }],
      key: "AIsaSyCyB6KICFUQIFUQIRwVJ-nyXxd6W0rfiIBel2Q&libraries=places",
    },
    timeout: 1000, // milliseconds
  })
  .then((r) => {
    console.log(r.data.results[0].elevation);
  })
  .catch((e) => {
    console.log(e.response.data.error_message);
  });