import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
import SvgWraper from '../SvgWrapper'
const GoogleIcon = (props: SvgProps) => (
  <SvgWraper {...props}>
    <Path
      d="M19.6 10.222c0-.822-.067-1.422-.211-2.044H10v3.71h5.511c-.111.923-.711 2.312-2.044 3.245l-.019.125 2.968 2.3.206.02c1.89-1.745 2.978-4.311 2.978-7.356Z"
      fill="#4285F4"
    />
    <Path
      d="M10 20c2.7 0 4.967-.889 6.622-2.422l-3.155-2.445c-.845.59-1.978 1-3.467 1-2.644 0-4.889-1.744-5.689-4.155l-.117.01-3.087 2.389-.04.112A9.993 9.993 0 0 0 10 20Z"
      fill="#34A853"
    />
    <Path
      d="M4.311 11.978A6.157 6.157 0 0 1 3.978 10c0-.689.122-1.356.322-1.978l-.006-.132L1.17 5.462l-.102.05A10.01 10.01 0 0 0 0 10c0 1.611.389 3.133 1.067 4.489l3.244-2.511Z"
      fill="#FBBC05"
    />
    <Path
      d="M10 3.867c1.878 0 3.144.81 3.867 1.489L16.689 2.6C14.956.989 12.7 0 10 0a9.993 9.993 0 0 0-8.933 5.511L4.3 8.022c.811-2.41 3.056-4.155 5.7-4.155Z"
      fill="#EB4335"
    />
  </SvgWraper>
)
export default GoogleIcon