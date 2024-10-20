import * as React from "react"
import Svg, { SvgProps, Rect } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
  
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Rect width={7.5} height={7.5} x={0.5} y={0.25} fill={props.color} rx={1} />
    <Rect width={7.5} height={7.5} x={13} y={0.25} fill={props.color} rx={1} />
    <Rect width={7.5} height={7.5} x={0.5} y={11.5} fill={props.color} rx={1} />
    <Rect width={7.5} height={7.5} x={13} y={11.5} fill={props.color} rx={1} />
  </Svg>
)
export default SvgComponent

