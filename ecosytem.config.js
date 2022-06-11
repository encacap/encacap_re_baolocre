module.exports = {
    apps: [
        {
            name: "baolocre.encacap.com",
            script: "yarn",
            args: "start",
            env_staging: {
                NODE_ENV: "production",
                SERVER_PORT: 22402,
                SERVER_HOSTNAME: "localhost",
            },
        },
    ],
};
