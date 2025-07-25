let microRoutes = JSON.parse(localStorage.micro || "{}");
const microApps = Array.isArray(microRoutes)
    ? microRoutes
    : [
        {
            name: "sub1",
            entry: "http://localhost:5501",
            activeRule: "sub1",
            container: "#sub1",
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
            entry: "http://localhost:5052",
            activeRule: "sub2",
            container: "#sub2",
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
            entry: "/resume/", // history
            activeRule: "/child/resume/",
            container: "#resume",
            props: {
                data: '来自基座的数据2',
                fns: [
                    function LOGOUT_(data: any) {
                        alert('父应用返回信息：' + data)
                    }
                ]
            }
        },
    ];
const apps = () =>
    microApps.map((item) => {
        return {
            ...item,
            // props: {
            //   routerBase: item.activeRule,
            // },
        };
    });
export default apps;
