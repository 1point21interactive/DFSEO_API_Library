import { ISERP_Item } from "../../task_get";

export interface IItem_Answer_Box extends ISERP_Item {
	type: "answer_box";
	rank_group: number;
	rank_absolute: number;
	position: "left" | "right";
	xpath: string;
	text: string[] | null;
	links:
		| {
				type: "link_element";
				title: string;
				description: string;
				url: string;
		  }[]
		| null;
}
