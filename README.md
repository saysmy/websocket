# websocket
websocket+nodejs 实践

## 使用nginx代理到node服务

nginx配置：

```
    upstream websocket {
        server 127.0.0.1:8081;
    }

    server {
        listen 8082;
        server_name 127.0.0.1;

        location / {
            proxy_pass http://websocket/;
            proxy_redirect off;

            # WebSocket specific
            proxy_http_version 1.1;
            proxy_set_header    Upgrade           $http_upgrade;
            proxy_set_header    Connection        "upgrade";
        }
    }
```

## Build

1. git clone https://github.com/saysmy/websocket.git
2. cd websocket
3. yarn
4. node index.js
5. 浏览器打开client/index.html