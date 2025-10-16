import express from "express";

const app = express();

// app.set("view engine", "ejs"); // ✅ tells Express to use EJS

let products = [
  { title: "iphone-16 ", price: "75K" },
  { title: "samsung-ultra ", price: "95K" },
  { title: "google pixel ", price: "65K" },
];

app.get("/", (req, res) => {
  let name = "Ram";

//   res.render("index.", { name, products });   // ✅ no ".ejs" ,If later you switch the template engine (to Handlebars, Pug, etc.), you just change the app.set("view engine", "...") . No need to edit all res.render() calls.

  res.render("index.ejs", { name, products });
});
 
const port = 3000;
app.listen(port, () => console.log(`server is running on port ${port}`));
