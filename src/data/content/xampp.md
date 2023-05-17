## What is tomsik68/xampp?

If you want to run or develop or quickly run Apache / PHP / MySQL project without installing anything (like MAMP, XAMPP, WAMP) you can use this image (tomsik68/xampp) which wraps original XAMPP(MySQL+PHP+PHPMyAdmin) with SSH server in docker.

## How to run tomsik68/xampp in docker?

Running xampp in docker doesn't require you to install anything, assuming you have docker running already.

## How to use xampp docker image?

- There is an ssh server running. You can login with root and password: root
- There is phpmyadmin on http://localhost:41062/phpmyadmin/, assumming 41062 is http port you exposed
- To browse to your web page, visit this URL: http://localhost:41062/www
- To open up the XAMPP interface: http://localhost:41062/
