import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#59F2C4"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M10 8.667a2 2 0 0 0-2-2m0 0a2 2 0 0 0-2 2m2-2a1.333 1.333 0 1 0 0-2.666 1.333 1.333 0 0 0 0 2.666Zm-5.333 6.334V3a1.667 1.667 0 0 1 1.666-1.667h8.334a.667.667 0 0 1 .666.667v12a.667.667 0 0 1-.666.666H4.333a1.667 1.667 0 0 1-1.666-1.666Zm0 0a1.667 1.667 0 0 1 1.666-1.667h9"
    />
  </Svg>
)
export default SvgComponent

