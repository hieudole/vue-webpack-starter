const path      = require('path');
const express   = require('express');
const config    = require('../config');

const app = express();
const port = 5000;

app.use(express.static(config.build.assetsRoot));

app.get("*", (req, res) => {
  res.sendFile(path.join(config.build.assetsRoot, "index.html"));
});

app.listen(port, () => {
  console.log(`Server is up and listening at ${port}!`);
});
