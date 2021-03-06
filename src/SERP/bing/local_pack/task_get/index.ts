import { DFSEO } from "../../../..";

export class TaskGet {
	constructor(private DFSEO: DFSEO) {}

	regular(id: string) {
		return this.DFSEO.fetch({
			method: "GET",
			url: `serp/bing/local_pack/task_get/regular/${id}`,
		});
	}

	html(id: string) {
		return this.DFSEO.fetch({
			method: "GET",
			url: `serp/bing/local_pack/task_get/html/${id}`,
		});
	}
}
