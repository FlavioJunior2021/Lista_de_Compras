'use client'

import { useState } from 'react';

export function DefaultInput(){
	const [isFocused, setIsFocused] = useState(false);

	return(
		<div className="flex w-56 flex-col items-start gap-2">
			<span className={`text-gray-200 text-xs ${isFocused ? 'text-purple-light' : ''}`}>Item</span>
			<input type="text"
				className={`rounded-md border border-gray-300 p-3 bg-gray-500 ${isFocused ? 'focus:border-purple-light focus:outline-none' : ''}`}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
			/>
		</div>
	)
}
