export const topbar = {
	view: "toolbar",
	borderless: true,
	padding: {top: 20, bottom: 20, left: 30, right: 30},
	height: 129,
	rows: [
		{
			paddingY: 10,
			margin: 10,
			borderless: true,
			cols: [
				{
					view: "search",
					placeholder: "Search.."
				},
				{
					view: "button",
					value: "Filters",
					css: "webix_primary",
					label: "Filters",
					type: "icon",
					icon: "wxi-angle-down",
					width: 250
				},
				{
					view: "button",
					value: "Post job",
					width: 250
				}
			]
		},
		{
			height: 30,
			cols: [
				{
					view: "template",
					css: "blue",
					borderless: true,
					width: 38,
					template: "<span class='mdi mdi-18px mdi-account-multiple'></span>"
				},
				{
					view: "template",
					borderless: true,
					template: "33 Freelancers found"
				}
			]
		}
	]
};
