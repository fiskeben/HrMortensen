module.exports = function () {
  var replies = [
    '... og det var mange penge dengang.',
    'Og det var mange penge dengang!',
    'Og dét var mange penge dengang.'
  ],
  index = Math.floor(Math.random() * replies.length);
  return replies[index];
}
