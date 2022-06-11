/* eslint-disable security/detect-non-literal-fs-filename */
const fs = require("fs");
const { createServer: createSSLServer } = require("https");
const { createServer: createNormalServer } = require("http");
const next = require("next");

const HOSTNAME = process.env.SERVER_HOSTNAME || "localhost";
const PORT = parseInt(process.env.SERVER_PORT, 10) || 22401;
const isDevEnvironment = process.env.NODE_ENV !== "production";

const app = next({ dev: isDevEnvironment, hostname: HOSTNAME, port: PORT });
const handler = app.getRequestHandler();
const certFolder = "./certs";

const startSSLServer = async () => {
    const options = {
        key: fs.readFileSync(`${certFolder}/baolocre.dev.pem`),
        cert: fs.readFileSync(`${certFolder}/baolocre.dev.crt`),
    };

    app.prepare().then(() => {
        createSSLServer(options, handler).listen(
            {
                host: HOSTNAME,
                port: PORT,
            },
            () => {
                // eslint-disable-next-line no-console
                console.log(`> Ready on https://${HOSTNAME}:${PORT}`);
            }
        );
    });
};

const startNormalServer = async () => {
    app.prepare().then(() => {
        createNormalServer(handler).listen(PORT, () => {
            // eslint-disable-next-line no-console
            console.log(`> Ready on http://${HOSTNAME}:${PORT}`);
        });
    });
};

if (isDevEnvironment) {
    startSSLServer();
} else {
    startNormalServer();
}
