const path= require('path')
const {config} = require('./wdio.shared.conf')

//run cofiguration
config.port= 4723;
//specs
config.specs=[
    './test/specs/ios/ios.spec.js'
]

//capabilities
config.capabilities=[
    {
    "appium:platformName":"ios",
        "appium:platformVersion":"16.2",
        "appium:deviceName":"iPhone 12",
        "appium:automationName":"XCUITest",
        "appium:app": path.join(process.cwd(), "./app/ios/UIKitCatalog.app")

    }]

    exports.config =config;