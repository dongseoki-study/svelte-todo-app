module.exports = {
  mount: {
    public: "/",
    src: "/dist",
  },
  plugins: [
    "@snowpack/plugin-svelte",
    "@snowpack/plugin-optimize",
    "@snowpack/plugin-babel",
    "@snowpack/plugin-sass",
  ],
  alias: {
    // 경로 별칭
    "~": "./src",
  },
  devOptions: {
    port: 8080, // default port 8080
    open: "none", // 개발서버 오픈시 자동 오픈 막기
  },
};
