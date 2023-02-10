import { Box } from "./Box"

export function Flex({ className }: { className?: string }) {
	return <Box className={"flex " + className} />
}
