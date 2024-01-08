import { useState } from "react";

const DiaryEditor = () => {

    const [state, setState] = useState({
        author: "",
        content: "",
    })

    return (
        <div className="DiaryEditor">
            <h1>오늘의 일기</h1>
            <div>
                <input value={state.author} 
                onChange={(e)=>{
                    setState({
                        author: e.target.value,
                        // content: state.content, //꼭 두개를 다 넣어줘야하나 => spread 연산자 사용
                        ...state
                    });
                }} />
            </div>
            <div>
                <textarea value={state.content} onChange={(e) =>{
                    setState({
                        // author: state.author,
                        ...state,
                        content: e.target.value,
                    });
                    console.log(e.target.value);
                }} />
            </div>
        </div>  
    );
}

export default DiaryEditor;