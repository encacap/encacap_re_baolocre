/* eslint-disable security/detect-non-literal-fs-filename */
const fs = require("fs");
const { createServer: createSSLServer } = require("https");
const { createServer: createNormalServer } = require("http");
const next = require("next");

const HOSTNAME = process.env.HOST || "localhost";
const PORT = parseInt(process.env.PORT, 10) || 22401;
const isDevEnvironment = process.env.NODE_ENV !== "production";

const app = next({ dev: isDevEnvironment, hostname: HOSTNAME, port: PORT });
const handler = app.getRequestHandler();

const certFolder = process.env.CERTS;
const pemFilePath = `${certFolder}/${HOSTNAME}.pem`;
const crtFilePath = `${certFolder}/${HOSTNAME}.crt`;

const startSSLServer = () => {
  const options = {
    key: fs.readFileSync(pemFilePath),
    cert: fs.readFileSync(crtFilePath),
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

const startNormalServer = () => {
  app.prepare().then(() => {
    createNormalServer(handler).listen(PORT, () => {
      // eslint-disable-next-line no-console
      console.log(`> Ready on http://localhost:${PORT}`);
    });
  });
};

const startServer = () => {
  if (isDevEnvironment) {
    if (fs.existsSync(pemFilePath) && fs.existsSync(crtFilePath)) {
      startSSLServer();
      return;
    }
    startNormalServer();
    return;
  }
  startNormalServer();
};

// Start the server
startServer();
