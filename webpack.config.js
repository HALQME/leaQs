const path = require("path");

module.exports = {
    entry: {
        background: path.join(__dirname, "src/background.js"),
        content: path.join(__dirname, "src/content.js"),
        leaQs: path.join(__dirname, "src/leaQs.js"),
    },
    output: {
        path: path.join(__dirname, "dist/js"),
        filename: "[name].js",
    },
};
