const microRoutes = JSON.parse(localStorage.micro || "{}");
const url = `//zhoubichuan.${
  location.href.includes("gitee") ? "github" : "gitee"
}.io`;
console.log(url, "urlurlurl");
const microApps = Array.isArray(microRoutes)
  ? microRoutes
  : [
      {
        name: "jump",
        entry: "/jump/",
        activeRule: "/jump",
        container: "#subapp",
        props: {
          data: "来自基座的数据1",
          fns: [
            function LOGOUT_(data: any) {
              alert("父应用返回信息：" + data);
            },
          ],
        },
      },
      {
        name: "sub2",
        entry: "/sub2/",
        activeRule: "/child-sub2",
        container: "#subapp",
        props: {
          data: "来自基座的数据2",
          fns: [
            function LOGOUT_(data: any) {
              alert("父应用返回信息：" + data);
            },
          ],
        },
      },
      {
        name: "resume",
        entry: "/resume/",
        activeRule: "/resume",
        container: "#subapp",
        props: {
          data: "来自基座的数据2",
          fns: [
            function LOGOUT_(data: any) {
              alert("父应用返回信息：" + data);
            },
          ],
        },
      },
    ];
const apps = (ui: any) =>
  microApps.map((item) => {
    item.props.ui = ui;
    return {
      ...item,
      // props: {
      //   routerBase: item.activeRule,
      // },
    };
  });
export default apps;
