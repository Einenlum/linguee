const linguee = function(
  cheerio,
  request,
  iconv,
  config,
  urlBuilder,
  responseTransformer
) {
  return {
    translate: function(query, opts, cb) {
      const url = urlBuilder.buildUrl(opts.from, opts.to, query);
      request(url, { encoding: null }, function(error, response, body) {
        const utf8body = iconv.decode(Buffer.from(body), 'ISO-8859-1');
        if (!error && response.statusCode == 200) {
          const resp = responseTransformer.transform(utf8body, query);
          cb(resp);
        }
      });
    }
  };
};

module.exports = linguee;
