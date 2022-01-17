import { useState,useEffect } from "react";

export default function Accordian (props){
    const [active,setActive]=useState([])

    useEffect(()=>{
        const array=[];
        for (let i=0;i<4;i++){
            array.push(false)
        }
        setActive(array);
    },[])

    const changeState=(ind)=>{
        const array=[];
        for (let i=0;i<4;i++){
            if (i===ind){
                array.push(!active[ind])
            } else {
                array.push(false)
            }
        }
        setActive(array);
    }

    return(
        <div className="accordian" style={{border:"2px solid red",display:"flex",flexDirection:"column"}} >
            <div className="top">
                {active[0] && <p>{props.content.body}</p>}
            </div>
            <div className="middle" style={{display:"flex",flexDirection:"row"}}>
                <div className="leftContent">
                    {active[3] && <p>{props.content.body}</p>}
                </div>
                <div className="user" style={{display:"flex",flexDirection:"column"}}>
                    <div className="usertop" onClick={()=>changeState(0)}>UP</div>
                    <div className="usermiddleleft" style={{display:"flex",flexDirection:"row"}}>
                        <div className="leftbutton" onClick={()=>changeState(3)}>LEFT</div>
                        <div className="title">{props.content.title}</div>
                        <div className="rightbutton" onClick={()=>changeState(1)}>RIGHT</div>
                    </div>
                    <div className="userdown" onClick={()=>changeState(2)}>DOWN</div>
                </div>
                <div className="rightContent">
                    {active[1] && <p>{props.content.body}</p>}
                </div>
            </div>
            <div className="bottom">
                {active[2] && <p>{props.content.body}</p>}
            </div>
        </div>
    )
}