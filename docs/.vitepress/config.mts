import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "何喻的技术博客",
  description: "何喻的技术博客",

  outDir: "../dist",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: "",
    logo: "/logo.png",
    nav: [
      { text: "Home", link: "/" },
      { text: "技术醒酒汤", link: "/recall" },
    ],

    sidebar: [
      {
        text: "醒酒汤",
        items: [{ text: "说明", link: "/recall" }],
      },
      {
        text: "PHP 语言",
        items: [{ text: "语法速查", link: "/recall/php/syntax" }],
      },
      {
        text: "Golang 语言",
        items: [
          { text: "语法速查", link: "/recall/go/syntax" },
          { text: '"面向对象"', link: "/recall/go/oo" },
        ],
      },
      {
        text: "Kotlin 语言",
        items: [{ text: "语法速查", link: "/recall/kotlin/syntax" }],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://heyuuu.github.io/" }],

    outline: {
      level: "deep",
      label: "大纲",
    },
  },
});
