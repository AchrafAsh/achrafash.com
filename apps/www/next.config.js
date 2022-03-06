/** @type {import('next').NextConfig} */

;(function buildSitemap() {
    if (process.env.NODE_ENV !== 'production') return

    const sitemap = require('nextjs-sitemap-generator')
    sitemap({
        baseUrl: 'https://achrafash.com',
        pagesDirectory: __dirname + '/pages',
        targetDirectory: 'public/',
        ignoredExtensions: ['js', 'ts', 'map', 'html'],
        ignoredPaths: [
            '[fallback]',
            'posts',
            'issues',
            'threads',
            'app',
            '404',
            'early-access'
        ]
    })
})()

const nextConfig = {
    reactStrictMode: true,
    exportPathMap: function () {
        return {
            '/': { page: '/' }
        }
    }
}

module.exports = nextConfig
