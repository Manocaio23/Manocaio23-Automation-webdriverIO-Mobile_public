require('dotenv').config()
const {config} = require('./wdio.shared.conf')


//run cofiguration browser stack
    config.user=process.env.BROWSERSTACK_USER
    config.key=process.env.BROWSERSTACK_KEY

    //specs
config.specs=[
    './test/specs/ios/testMvc.spec.js'
]

//capabilities
config.capabilities=[
    {
    "appium:platformName":"ios",
        "appium:platformVersion":"16.2",
        "appium:deviceName":"iPhone 12",
        "appium:automationName":"XCUITest",
        ///Users/manocaio/Documentos/automationbro/webdriverio-appium/app/android/ApiDemos-debug.apk
        "appium:app": path.join(process.cwd(), "./app/ios/MVCTodo.app.zip")

    }]
    config.services = ['browserstack'],

    exports.config =config;