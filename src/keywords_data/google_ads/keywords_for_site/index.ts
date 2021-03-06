import { DFSEO } from "../../..";

export class KeywordsForSite {
	constructor(private DFSEO: DFSEO) {}

	taskPost(data: any) {
		return this.DFSEO.fetch({
			method: "POST",
			url: "keywords_data/google/keywords_for_site/task_post",
			data,
		});
	}

	tasksReady() {
		return this.DFSEO.fetch({
			method: "GET",
			url: "keywords_data/google/keywords_for_site/tasks_ready",
		});
	}

	taskGet(id: string) {
		return this.DFSEO.fetch({
			method: "GET",
			url: `keywords_data/google/keywords_for_site/task_get/${id}`,
		});
	}

	live(data: any) {
		return this.DFSEO.fetch({
			method: "POST",
			url: "keywords_data/google/keywords_for_site/live",
			data,
		});
	}
}
