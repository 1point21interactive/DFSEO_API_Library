import { DFSEO } from "../..";
export declare class SimilarWeb {
    private DFSEO;
    constructor(DFSEO: DFSEO);
    taskPost(data: any): Promise<any>;
    tasksReady(): Promise<any>;
    taskGet(id: string): Promise<any>;
    live(data: any): Promise<any>;
}
