const express = require("express");
const moment = require("moment");
const request = require("request");

const app = express();

app.use(express.json());
app.use(express.static(__dirname + "./../public"));

//start date
let startDate = moment()
  .subtract(14, "days")
  .format("YYYY-MM-DD");
//end date
let endDate = moment().format("YYYY-MM-DD");

//get request to get data from api
// app.get("/coinData", (req, res) => {
//   axios
//     .get(
//       `https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}`
//       // `https://api.coindesk.com/v1/bpi/historical/close.json?start=2013-09-02&end=2013-09-05`
//     )
//     .then(res => {
//       console.log("start", startDate);
//       console.log("end", endDate);
//       console.log("data", res.data.bpi);
//       res.status(200).send(res.data);
//     })
//     .catch(err => {
//       res.status(500).send(err);
//     });
// });

app.get("/price", (req, res) => {
  request(
    `https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}`,
    (err, data) => {
      if (err) {
        res.send(err).status(500);
        console.log(err);
      } else {
        res.send(data.body);
      }
    }
  );
});

app.listen(3000, () => console.log("listening on port 3000!"));
