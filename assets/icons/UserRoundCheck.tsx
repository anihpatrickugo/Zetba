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
      strokeWidth={2}
      d="M2 21a8 8 0 0 1 13.292-6M16 19l2 2 4-4m-7-9A5 5 0 1 1 5 8a5 5 0 0 1 10 0Z"
    />
  </Svg>
)
export default SvgComponent
