/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: []
        // If you use `MDXProvider`, uncomment the following line.
        // providerImportSource: "@mdx-js/react",
    }
})

function buildSitemap() {
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
}
if (process.env.NODE_ENV === 'production') buildSitemap()

const nextConfig = {
    reactStrictMode: true,
    exportPathMap: function () {
        return {
            '/': { page: '/' }
        }
    },
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx']
}

module.exports = withMDX(nextConfig)
