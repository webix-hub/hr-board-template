import {topbar} from "./js/topbar";
import {filters} from "./js/filters";
import {results} from "./js/results";

// SCSS
import "./styles/main.scss";

webix.ready(() => {
	if (!webix.env.touch && webix.env.scrollSize && webix.CustomScroll) {
		webix.CustomScroll.init();
	}

	webix.ui({
		type: "space",
		cols: [
			{},
			{
				width: 1320,
				margin: 1,
				cols: [
					{
						view: "scrollview",
						body: {
							rows: [
								topbar,
								filters,
								results
							]
						}
					}
				]
			},
			{}
		]
	});
});
