import type { QiankunProps } from 'vite-plugin-qiankun/es/helper';

type CurUser = {
    birthDay: number;
    birthMonth: number;
    birthYear: number;
    cityId: number;
};

export type MicroAppName =
    | 'sub-xxxx'
    | 'sub2-xxxx'

export type Route = {
    type?: 'push' | 'replace';
    path?: string;
    name?: string;
    query?: Record<string, string>;
};

export type MicroAppGlobalState = {
    closeMessage?: {
        type: MicroAppName;
    };
    openMessage?: {
        type: MicroAppName;
        params?: {
            route?: Route;
        };
    };
    route?: Route;
};

export interface MicroAppProps extends QiankunProps {
    getCurUser: () => CurUser;
    setGlobalState: (state: MicroAppGlobalState) => void;
}

class MicroApp {
    name = 'sub-project';
    props: MicroAppProps;

    constructor() {
        this.props = {} as MicroAppProps;
    }

    public setMicroAppProps(props: MicroAppProps) {
        this.props = props;
    }
}

export default new MicroApp();
