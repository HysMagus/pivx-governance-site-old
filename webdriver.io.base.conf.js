exports.config = {

    user: process.env.BROWSERSTACK_USER,
    key: process.env.BROWSERSTACK_KEY,

    specs: [
        './features/**/*.feature'
    ],

    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],

    maxInstances: 10,

    sync: true,

    logLevel: 'error',

    coloredLogs: true,

    bail: 0,

    screenshotPath: './errorShots/',

    waitforTimeout: 10000,

    connectionRetryTimeout: 90000,

    connectionRetryCount: 3,

    services: ['browserstack'],

    framework: 'cucumber',

    reporters: ['dot'],

    cucumberOpts: {
        require: ['./features/step-definitions'],        // <string[]> (file/dir) require files before executing features
        backtrace: false,   // <boolean> show full backtrace for errors
        compiler: [],       // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        dryRun: false,      // <boolean> invoke formatters without executing steps
        failFast: false,    // <boolean> abort the run on first failure
        format: ['pretty'], // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
        colors: true,       // <boolean> disable colors in formatter output
        snippets: true,     // <boolean> hide step definition snippets for pending steps
        source: true,       // <boolean> hide source uris
        profile: [],        // <string[]> (name) specify the profile to use
        strict: false,      // <boolean> fail if there are any undefined or pending steps
        tags: [],           // <string[]> (expression) only execute the features or scenarios with tags matching the expression
        timeout: 20000,     // <number> timeout for step definitions
        ignoreUndefinedDefinitions: false, // <boolean> Enable this config to treat undefined definitions as warnings.
    },
};