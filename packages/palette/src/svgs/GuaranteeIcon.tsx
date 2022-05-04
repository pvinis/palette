import React from "react"
import { Icon, IconProps, Path, Title } from "./Icon"

/** GuaranteeIcon */
export const GuaranteeIcon: React.FC<IconProps> = ({
  title = "Guarantee",
  ...props
}) => {
  return (
    <Icon {...props} viewBox="0 0 18 18">
      <Title>{title}</Title>
      <Path
        fill="#000"
        fillRule="evenodd"
        d="M4.183 14.047a25.61 25.61 0 003.619 2.843 2.097 2.097 0 002.35 0 26.658 26.658 0 003.418-2.88 10.403 10.403 0 002.85-4.523.746.746 0 00-.56-.895.746.746 0 00-.895.552 9.007 9.007 0 01-2.455 3.82 24.625 24.625 0 01-3.223 2.702.582.582 0 01-.664 0 24.052 24.052 0 01-3.41-2.68A8.715 8.715 0 012.607 9.13c-.164-.95-.22-1.917-.164-2.88 0-.657.067-1.269.112-1.724.283 0 .634.06 1.007.074a7.305 7.305 0 002.239-.201 7.462 7.462 0 002.194-1.18c.373-.275.701-.544.955-.745.254.216.582.492.955.746a7.23 7.23 0 002.239 1.179.747.747 0 00.395-1.44 5.811 5.811 0 01-1.716-.94A13.185 13.185 0 019.6.995a.895.895 0 00-1.231 0c-.392.363-.803.704-1.231 1.023a6.09 6.09 0 01-1.732.947c-.586.14-1.19.188-1.79.142a14.08 14.08 0 01-1.493-.134.896.896 0 00-1 .798A34.61 34.61 0 00.96 6.22c-.07 1.087-.001 2.18.2 3.252a10.171 10.171 0 003.023 4.575z"
        clipRule="evenodd"
      ></Path>
      <Path
        fill="#1023D7"
        fillRule="evenodd"
        d="M8.899 6.152a.75.75 0 00-.993 1.126l2.239 1.993a.888.888 0 001.239.082l5.462-5.127a.747.747 0 10-1.022-1.09l-4.985 4.702-1.94-1.686z"
        clipRule="evenodd"
      ></Path>
    </Icon>
  )
}
