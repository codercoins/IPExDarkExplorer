# eganexplorer
Block explorer for Egano CryptoNote based cryptocurrency.

#### Installation

1) It takes data from daemon eganod. It should be accessible from the Internet. Run eganod with open port as follows:
```bash
./eganod --rpc-bind-ip=0.0.0.0 --rpc-bind-port=47867
```
2) Just upload to your website (root directory) and change variables in config.js and settings.php to point to your daemon.
3) Enable CORS in your browser. Scripts must be able to load data from different port. Here is more information:
Chrome: https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en
Firefox: https://addons.mozilla.org/en-US/firefox/addon/cors-everywhere/

The other option is enabling ProxyPass in Apache so that a subdirectory is forwarded to the daemon.
Example config:
```bash
    ProxyRequests Off
    ProxyPreserveHost On
    ProxyPass        "/d/" "http://localhost:47867/"
    ProxyPassReverse "/d/" "http://localhost:47867/"
```
  
