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
      d="M8.933 1.692H4a1.333 1.333 0 0 0-1.333 1.333v10.667A1.333 1.333 0 0 0 4 15.025h8a1.333 1.333 0 0 0 1.333-1.334V8.758m-12-4.4H4M1.333 7.025H4M1.333 9.69H4m-2.667 2.667H4m10.252-8.25a1.416 1.416 0 0 0-2.003-2.002L8.91 5.448a1.333 1.333 0 0 0-.337.569L8.014 7.93a.333.333 0 0 0 .413.414l1.914-.558c.215-.063.41-.18.569-.338l3.342-3.34Z"
    />
  </Svg>
)
export default SvgComponent

