module.exports = {
    apps: [
        {
            name: "baolocre.encacap.com",
            script: "yarn",
            args: "start",
            env_staging: {
                NODE_ENV: "production",
                NEXT_PUBLIC_WEBSITE_NAME: "Bất động sản nghỉ dưỡng Bảo Lộc",
            },
        },
    ],
};
