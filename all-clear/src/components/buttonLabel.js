import React, { useEffect } from "react";
import "../css/search.css"


const ButtonLabel=({color,index,item, content,changeItem,onSelect,setData})=>{
   const styleColor=color?"#0071FF":"gray";
   useEffect(()=>{
        onSelect(-1);
        return ()=>{
                onSelect(-1);
        }
   },[onSelect])
   return(
    <label key={index} style={{border:"2px solid "+styleColor}}>{
            <div key={index} onClick={()=>{onSelect(index);setData(content);changeItem(item);}}>{content}</div>
    }</label>
    );
}
export default ButtonLabel;