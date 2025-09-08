import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    // allow your domain while in dev (behind Cloudflare/NGINX)
    allowedHosts: ['headless.bitcoinsquare.io', 'localhost', '127.0.0.1'],
    host: true,
    // HMR over Cloudflare (optional but helpful)
    hmr: {
      host: 'headless.bitcoinsquare.io',
      protocol: 'wss',
      clientPort: 443,
    },
  },
});
