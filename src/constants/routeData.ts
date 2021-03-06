export const items = [
  { title: "Dashboard", icon: "mdi-view-dashboard", to: "/" },
  { title: "GridSystem", icon: "mdi-grid", to: "/gridsystem" },
  { title: "MQTest", icon: "mdi-emoticon-excited-outline", to: "/mqtest" },
  { title: "Graphviz", icon: "mdi-graph", to: "/graphviz" },
  { title: "Chart", icon: "mdi-chart-bar", to: "/chart" },
  {
    title: "Pages",
    icon: "mdi-menu",
    items: [
      {
        title: "Authentication",
        icon: "mdi-login",
        items: [
          { title: "SignIn", to: "/authentication /sign-in" },
          { title: "SignUp", to: "/authentication/sign-up" },
        ],
      },
      { title: "ProductList", to: "/page/product-list" },
    ],
  },
  {
    title: "Tables",
    icon: "mdi-table-settings",
    items: [
      { title: "Basic Table", to: "/tables/basic-table" },
      { title: "ZK Table", to: "/tables/zktable" },
    ],
  },
];
