import Icon from "@/utils/icons";

export function Button(){
	return(
		<button className="inline-flex p-2 items-center justify-center gap-2 rounded-full bg-purple hover:bg-purple-dark">
			<Icon name="plus" width={24} hanging={24}/>
		</button>
	)
}
