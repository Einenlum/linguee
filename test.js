const linguee = require('./index');

linguee.translate('money', { from: 'eng', to: 'fra' }, function(response) {
  console.log(JSON.stringify(response, 2, null));
});
