module.exports = {
  title: "StackBlitz Developer",
  tagline: "Learn. Build. Integrate.",
  url: "https://developers.stackblitz.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "stackblitz", // Usually your GitHub org/user name.
  projectName: "developer", // Usually your repo name.
  onBrokenLinks: "ignore",
  clientModules: [require.resolve("./src/js/custom.js")],
  scripts: [
    "https://cdn.jsdelivr.net/gh/ericsimons/dstest@7ea35b4acf22d3c5e036fa4cebafd3af961f509b/pub.js"
  ],
  themeConfig: {
    colorMode: {
      // "light" | "dark"
      defaultMode: "dark",

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: false,

      // Should we use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultMode
      respectPrefersColorScheme: false
    },
    algolia: {
      apiKey: "0018be99f0102bbe50ec33f829ef4666",
      indexName: "stackblitz"
      // appId: 'app-id', // Optional, if you run the DocSearch crawler on your own
      // algoliaOptions: {}, // Optional, if provided by Algolia
    },
    navbar: {
      logo: {
        alt: "StackBlitz",
        src: "https://developer.stackblitz.com/img/logo.svg",
        srcDark: "https://developer.stackblitz.com/img/logo_dark.svg",
        href: "https://stackblitz.com"
      },
      items: [
        {
          to: "/",
          label: "DEVELOPER",
          position: "left",
          className: "site-title"
        },
        {
          to: "docs/platform",
          activeBasePath: "docs/platform",
          label: "Platform API",
          position: "left"
        },
        {
          to: "docs/enterprise",
          activeBasePath: "docs/enterprise",
          label: "Enterprise Edition (EE)",
          position: "left"
        },
        // {
        //   to: 'docs/',
        //   activeBasePath: 'docs',
        //   label: 'Docs',
        //   position: 'left',
        // },
        // {to: 'changelog', label: 'Changelog', position: 'left'},
        // {to: 'https://stackblitz.blog', label: 'Blog', position: 'left'},
        // {to: 'docs/javascript-sdk', label: 'API', position: 'left', className:'navbar__item navbar__link'},
        {
          href: "https://github.com/stackblitz/core",
          label: " ",
          position: "right",
          className: "gh-link-icon"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs"
          // items: [
          //   {
          //     label: 'Style Guide',
          //     to: 'docs/',
          //   },
          //   {
          //     label: 'Second Doc',
          //     to: 'docs/doc2/',
          //   },
          // ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/stackblitz"
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/stackblitz"
            },
            {
              label: "Twitter",
              href: "https://twitter.com/stackblitz"
            }
          ]
        },
        {
          title: "More",
          items: [
            // {
            //   label: 'Changelog',
            //   to: 'changelog',
            // },
            {
              label: "GitHub",
              href: "https://github.com/stackblitz/core"
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} StackBlitz, Inc.`
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          // homePageId: 'introduction',
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://stackblitz.com/edit/stackblitz-docs-zxctms?file="
        },
        blog: {
          showReadingTime: true,
          path: "./changelog",
          routeBasePath: "/changelog",
          blogListComponent: "../src/ChangeLogList.js",
          feedOptions: {
            type: "all",
            title: "StackBlitz Changelog"
          }
          // Please change this to your repo.
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
