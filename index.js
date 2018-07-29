const linguee = require('./linguee');

linguee.translate('pretty', { from: 'eng', to: 'fra' }, function(res) {
  console.log(JSON.stringify(res, null, 2));
});
