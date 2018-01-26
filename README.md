There is a bug in processing basic gestures from `webdriver.io`.

Successful tap gesture on an element with `wd` (https://github.com/appium/appium-xcuitest-driver/blob/master/test/functional/basic/gesture-e2e-specs.js#L68-L83):
```
info HTTP --> POST /wd/hub/session/53848fae-c6f0-480f-b3c0-544b7bb72004/touch/perform {"actions":[{"action":"tap","options":{"element":"D06105A4-386D-48D5-8E8C-75FD78F1E0BC"}}]}
dbug MJSONWP Calling XCUITestDriver.performTouch() with args: [[{"action":"tap","options":{"element":"D06105A4-386D-48D5-8E8C-75FD78F1E0BC"}}],"53848fae-c6f0-480f-b3c0-544b7bb72004"]
dbug XCUITest Executing command 'performTouch'
dbug XCUITest Received the following touch action: tap(options={"element":"D06105A4-386D-48D5-8E8C-75FD78F1E0BC"})
dbug XCUITest Found matching gesture: tap
dbug JSONWP Proxy Proxying [POST /wda/tap/D06105A4-386D-48D5-8E8C-75FD78F1E0BC] to [POST http://localhost:8100/session/05542DB5-1F4F-4B4E-B708-C3DCFC747515/wda/tap/D06105A4-386D-48D5-8E8C-75FD78F1E0BC] with body: {}
dbug JSONWP Proxy Got response with status 200: {"value":{},"sessionId":"05542DB5-1F4F-4B4E-B708-C3DCFC747515","status":0}
dbug MJSONWP Responding to client with driver.performTouch() result: null
info HTTP <-- POST /wd/hub/session/53848fae-c6f0-480f-b3c0-544b7bb72004/touch/perform 200 937 ms - 76
```

Failing `webdriver.io` logs:
[HTTP] --> POST /wd/hub/session/29a084af-4ecc-45de-a2f6-e0be192ba0f9/touch/perform {"actions":{"action":"tap","options":{"element":"AF12A1ED-836E-43DA-B06B-0BAB82E2C1F1"}}}
[debug] [MJSONWP] Calling AppiumDriver.performTouch() with args: [{"action":"tap","options":{"element":"AF12A1ED-836E-43DA-B06B-0BAB82E2C1F1"}},"29a084af-4ecc-45de-a2f6-e0be192ba0f9"]
[debug] [XCUITest] Executing command 'performTouch'
[MJSONWP] Encountered internal error running command: TypeError: gestures.map is not a function
    at gesturesChainToString (/Users/isaac/.nvm/versions/node/v6.12.0/lib/node_modules/appium/node_modules/appium-xcuitest-driver/lib/commands/gesture.js:64:19)
    at XCUITestDriver.callee$0$0$ (/Users/isaac/.nvm/versions/node/v6.12.0/lib/node_modules/appium/node_modules/appium-xcuitest-driver/lib/commands/gesture.js:76:53)
    at tryCatch (/Users/isaac/.nvm/versions/node/v6.12.0/lib/node_modules/appium/node_modules/babel-runtime/regenerator/runtime.js:67:40)
    at GeneratorFunctionPrototype.invoke [as _invoke] (/Users/isaac/.nvm/versions/node/v6.12.0/lib/node_modules/appium/node_modules/babel-runtime/regenerator/runtime.js:315:22)
    at GeneratorFunctionPrototype.prototype.(anonymous function) [as next] (/Users/isaac/.nvm/versions/node/v6.12.0/lib/node_modules/appium/node_modules/babel-runtime/regenerator/runtime.js:100:21)
    at invoke (/Users/isaac/.nvm/versions/node/v6.12.0/lib/node_modules/appium/node_modules/babel-runtime/regenerator/runtime.js:136:37)
    at enqueueResult (/Users/isaac/.nvm/versions/node/v6.12.0/lib/node_modules/appium/node_modules/babel-runtime/regenerator/runtime.js:185:17)
    at Promise.F (/Users/isaac/.nvm/versions/node/v6.12.0/lib/node_modules/appium/node_modules/core-js/library/modules/$.export.js:30:36)
    at AsyncIterator.enqueue (/Users/isaac/.nvm/versions/node/v6.12.0/lib/node_modules/appium/node_modules/babel-runtime/regenerator/runtime.js:184:12)
    at AsyncIterator.prototype.(anonymous function) [as next] (/Users/isaac/.nvm/versions/node/v6.12.0/lib/node_modules/appium/node_modules/babel-runtime/regenerator/runtime.js:100:21)
    at Object.runtime.async (/Users/isaac/.nvm/versions/node/v6.12.0/lib/node_modules/appium/node_modules/babel-runtime/regenerator/runtime.js:209:12)
    at XCUITestDriver.callee$0$0 [as performTouch] (/Users/isaac/.nvm/versions/node/v6.12.0/lib/node_modules/appium/node_modules/appium-xcuitest-driver/build/lib/commands/gesture.js:153:30)
    at /Users/isaac/.nvm/versions/node/v6.12.0/lib/node_modules/appium/node_modules/appium-base-driver/lib/basedriver/driver.js:254:26
    at tryCatcher (/Users/isaac/.nvm/versions/node/v6.12.0/lib/node_modules/appium/node_modules/bluebird/js/main/util.js:26:23)
    at Promise._settlePromiseFromHandler (/Users/isaac/.nvm/versions/node/v6.12.0/lib/node_modules/appium/node_modules/bluebird/js/main/promise.js:510:31)
    at Promise._settlePromiseAt (/Users/isaac/.nvm/versions/node/v6.12.0/lib/node_modules/appium/node_modules/bluebird/js/main/promise.js:584:18)
    at Promise._settlePromiseAtPostResolution (/Users/isaac/.nvm/versions/node/v6.12.0/lib/node_modules/appium/node_modules/bluebird/js/main/promise.js:248:10)
    at Async._drainQueue (/Users/isaac/.nvm/versions/node/v6.12.0/lib/node_modules/appium/node_modules/bluebird/js/main/async.js:128:12)
    at Async._drainQueues (/Users/isaac/.nvm/versions/node/v6.12.0/lib/node_modules/appium/node_modules/bluebird/js/main/async.js:133:10)
    at Immediate.Async.drainQueues (/Users/isaac/.nvm/versions/node/v6.12.0/lib/node_modules/appium/node_modules/bluebird/js/main/async.js:15:14)
    at runCallback (timers.js:672:20)
    at tryOnImmediate (timers.js:645:5)
    at processImmediate [as _immediateCallback] (timers.js:617:5)
[HTTP] <-- POST /wd/hub/session/29a084af-4ecc-45de-a2f6-e0be192ba0f9/touch/perform 500 34 ms - 201