const responseTransformer = function(config, urlBuilder, cheerio) {
  const getWord = require('./responseTransformer/word')(urlBuilder);
  const getExamples = require('./responseTransformer/examples')(urlBuilder);

  return function(responseBody, query) {
    const $ = cheerio.load(responseBody);
    const $container = $('.exact');

    const getWords = function() {
      const $wordContainers = $container.find('.lemma');
      const words = [];
      $wordContainers.each(function(index, wordContainer) {
        words.push(getWord($(wordContainer)));
      });

      return words;
    };

    const $examples = $('.example_lines');

    return {
      query: query,
      words: getWords(),
      examples: getExamples($examples)
    };
  };
};

module.exports = responseTransformer;
