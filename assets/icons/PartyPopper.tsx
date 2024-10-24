import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.35 8.475 1.5 16.5l8.025-2.842M3 2.25h.007M16.5 6h.008M11.25 1.5h.008M16.5 15h.008M16.5 1.5l-1.68.563a2.175 2.175 0 0 0-1.47 2.34 1.096 1.096 0 0 1-1.088 1.222h-.285c-.645 0-1.2.45-1.32 1.08L10.5 7.5m6 2.25-.615-.248a1.1 1.1 0 0 0-1.485.833c-.082.525-.54.915-1.072.915h-.578M8.25 1.5l.248.615A1.1 1.1 0 0 1 7.665 3.6c-.525.075-.915.54-.915 1.073v.577m1.5 4.5c1.447 1.447 2.123 3.127 1.5 3.75-.623.623-2.303-.053-3.75-1.5S3.877 8.873 4.5 8.25c.622-.622 2.303.053 3.75 1.5Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill={props.color} d="M0 0h18v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent
