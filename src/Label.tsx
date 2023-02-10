import { Box } from "./Box"

type LabelVariant = "light" | "dark" | "brand"

type LabelProps = {
	variant?: LabelVariant
	className?: string
}

export function Label({ className, variant = "light" }: LabelProps) {
	return <Box />
}

// import { variant } from "styled-system"

// export const LABEL_VARIANTS = {
//   light: {
//     backgroundColor: "black10",
//     color: "black100",
//   },
//   dark: {
//     backgroundColor: "black100",
//     color: "white100",
//   },
//   brand: {
//     backgroundColor: "blue100",
//     color: "white100",
//   },
// }

// export interface LabelProps extends BoxProps {
//   variant?: LabelVariant
//   children: React.ReactNode
// }

// export const Label: React.FC<LabelProps> = ({ children, ...rest }) => {
//   return (
//     <Container display="inline-flex" maxWidth="100%" {...rest}>
//       <Text variant="xs" px={0.5} overflowEllipsis>
//         {children}
//       </Text>
//     </Container>
//   )
// }

// const Container = styled(Box)`
//   ${variant({ variants: LABEL_VARIANTS })}
// `
