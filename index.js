const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("public"));

// Serve static files
app.use(express.static(path.join(__dirname, "pages")));

// Routes

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "contact-me.html"));
});

// 404 page
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "pages", "404.html"));
});

const PORT = 8080;
app.listen(PORT, () =>
  console.log(`Server (index) running on http://localhost:${PORT}`)
);
