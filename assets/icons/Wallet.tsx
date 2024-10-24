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
      strokeWidth={1.2}
      d="M10.292 3.792V2.167a.542.542 0 0 0-.542-.542H2.708a1.083 1.083 0 0 0-1.083 1.083m0 0a1.083 1.083 0 0 0 1.083 1.084h8.125a.542.542 0 0 1 .542.541V6.5m-9.75-3.792v7.584a1.083 1.083 0 0 0 1.083 1.083h8.125a.542.542 0 0 0 .542-.542V8.667m0-2.167H9.75a1.083 1.083 0 0 0 0 2.167h1.625m0-2.167a.542.542 0 0 1 .542.542v1.083a.542.542 0 0 1-.542.542"
    />
  </Svg>
)
export default SvgComponent

