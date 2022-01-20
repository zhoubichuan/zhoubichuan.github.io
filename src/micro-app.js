const microApps = [
  {
    name: "sub1",
    entry: "http://localhost:5501",
    activeRule: "sub1",
    container: "#sub1",
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
    entry: "http://localhost:5052",
    activeRule: "sub2",
    container: "#sub2",
    props: {
      data: '来自基座的数据2',
      fns: [
        function LOGOUT_(data) {
          alert('父应用返回信息：' + data)
        }
      ]
    }
  },
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
