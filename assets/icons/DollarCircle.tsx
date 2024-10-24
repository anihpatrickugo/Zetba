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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.667 5.691h-4a1.333 1.333 0 1 0 0 2.667h2.666a1.333 1.333 0 1 1 0 2.667h-4M8 12.358v-8m6.667 4a6.667 6.667 0 1 1-13.334 0 6.667 6.667 0 0 1 13.334 0Z"
    />
  </Svg>
)
export default SvgComponent

