import React, { LiHTMLAttributes } from "react"

const Li = ({ ...rest }: LiHTMLAttributes<HTMLLIElement>) => <li {...rest} />

export default Li
