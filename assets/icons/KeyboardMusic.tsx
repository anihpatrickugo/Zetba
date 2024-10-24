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
      d="M4 5.69h2.667m2.666 0h.007m2.66 0h.007M1.333 8.357h13.334M4 8.357v2.666m2.667-2.666v2.666m2.666-2.666v2.666M12 8.357v2.666m-9.333-8h10.666c.737 0 1.334.597 1.334 1.334v8c0 .736-.597 1.333-1.334 1.333H2.667a1.333 1.333 0 0 1-1.334-1.333v-8c0-.737.597-1.334 1.334-1.334Z"
    />
  </Svg>
)
export default SvgComponent
