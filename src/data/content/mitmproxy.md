## What is mitmproxy?

mitmproxy is your swiss-army knife for debugging, testing, privacy measurements, and penetration testing. Definitely useful for debugging or investigating any app which communicates with the web. It can be used to intercept, inspect, modify and replay web traffic such as HTTP/1, HTTP/2, WebSockets, or any other SSL/TLS-protected protocols. You can prettify and decode a variety of message types ranging from HTML to Protobuf, intercept specific messages on-the-fly, modify them before they reach their destination, and replay them to a client or server later on.

## How to run mitmproxy in docker?

Running mitmproxy in docker doesn't require you to install anything, assuming you have docker running already.

## How to configure mitmproxy?

### Setting up the clients

By default mitmproxy will start in [regular proxy mode](https://docs.mitmproxy.org/stable/concepts-modes/#regular-proxy) which requires you to configure proxy on the devices/apps whose traffic you want to intercept. Refer to [official documentation](https://docs.mitmproxy.org/stable/concepts-modes) to find about other modes.

If you want to intercept all traffic from the device, you need to find proxy configuration in system settings. Some apps (like browsers - Chrome, Firefox, etc.) allow you to change proxy configuration in the app settings, which will forward traffic only from given app.

On client devices you need to provide proxy ip and port. Proxy IP is the local ip address of the machine you're running this docker container on (or localhost if you are configuring proxy on the same machine). Port is "Exposed proxy port" defined below (default: 8080)

### How to install mitmproxy SSL certificate for https traffic?

To intercept https traffic you need to install SSL certificate on client device. To do that, after configuring the proxy, open the magic domain mitm.it and install the certificate. Otherwise, you may have certificate errors with https traffic.
