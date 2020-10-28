const withImages = require("next-images");
module.exports = withImages({
  env: {
    MAPBOX_TOKEN: process.env.MAPBOX_TOKEN,
  },
});
