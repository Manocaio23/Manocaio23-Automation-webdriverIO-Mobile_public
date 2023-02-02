require('dotenv').config()
const {config} = require('./wdio.shared.conf')


//run cofiguration browser stack
    config.user=process.env.BROWSERSTACK_USER
    config.key=process.env.BROWSERSTACK_KEY

    //specs
config.specs=[
    './test/specs/android/add-note.spec.js'
]

//capabilities
config.capabilities=[
    {
            "platformName":"Android",
            "appium:deviceName":"Google Pixel 3",
            "appium:automationName":"UIAutomator2",
            "appium:app":"bs://f051ec83761053d9b6aaf52d308c743f970e5a2b",
            "appium:autoGrantPermissions":true 
    }
    
]
  config.services = ['browserstack'],

    exports.config =config;