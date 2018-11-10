const initialState = {
	jobs: [
	{name: "Manager", area: "services"},
	{name: "Host", area: "services"},
	{name: "Tuttofare", area: "services"},
	{name: "Waitress", area: "services"},
	{name: "Dining room manager", area: "services"},
	{name: "Chef", area: "kitchen"},
	{name: "Sous Chef", area: "kitchen"},
	{name: "Dishwasher", area: "kitchen"},
	{name: "Cook", area: "kitchen"},
	]
} 

export function JobReducer(state = initialState){

	return state

}