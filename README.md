# linguee

Bilingual word translation straight from Linguee website

## Installation

`npm install linguee`

## Warning

As Linguee does not provide an API we need to request the translation page and parse it. Obviously, if Linguee changes it's DOM, probably this will break and also need changes. Proceed with caution.

## Usage

Example:

```javascript
var linguee = require('linguee');

// translate money from english to portuguese

linguee.translate('money', { from: 'eng', to: 'por' }, function(resp) {
  console.log(resp);
  /** Outputs :
    {
      query: 'money',
      words: [
        {
          term: 'money',
          audio:
            'http://www.linguee.com/mp3/EN_US/97/9726255eec083aa56dc0449a21b33190-101',
          additionalInfo: null,
          type: 'noun',
          translations: [
            {
              term: 'dinheiro',
              audio:
                'http://www.linguee.com/mp3/PT_BR/79/79de84b440a2419610355782ac900622-106',
              type: 'm',
              alternatives: [],
              examples: [
                {
                  from: 'My friend still owes me some money. ',
                  to: 'Meu amigo ainda me deve algum dinheiro.',
                },
                {
                  from: 'I want to withdraw money from my account.',
                  to: 'Eu quero retirar dinheiro da minha conta.',
                },
              ],
            },
          ],
          lessCommonTranslations: [
            {
              term: 'capital',
              type: 'm',
              usage: null,
            },
            {
              term: 'moeda',
              type: 'f',
              usage: null,
            },
            {
              term: 'verba',
              type: 'f',
              usage: null,
            },
            {
              term: 'riqueza',
              type: 'f',
              usage: null,
            },
            {
              term: 'numerário',
              type: 'm',
              usage: null,
            },
            {
              term: 'fortuna',
              type: 'f',
              usage: null,
            },
          ],
        },
        {
          term: 'money',
          audio:
            'http://www.linguee.com/mp3/EN_UK/97/9726255eec083aa56dc0449a21b33190-0',
          additionalInfo: null,
          type: 'noun as adjective',
          translations: [],
          lessCommonTranslations: [
            {
              term: 'monetário',
              type: 'adj',
              usage: null,
            },
            {
              term: 'financeira',
              type: 'adj',
              usage: null,
            },
            {
              term: 'monetária',
              type: 'adj',
              usage: null,
            },
            {
              term: 'cambial',
              type: 'adj',
              usage: null,
            },
          ],
        },
      ],
      examples: [
        {
          from: {
            content: 'save money',
            type: 'v',
            audio:
              'http://www.linguee.com/mp3/EN_US/87/87a54e4508b4bdadce59ab1dce8f05b6-200',
          },
          to: [
            {
              content: 'juntar dinheiro',
              type: 'v',
            },
          ],
        },
        {
          from: {
            content: 'money laundering',
            type: 'n',
            audio:
              'http://www.linguee.com/mp3/EN_US/4e/4e2fc1ee379cc810479191977f31972a-101',
          },
          to: [
            {
              content: 'branqueamento de capital',
              type: 'm',
            },
          ],
        },
        {
          from: {
            content: 'money market',
            type: 'n',
            audio:
              'http://www.linguee.com/mp3/EN_US/50/50fa9efcf444a86b33ce03fee484cd5c-101',
          },
          to: [
            {
              content: 'mercado monetário',
              type: 'm',
            },
            {
              content: 'mercado de capitais',
              type: 'm',
            },
          ],
        },
      ],
    };
    */
```

## Supported Languages ISO 639-2/B codes

| Language |    Code    |
| :------: | :--------: |
|   eng    |  English   |
|   ger    |   German   |
|   fra    |   French   |
|   spa    |  Spanish   |
|   chi    |  Chinese   |
|   rus    |  Russian   |
|   jpn    |  Japanese  |
|   por    | Portuguese |
|   ita    |  Italian   |
|   dut    |   Dutch    |
|   pol    |   Polish   |
|   swe    |  Swedish   |
|   dan    |   Danish   |
|   fin    |  Finnish   |
|   gre    |   Greek    |
|   cze    |   Czech    |
|   rum    |  Romanian  |
|   hun    | Hungarian  |
|   slo    |   Slovak   |
|   bul    | Bulgarian  |
|   slv    |  Slovene   |
|   lit    | Lithuanian |
|   lav    |  Latvian   |
|   est    |  Estonian  |
|   mlt    |  Maltese   |

## Tests

Run `npm run test`

## License

MIT

Linguee Terms and Conditions: http://www.linguee.com/english-portuguese/page/termsAndConditions.php
