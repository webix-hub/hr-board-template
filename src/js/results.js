import {dataUsers} from "../data/dataUsers";

export const results = {
	view: "datalayout",
	rows: [
		{
			margin: 1,
			padding: {top: 30, right: 30, bottom: 20, left: 30},
			cols: [
				{
					name: "$value",
					css: "cleanTemplate",
					template: '<div class="image"><img src="#image#"></div>',
					width: 140,
					minHeight: 140,
					borderless: true
				},
				{
					rows: [
						{
							name: "$value",
							height: 38,
							template: '<div class="name">#name#</div>',
							borderless: true
						},
						{
							name: "$value",
							height: 38,
							borderless: true,
							template(obj) {
								return obj.tags.map(tag => `<span class="tag">${tag}</span>`);
							}
						},
						{
							height: 30,
							cols: [
								{
									name: "$value",
									template: '<span class="textLight"> $ </span><span>#rate#</span>',
									borderless: true
								},
								{
									name: "$value",
									template: '<span class="textLight"> Status: </span><span class="webix_strong"> #status#</span>',
									borderless: true
								},
								{
									name: "$value",
									template: '<span class="textLight"> Rating: </span><span>#rating#</span>',
									borderless: true
								},
								{
									name: "$value",
									css: "centerTemplate",
									template: '<span class="textLight mdi mdi-24px mdi-map-marker"></span><span>#location#</span>',
									borderless: true
								}
							]
						},
						{
							name: "$value",
							autoheight: true,
							template: "<p>#about#</p>",
							borderless: true
						}
					]
				},
				{
					rows: [
						{
							view: "button",
							value: "Send Message",
							width: 200
						},
						{
							view: "button",
							value: "Send Job Offer",
							width: 200
						}
					]
				}
			]
		}
	],
	data: dataUsers
};
