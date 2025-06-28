import type { QiankunProps } from 'vite-plugin-qiankun/es/helper';

type CurrentUser = {
    appointApproveStatus: number;
    approveStatus: number;
    authApproveStatus: number;
    birthDay: number;
    birthMonth: number;
    birthYear: number;
    cityId: number;
    countryId: number;
    desc: string;
    forceAuthType: number;
    gender: number;
    headPhoto: string;
    integral: number;
    mobile: string;
    organId: number;
    organName: string;
    provinceId: number;
    pwdStatus: number;
    qqOpenid: string;
    qualifyApproveStatus: number;
    realName: string;
    realname: string;
    schoolType: number;
    stageId: number;
    studentCount: number;
    subjectId: number;
    ApproveStatus: number;
    uid: number;
    userName: string;
    username: string;
    utype: number;
    uuid: string;
    weiboOpenid: string;
    weixinOpenid: string;
};

type CurrentCourse = {
    approveStatus: number;
    courseCode: string;
    courseId: number;
    courseName: string;
    courseType: number;
    createTime: number;
    isApprove: number;
    lecturerId: number;
    lecturerName: string;
    ownerId: number;
    pictureUrl: string;
    shelfStatus: number;
    stageId: number;
    status: number;
    stuNum: number;
    subjectId: number;
    Name: string;
    prefixNo: string;
    writeNum: string;
};

type CommonDict = {
    dictId: string;
    dictName: string;
};

export declare type Acl = {
    addTime: number;
    beginTime: number;
    endTime: number;
    func: string;
    funcId: string;
    startTime: number;
};

export type MicroAppName =
    | 'report-html'
    | 'report1-html'
    | 'report2-html'
    | 'report3-html'
    | 'report4-html'
    | 'arrangement-html'
    | 'arrangement-v2'
    | 'choose-words-html'
    | 'correct-html'
    | 'vocabulary-html'
    | 'question-select'
    | 'paper-editor'
    | 'paper-select'
    | 'sub-project'
    | 'again-login';

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
    getCurrentUser: () => CurrentUser;
    getCurrentCourse: () => CurrentCourse;
    getUserAclList: () => Acl[];
    getSelectedCurriculumVersionList: () => CommonDict[];
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
