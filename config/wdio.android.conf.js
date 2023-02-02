const path= require('path')
const {config} = require('./wdio.shared.conf')

//run cofiguration
config.port= 4723;
//specs
config.specs=[
    './test/specs/android/add-note.spec.js'
]

//capabilities
config.capabilities=[
    {
        "appium:platformName":"Android",
            "appium:deviceName":"Pixel_3a_Android_12",
            "appium:automationName":"UIAutomator2",
            "appium:app": path.join(process.cwd(), "./app/android/ColorNote+Notepad.apk"),
            "appium:autoGrantPermissions":true //deixa a per
    }]

    exports.config =config;