import React, { LiHTMLAttributes } from "react"

const Li = ({ ...rest }: LiHTMLAttributes<string>) => <li {...rest} />

export default Li
