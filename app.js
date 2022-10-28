const http = require("http");
const { readFileSync } = require("fs");

const homePage = readFileSync("./views/index.html");
const contactPage = readFileSync("./views/contact.html");
const aboutPage = readFileSync("./views/about.html");
const styling = readFileSync("./views/style.css");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(homePage);
  }
  // about page
  else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(aboutPage);
  }
  // contact page
  else if (url === "/contact") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(contactPage);
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("<h1>page not found</h1>");
  }
});

server.listen(3000);
