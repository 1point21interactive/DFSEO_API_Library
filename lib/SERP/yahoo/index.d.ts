import { DFSEO } from "../..";
import { Organic } from "./organic";
export declare class Yahoo {
    private DFSEO;
    organic: Organic;
    constructor(DFSEO: DFSEO);
    locations(country?: string): Promise<any>;
    languages(): Promise<any>;
}
