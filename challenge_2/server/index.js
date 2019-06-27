const express = require("express");
const moment = require("moment");
const request = require("request");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();

app.use(express.json());
app.use(express.static(__dirname + "./../public"));

//start date
let startDate = moment()
  .subtract(14, "days")
  .format("YYYY-MM-DD");
//end date
let endDate = moment().format("YYYY-MM-DD");

app.get("/price", (req, res) => {
  let data = [];
  axios
    .get(
      `https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}`
    )
    .then(result => {
      data.push(Object.keys(result.data.bpi));
      data.push(Object.values(result.data.bpi));
      res.status(200).send(data);
    })
    .catch(err => res.status(400).send(err));
});

app.listen(3000, () => console.log("listening on port 3000!"));
