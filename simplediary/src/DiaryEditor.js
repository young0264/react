import { useRef, useState } from "react";

const DiaryEditor = () => {

    const authorInput = useRef();
    const contentsInput = useRef();
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
        if(state.author.length < 1){
            // alert("작성자는 최소한 한글자를 입력해주세요.");

            //focus
            authorInput.current.focus();

            return;
        }
        if(state.content.length < 5){
            // alert("일기 본문은 최소 5글자 이상 입력해주세요.");

            //focus
            contentsInput.current.focus();
            return;
        }
        alert("저장성공");
    }

    return (
        <div className="DiaryEditor">
            <h1>오늘의 게시글</h1>
            <div>
                <input 
                    ref={authorInput}
                    name="author"
                    value={state.author} 
                    onChange={handleChangeState} 
                />
            </div>
            <div>
                <textarea 
                    ref={contentsInput}
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