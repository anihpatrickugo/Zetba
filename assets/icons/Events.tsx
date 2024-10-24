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
      d="m3 5.333 7.053-3.373a.667.667 0 0 1 .895.325l1.385 3.048M4 6.667V5.333m0 4V10m0 2.666V14M2.667 5.333h10.666c.737 0 1.334.597 1.334 1.334v6c0 .736-.597 1.333-1.334 1.333H2.667a1.333 1.333 0 0 1-1.334-1.334v-6c0-.736.597-1.333 1.334-1.333Z"
    />
  </Svg>
)
export default SvgComponent
