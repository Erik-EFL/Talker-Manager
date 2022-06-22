const fs = require('fs');

const editTalker = (req, res) => {
  const { name, age, talk } = req.body;
  const { id } = req.params;

  const talkerFile = JSON.parse(fs.readFileSync('talker.json'));
  const findTalker = talkerFile.map(
    (talker) =>
    (talker.id === Number(id) ? { id: Number(id), name, age, talk } : talker),
);

  const editedTalker = findTalker.find((talker) => talker.id === Number(id));
  fs.writeFileSync('talker.json', JSON.stringify(findTalker));
  res.status(200).json(editedTalker);
};

module.exports = editTalker;
