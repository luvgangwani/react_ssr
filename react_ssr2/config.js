const env = process.env;


module.exports = {
    port: env.PORT || 8000,
    host: env.HOST || '0.0.0.0',
    nodeEnv: env.NODE_ENV || 'development',
    get serverUrl() {
        return `http://${this.host}:${this.port}`
    }
}