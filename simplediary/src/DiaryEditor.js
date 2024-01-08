import { useState } from "react";

const DiaryEditor = () => {

    const [state, setState] = useState({
        author: "",
        content: "",
        emotion:2,
    });

    const handleChangeState = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        setState({
            ...state,
            [e.target.name]:e.target.value,
        })
    }

    const handleSubmit = () => {
        alert("저장성공");
        console.log(state);
    }

    return (
        <div className="DiaryEditor">
            <h1>오늘의 일기</h1>
            <div>
                <input 
                name="author"
                value={state.author} 
                onChange={handleChangeState} 
                />
            </div>
            <div>
                <textarea 
                name="content"
                value={state.content} 
                onChange={handleChangeState} />
            </div>
            <div>
                <select name="emotion" value={state.emotion} onChange={handleChangeState}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
            </div>
            <div>
                <button onClick={handleSubmit}>일기 저장하기</button>
            </div>
        </div>  
    );
}

export default DiaryEditor;