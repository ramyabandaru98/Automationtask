exports.config = {
    runner: 'local',
    framework: 'cucumber',
    specs: ['./OrangeHRM/features/**/*.feature'],
 
    capabilities: [{
        browserName: 'chrome'
    }],
 
    cucumberOpts: {
        require: ['./OrangeHRM/step-definitions/**/*.js'],
        timeout: 60000
    },
 
    services: [],
    reporters: ['spec'],
}
 