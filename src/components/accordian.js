import { useState } from "react";

export default function Accordian (props){
    const [active,setActive]=useState(true)

    return(
        <div className="accordian" style={{border:"2px solid red"}}>
            <div className="header">
                {props.content.title}
            </div>
            {active && <div className="content">
                {props.content.body}
            </div>}
        </div>
    )
}