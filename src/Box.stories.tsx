import { Box } from "./Box"

export default {
	title: "Box",
	component: Box,
}

export const Boxes = () => (
	<div>
		<Box className="bg-red100 h-[10px] w-[10px]" />
	</div>
)
