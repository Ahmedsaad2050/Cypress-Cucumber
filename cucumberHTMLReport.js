const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: './cypress/cucumber-json',
	reportPath: './cypress/MultipleReport',
	metadata:{
        browser: {
            name: 'chrome',
            version: '104'
        },
        device: 'Local test machine',
        platform: {
            name: 'Windows',
            version: '10'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Cypress Cucumber'},
            {label: 'Release', value: '1.2.3'},
            {label: 'Author', value: 'Ahmed Saad'},
            {label: 'Execution Start Time', value: (new Date).getTime()        },
            {label: 'Execution End Time', value: (new Date).getTime()        }
        ]
    }
});