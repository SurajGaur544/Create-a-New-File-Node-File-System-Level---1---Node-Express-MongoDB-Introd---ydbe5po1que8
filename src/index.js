const fs = require("fs/promises");
const fileName = "myfile.txt";
const fileContent = "Newton School";
const writeFile = async (fileName, fileContent) => {
  // write code here
  // dont change function name
  fs.appendFile(fileName,fileContent,function(err) {
    if(err) throw err;
    console.log("file is created");
})
};
writeFile(fileName, fileContent);

module.exports = { writeFile };
