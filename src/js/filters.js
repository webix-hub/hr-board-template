export const filters = {
	view: "form",
	padding: 30,
	rows: [
		{
			cols: [
				{
					view: "radio",
					label: "Job success",
					labelPosition: "top",
					options: ["Any job success", "90% & up", "80% & up", "70% & up"],
					vertical: true
				},
				{
					view: "radio",
					label: "English level",
					labelPosition: "top",
					options: ["Any level", "Basic", "Conversational", "Fluent", "Native or Bilingual"],
					vertical: true
				},
				{
					view: "radio",
					label: "Hourly rate",
					labelPosition: "top",
					options: ["Any rate", "10$ and below", "10$ - 30$", "30$ - 60$", "60$ - 80$"],
					vertical: true
				},
				{
					width: 500,
					rows: [
						{
							cols: [
								{
									view: "richselect",
									label: "Category",
									labelPosition: "top",
									placeholder: "Choose an option",
									options: [
										{id: 1, value: "Development"},
										{id: 2, value: "Design"}
									]
								},
								{
									width: 20
								},
								{
									view: "richselect",
									label: "Skills",
									labelPosition: "top",
									placeholder: "Choose an option",
									options: [
										{id: 1, value: "HTML"},
										{id: 2, value: "Javascript"},
										{id: 3, value: "Illustrator"}
									]
								}
							]
						},
						{
							padding: 20,
							cols: [
								{},
								{
									view: "button",
									value: "Clear all filters",
									css: "webix_transparent",
									width: 250
								},
								{}
							]
						}
					]
				}
			]
		}
	]
};
