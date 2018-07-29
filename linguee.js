const request = require('request');
const iconv = require('iconv-lite');
const querystring = require('querystring');
const cheerio = require('cheerio');
const config = require('./config');
const urlBuilder = require('./src/urlBuilder')(config, querystring);
const transformResponse = require('./src/responseTransformer')(
  config,
  urlBuilder,
  cheerio
);

module.exports = {
  translate: function(query, opts, cb) {
    const url = urlBuilder.buildUrl(opts.from, opts.to, query);
    request(url, { encoding: null }, function(error, response, body) {
      const utf8body = iconv.decode(Buffer.from(body), 'ISO-8859-1');
      if (!error && response.statusCode == 200) {
        const resp = transformResponse(utf8body, query);
        cb(resp);
      }
    });
  }
};
