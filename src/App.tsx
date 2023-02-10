import { Box } from "./Box"
import { Flex } from "./Flex"

export function App() {
	return (
		<div>
			<h1 className="text-xxxl">Vite + React</h1>
			<h1 className="text-xxl">Vite + React</h1>
			<h1 className="text-xl">Vite + React</h1>
			<h1 className="text-lg">Vite + React</h1>
			<h1 className="text-sm">Vite + React</h1>
			<Box className="h-[10px] w-[10px] bg-black100"></Box>
			<Flex className="h-[10px] w-[10px] bg-black100"></Flex>
		</div>
	)
}
