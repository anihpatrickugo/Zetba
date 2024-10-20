import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.5 3.333h-5.833m-3.334 0H2.5M17.5 10H10m-3.333 0H2.5m15 6.667h-4.167m-3.333 0H2.5m9.167-15V5m-5 3.333v3.334M13.333 15v3.333"
    />
  </Svg>
)
export default SvgComponent
