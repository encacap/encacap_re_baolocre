module.exports = {
    apps: [
        {
            name: "baolocre_fe_dev",
            script: "yarn",
            args: "start",
            env: {
                NODE_ENV: "production",
            },
        },
    ],
};
