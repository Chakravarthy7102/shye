const fs = require("fs");
const path = require("path");

//file path is relative to the src directory.
async function lowercaseKeys(relativeFilePath) {
	const filePath = path.join(__dirname, "..", "src", relativeFilePath);
	const jsonFile = JSON.parse(fs.readFileSync(filePath));

	let lowerCasedJson = {};

	for (key in jsonFile) {
		lowerCasedJson[key.toLowerCase()] = jsonFile[key];
	}

	fs.writeFileSync(filePath, JSON.stringify(lowerCasedJson));
}

lowercaseKeys("/data/colors.json");
