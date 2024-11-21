import React from 'react'
import { FaAngleDoubleRight } from "react-icons/fa";

function Button({
    children,
    toggle = false,
    borderColor="",
    className = '',
    ...props
}) {
    return <button className={`flex items-center gap-3 uppercase py-2 text-sm pr-4 border-t-2 border-b-2 border-r-2 border-black ${borderColor} ${className}`} {...props} >
            {toggle ? <>
                <FaAngleDoubleRight /> {children}
            </>
                :
                <>
                    {children} <FaAngleDoubleRight />
                </>
            }
        </button>
}

export default Button
