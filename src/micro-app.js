let microRoutes = JSON.parse(localStorage.micro || '{}')
const url = `https://zhoubichuan.${location.href.includes('gitee') ? 'github' : 'gitee'}.io`
const microApps = Array.isArray(microRoutes) ? microRoutes : [
  {
    name: "sub1",
    entry: "/sub1/",
    activeRule: "/child-sub1",
    container: "#subapp",
    props: {
      data: '来自基座的数据1',
      fns: [
        function LOGOUT_(data) {
          alert('父应用返回信息：' + data)
        }
      ]
    }
  },
  {
    name: "sub2",
    entry: "/sub2/",
    activeRule: "/child-sub2",
    container: "#subapp",
    props: {
      data: '来自基座的数据2',
      fns: [
        function LOGOUT_(data) {
          alert('父应用返回信息：' + data)
        }
      ]
    }
  },
  {
    name: "resume",
    entry: url + "/resume/",
    // entry: 'http://localhost:8090/resume/',
    activeRule: "/resume",
    container: "#subapp",
    props: {
      data: '来自基座的数据2',
      fns: [
        function LOGOUT_(data) {
          alert('父应用返回信息：' + data)
        }
      ]
    }
  }
];
const apps = ui => microApps.map((item) => {
  item.props.ui = ui
  return {
    ...item,
    // props: {
    //   routerBase: item.activeRule,
    // },
  };
});
export default apps
