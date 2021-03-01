const target = "http://192.168.18.93:8080"
module.exports = {
  "/api": {
    "target": target,
    "changeOrigin": true,
    "ws": false,
    "pathRewrite": {
      "^/api": "/api"
    }
  }
}