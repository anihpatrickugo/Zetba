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
      d="M4.667 14v-1.333A1.333 1.333 0 0 1 6 11.333h4a1.333 1.333 0 0 1 1.333 1.334V14m-8-12h9.334C13.403 2 14 2.597 14 3.333v9.334c0 .736-.597 1.333-1.333 1.333H3.333A1.333 1.333 0 0 1 2 12.667V3.333C2 2.597 2.597 2 3.333 2ZM10 6.667a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
    />
  </Svg>
)
export default SvgComponent

