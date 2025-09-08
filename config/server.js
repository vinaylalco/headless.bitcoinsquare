module.exports = ({ env }) => ({
  url: env('PUBLIC_URL'),
  host: env('HOST', '127.0.0.1'),
  port: env.int('PORT', 1337),
  proxy: true,
});

