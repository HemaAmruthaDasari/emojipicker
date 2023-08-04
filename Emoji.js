import React ,{useState} from 'react'
const eData=[
    {
        id:1,
        symbol:"🐷",
        name:" Pig"
    },
    {
        id:2,
        symbol:"😎",
        name:"awesome"
    },
    {
        id:3,
        symbol:"😡",
        name:"Angry"
    },
    {
        id:4,
        symbol:"🥳",
        name:"party"
    },
    {
        id:5,
        symbol:"🥱",
        name:"sleepy"
    },
    {
        id:6,
        symbol:"🥴",
        name:"dizzy"
    },
    {
        id:7,
        symbol:"🫣",
        name:"shy"
        
    },
    {
        id:8,
        symbol:"😩",
        name:"crying"
        
    },
    {
        id:9,
        symbol:"💃",
        name:"dance"
        
    },
    {
        id:10,
        symbol:"🤔",
        name:"Thinking"
        
    },
    {
        id:11,
        symbol:"🥶",
        name:"freeze"
        
    },
    {
        id:12,
        symbol:"🫶",
        name:"love"
        
    },
    {
        id:13,
        symbol:"👽",
        name:"alien"
        
    },
    {
        id:14,
        symbol:"🫢",
        name:"omg"
        
    },
    {
        id:15,
        symbol:"😘",
        name:"kiss"
        
    },




]

function Emoji() {
const [searchEmoji,setSearchEmoji]=useState("");
  
const handleChange=(e)=>{
    setSearchEmoji(e.target.value);
}
const showEmoji=eData.filter((emoji)=>{
    const emojiName=emoji.name.toLowerCase();
    return emojiName.includes(searchEmoji.toLowerCase())
});
  return (
    <div>
        <h1>"React Emoji App"</h1>
        <input type="text" placeholder="search for an emoji" value={searchEmoji} onChange={(handleChange)}></input>
        <h2>
            {
                showEmoji.map((emoji)=>emoji.symbol)
            }
        </h2>
    </div>
  )
}

export default Emoji