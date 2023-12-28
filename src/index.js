const fs = require("fs/promises");
const fileName = "myfile.txt";
const fileContent = "Newton School";
const writeFile = async (fileName, fileContent) => {
  // write code here
  // dont change function name
  try {
    await fs.writeFile(fileName, fileContent);
    console.log(`File ${fileName} created and data written successfully!`);
  } catch (err) {
    console.error(`Error writing to file ${fileName}: ${err.message}`);
  }
};
writeFile(fileName, fileContent);

module.exports = { writeFile };
