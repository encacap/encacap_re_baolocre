module.exports = {
    apps: [
        {
            name: "baolocre_dev",
            script: "yarn",
            args: "start",
            env: {
                NODE_ENV: "production",
            },
        },
    ],
};
