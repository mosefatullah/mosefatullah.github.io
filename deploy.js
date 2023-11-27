import ghpages from "gh-pages";

ghpages.publish("dist", { cname: "sefatullah.me" }, (err) => {
 if (err) console.log(err);
 else console.log("Deployment Complete!");
});
