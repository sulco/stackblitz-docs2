module.exports = {
  someSidebar: {
    "Platform API": [
      "platform",
      "platform/embedding",
      "platform/importing-projects",
      "platform/javascript-sdk",
      "platform/post-api"
    ],
    "Enterprise Edition (EE)": [
      "enterprise",
      {
        type: "category",
        label: "Installation",
        items: [
          "enterprise/installation/quickstart",
          "enterprise/installation/quickstart-gcp",
          "enterprise/installation/administrator-guide",
        ],
      },
      "enterprise/configuring-dns",
      "enterprise/sso",
      "enterprise/npm"
      // {
      //   type: "category",
      //   label: "Administrator Guide",
      //   items: [
      //     "enterprise/installation",
      //   ],
      // },
    ],
    // Docusaurus: ['doc1'],
    // Features: ['mdx'],
  },
};
