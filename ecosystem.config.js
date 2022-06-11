module.exports = {
    apps: [
        {
            name: "baolocre.encacap.com",
            script: "yarn",
            args: "start",
            env: {
                NODE_ENV: "production",
            },
        },
    ],
};
