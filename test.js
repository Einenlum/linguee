const linguee = require('./index');

linguee
  .translate('cacaboudin', { from: 'eng', to: 'fra' })
  .then(function(response) {
    console.log(JSON.stringify(response, 2, null));
  })
  .catch(function(error) {
    console.log(error);
  });
