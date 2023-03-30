import React from 'react'

export default function Meme(){
    const [meme,setMeme]=React.useState({
        topText:"",
        bottomText:"",
        img:"https://i.imgflip.com/1g8my4.jpg"
    })

    const [allMemes,setAllMemes]=React.useState([])

    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res=>res.json())
        .then(data=>setAllMemes(data.data.memes))
    },[])

    function handleChange(event){
        const {name,value}=event.target
        setMeme(prev=>({
            ...prev,
            [name]: value
        }))
    }

    function getmemeImg(){
            const randomNumber=Math.floor(Math.random()*allMemes.length)
            const url=allMemes[randomNumber].url
            setMeme(prev=>({
                ...prev,
                img:url
            }))
        
    }
    return(
        <div className="c1">
            <div className="form">
                <input 
                       onChange={handleChange}
                       className='i1' 
                       type="text" 
                       name='topText' 
                       placeholder='Top Text' 
                       value={meme.topText}
                />
                <input 
                       onChange={handleChange}
                       type="text" 
                       name='bottomText' 
                       placeholder='Bottom Text' 
                       value={meme.bottomText}
                />
            </div>
            <div className='btn'><button onClick={getmemeImg}>Get a new meme image 🖼</button></div>
            <div className='meme'>
                <div className='image'><img src={meme.img} alt="" srcset="" className='edit'/></div>
                <h2 className='memetext top'>{meme.topText}</h2>
                <h2 className="memetext bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
}


/**
    useEffect takes a function as its parameter. If that function
    returns something, it needs to be a cleanup function. Otherwise,
    it should return nothing. If we make it an async function, it
    automatically retuns a promise instead of a function or nothing.
    Therefore, if you want to use async operations inside of useEffect,
    you need to define the function separately inside of the callback
    function.
    useEffect also has another dependency basically an array whose content 
    decides whether the prev func will run after each rendering or not.
    If the content remains const it will not run. 
    */