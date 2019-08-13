const fs = require('fs');
const webdriverio = require('webdriverio');
const options = require('../../wdio.conf');
const client = webdriverio.multiremote(options);

jest.setTimeout(30000);

beforeAll(() => {
    return client.init().url('https://dariast.github.io/portfolio/docs/admin/');
});

test('на странице есть кнопка "отправить"', () => {
    return client
        .isExisting('.sendBtn')
        .then(browsers => {
            for (const browserName in browsers) {
                expect(browsers[browserName]).toBe(true);
            }
        })
        .screenshot()
        .then(browsers => {
            for (const browserName in browsers) {
                fs.writeFileSync(`./screenshots/overlay_${browserName}_has_open.png`, browsers[browserName].value, 'base64');
            }
        });
});

afterAll(() => {
  return client.end();
});