const wdio = require('webdriverio');
const path = require('path');

const options = { 
  port: 4723,
  desiredCapabilities: { 
    platformName: 'iOS',
    platformVersion: '11.0',
    deviceName: 'iPhone 6',
    app: path.resolve(__dirname, 'UICatalog.app.zip'),
    automationName: 'XCUITest',
    newCommandTimeout: 0,
}};

const driver = wdio.remote(options);
driver
  .init()
  .click('~Action Sheets')
  .element('~Okay / Cancel')
  .then((element) => {
    return driver.touchPerform({
      action: 'tap',
      options: {
        element: element.value.ELEMENT,
      }
    });
  })
  .end()
  .catch((err) => {
    console.log(err);
    driver.end();
  });