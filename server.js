const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});

const server = http.createServer((req, res) => {
  proxy.web(req, res, { target: req.url, changeOrigin: true }, (err) => {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Proxy Error');
  });
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Proxy running on port ${port}`);
});
