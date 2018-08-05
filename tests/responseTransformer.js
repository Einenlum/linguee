const test = require('tape');
const cheerio = require('cheerio');
const fs = require('fs');
const config = {
  domain: 'http://somedomain.com'
};
const urlBuilder = {
  buildAudioUrl: function(path) {
    return `http://somedomain.com/mp3/${path}`;
  }
};
const translationsTransformer = require('../src/responseTransformer/word/translations')(
  cheerio,
  urlBuilder
);
const lessCommonTranslationsTransformer = require('../src/responseTransformer/word/lessCommonTranslations')(
  cheerio
);
const wordTransformer = require('../src/responseTransformer/word')(
  urlBuilder,
  translationsTransformer,
  lessCommonTranslationsTransformer
);
const examplesTransformer = require('../src/responseTransformer/examples')(
  cheerio,
  urlBuilder
);

const responseTransformer = require('../src/responseTransformer')(
  wordTransformer,
  examplesTransformer,
  config,
  urlBuilder,
  cheerio
);

test('it returns a translation object from an html response', function(assert) {
  const examples = [
    {
      query: 'buy',
      dir: 'buy-eng-rus'
    },
    {
      query: 'dictionnaire',
      dir: 'dictionnaire-fra-por'
    },
    {
      query: '历',
      dir: 'history-chi-eng'
    }
  ];

  const getInputPath = function(dir) {
    return `${__dirname}/fixtures/${dir}/input.html`;
  };
  const getExpectedPath = function(dir) {
    return `${__dirname}/fixtures/${dir}/expected.js`;
  };
  for (let example of examples) {
    const input = fs.readFileSync(getInputPath(example.dir));
    const expected = require(getExpectedPath(example.dir));

    assert.deepEquals(
      responseTransformer.transform(input, example.query),
      expected
    );
  }
  assert.end();
});
