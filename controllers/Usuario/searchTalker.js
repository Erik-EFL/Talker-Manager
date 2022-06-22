/* Requisito 2 */

const fs = require('fs');

const talkerById = (req, res) => {
  const content = JSON.parse(fs.readFileSync('talker.json'));
  const { id } = req.params;

  const talker = content.find((ftk) => ftk.id === Number(id));
  if (!talker) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  res.status(200).json(talker);
};

/* requisito 8 */
const searchTaker = (req, res) => {
  const { q: term } = req.query;
  const content = JSON.parse(fs.readFileSync('talker.json'));

  if (!term) return res.status(200).json(content);

  const filterTalker = content.filter(({ name }) => name.includes(term));

  return res.status(200).json(filterTalker);
};

module.exports = {
  searchTaker,
  talkerById,
};
