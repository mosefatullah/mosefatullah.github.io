import ghpages from "gh-pages";

var callback = function (err) {
 if (err) {
  console.log(err);
 } else {
  console.log("Deployed Successfully!");
 }
};
ghpages.publish("dist", { cname: "sefatullah.me" }, callback);