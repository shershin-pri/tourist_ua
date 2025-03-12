module.exports = {
    apps: [
        {
            name: "discoveryLens",
            port: '3001',
            script: ".output/server/index.mjs",
            exec_mode: 'cluster',
            instances: 'max',
            env: {
                NODE_ENV: "production"
            }
        }
    ]
};