import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    // ['link', { rel: 'icon', href: '/arcanedocs/favicon.ico' }],

    ['meta', { property: 'og:title', content: 'Arcane Games' }],
    ['meta', { property: 'og:description', content: 'Arcane Games' }],
    // ['meta', { property: 'og:image', content: '/arcanedocs/favicon.ico' }],
    // ['meta', { property: 'og:url', content: 'https://imvenx.github.io/arcanedocs/' }],
    ['meta', { property: 'og:type', content: 'website' }]
  ],
  title: "Arcane Games",
  outDir: './docs',
  base: '/arcanegames/',
  description: "Game design documents for Arcanepad games in development",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // logo: {
    //   src: '/images/arcanepad-logo.png'
    // },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/intro', activeMatch: '/guide' },
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Intro', link: '/guide/intro' },
        ]
      },
      {
        text: 'UI', collapsed: false,
        items: [
          { text: 'Basic UI project', link: '/guide/basic-ui/basic-ui' },
        ]
      },
      {
        text: 'Resurrected Pharaoh',
        collapsed: false,
        items: [
          { text: 'Intro', link: '/guide/resurrected-pharaoh/intro', },
          { text: 'Updates', link: '/guide/resurrected-pharaoh/updates', },
        ]
      },
      {
        text: 'Arcane Cases',
        collapsed: false,
        items: [
          { text: 'Gun Case', link: '/guide/arcane-cases/gun-case', },
        ]
      },
    ],

    socialLinks: [
      // { icon: 'discord', link: 'https://discord.com/invite/6Pr9JBCGXy' },
      // { icon: 'twitter', link: 'https://twitter.com/arcanepad' },
      // { icon: 'youtube', link: 'https://www.youtube.com/@Arcanepad' },
      // { icon: 'instagram', link: 'https://www.instagram.com/arcanepad/' },
      // { icon: 'mastodon', link: 'https://mastodon.social/@Arcanepad' },
      // { icon: 'github', link: 'https://github.com/imvenx' },
    ]
  }
})
