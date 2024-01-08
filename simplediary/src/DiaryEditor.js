import { useState } from "react";

const DiaryEditor = () => {

    const [state, setState] = useState({
        author: "",
        content: "",
    })
    // const [author, setAuthor] = useState("");
    // const [content, setContent] = useState("내용을 입력해주세요.");

    return (
        <div className="DiaryEditor">
            <h1>오늘의 일기</h1>
            <div>
                <input value={state.author} 
                onChange={(e)=>{
                    setState(e.target.value);
                }} />
            </div>
            <div>
                <textarea value={state.content} onChange={(e) =>{
                    setState(e.target.value);
                    console.log(e.target.value);
                }} />
            </div>
        </div>  
    );
}

export default DiaryEditor;