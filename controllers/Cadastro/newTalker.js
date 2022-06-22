const fs = require('fs');

const addNewTalker = (req, res) => {
  const { name, age, talk } = req.body;
  const talkerFile = JSON.parse(fs.readFileSync('talker.json'));
  const newTalker = {
    id: talkerFile.length + 1,
    name,
    age,
    talk,
  };
  talkerFile.push(newTalker);
  fs.writeFileSync('talker.json', JSON.stringify(talkerFile));
  res.status(201).json(newTalker);
};

module.exports = addNewTalker;
