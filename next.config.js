/** @type {import('next').NextConfig} */

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn2.thecatapi.com',
          port: '',
          pathname: '**',
        },
      ],
    },
  }
