const hello = require("./module1");
const path = require("path");
const fs = require("fs");
const fp = path.join("/content", "a");
const sayHi = (hello) => {
  console.log(`Yo ${hello}`);
};

fs.readFile("./file1.txt", "utf8", (e, r) => {
  if (e) {
    console.log(e);
    return;
  }
  const first = r;
  fs.readFile("./file2.txt", "utf8", (e, r) => {
    if (e) {
      console.log(e);
      return;
    }
    const second = r;

    fs.writeFile("./newText.txt", `Aa result of ${first},${second}`, (e, r) => {
        if (e) {
            console.log(e);
            return
        }
        console.log(r);
    });
  });
});
