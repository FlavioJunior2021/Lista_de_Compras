import Image from "next/image";
import headerImage from '@/assets/header.png'

export function Header(){
	return(
		<header className="relative h-44 w-full">
			<Image
				alt="header"
				width={1640}
				height={176}
				src={headerImage}
			/>
		</header>
	)
}
