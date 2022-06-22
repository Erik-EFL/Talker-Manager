/* Requisito 1 */

const fs = require('fs');

const readContentFile = (_req, res) => {
    const talkerFile = JSON.parse(fs.readFileSync('talker.json'));
    if (!talkerFile) return res.status(200).json([]);
    res.status(200).json(talkerFile);
};

module.exports = readContentFile;
