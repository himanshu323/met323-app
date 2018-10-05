import { Config } from 'protractor';

export let config: Config = {
    
    directConnect:true,
    capabilities:{
        browserName: 'chrome'
        
        /* 'moz:firefoxOptions': {
            args: [ "--headless" ]
          } */
    },
    specs: ["../features/homepage.feature"],
    
    framework: 'custom',

    frameworkPath: require.resolve('protractor-cucumber-framework'),
    
    baseUrl: "http://localhost:8808/",

    suites:{
        "homepage":"../features/homepage.feature",
        "coursedetails":"../features/CoursePage.feature"
}
    ,
    cucumberOpts: {
        compiler: "ts:ts-node/register",

        
        format: ['progress', 'json:results.json'],
        require: ['../steps/*.js','../Hooks/*.js'],
        tags: '@smoke or @regression'
    }
}