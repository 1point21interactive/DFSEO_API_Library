import { DFSEO } from "..";
import { KeywordResearch } from "./keyword_research";
import { MarketSpecificAnalysis } from "./market_specific_analysis";
import { CompetitorResearch } from "./competitor_research";

export class DataForSEOLabs {
	public keywordResearch: KeywordResearch = new KeywordResearch(this.DFSEO);
	public marketSpecificAnalysis: MarketSpecificAnalysis = new MarketSpecificAnalysis(this.DFSEO);
	public competitorResearch: CompetitorResearch = new CompetitorResearch(this.DFSEO);
	constructor(private DFSEO: DFSEO) {}

	/**
	 * this endpoint does not work currently. But here's the documentation:
	 *
	 * https://docs.dataforseo.com/v3/dataforseo_labs/filters/?php
	 */
	public filters() {
		return this.DFSEO.fetch({
			method: "GET",
			url: "dataforseo_labs/filters",
		});
	}

	public categories() {
		return this.DFSEO.fetch({
			method: "GET",
			url: "dataforseo_labs/categories",
		});
	}

	public locationsAndLanguages() {
		return this.DFSEO.fetch({
			method: "GET",
			url: "dataforseo_labs/locations_and_languages",
		});
	}
}
