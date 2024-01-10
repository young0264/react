import { useRef, useState } from 'react';

const DiaryItem = ({
    onEdit,
    onRemove,
    author,
    content, 
    created_date, 
    emotion, 
    id,
}) => {

    const [isEdit, setIsEdit] = useState(false);
    const toggleIsEdit = () => setIsEdit(!isEdit);
    const [localContent, setLocalContent] = useState(content); //기본값을 content
    const localContentInput = useRef();

    const handleEdit = () => {
        // if (window.confirm(`${id+1}번째 글을 수정하시겠습니까?`)){
        if (localContent.length < 5){
            alert("글자수가 5미만입니다.");
            localContentInput.current.focus();
            return;
        }
        if (window.confirm(`${id+1}번째 글을 수정하시겠습니까?`)){
            onEdit(id, localContent);
            toggleIsEdit();
        }

    }

    const handleRemove = () => {
        // console.log(id);
        //백틱
        if (window.confirm(`${id+1}번째 글을 삭제하시겠습니까?`)){
            onRemove(id);
        }
    };
    
    /** 수정취소하고 다시 수정할 때 기본 content값이 들어가도록 */
    const handleQuitEdit = () => {
        setIsEdit(false);
        setLocalContent(content);
    }

    return (
    <div className="DiaryItem"> xXxxXX
        <div className="info">
            {/* <div>작성자 : {author}</div> */}
            {/* <div>내용 : {item.content}</div> */}
            {/* <div>감정 : {item.emotion}</div> */}
            {/* <div>작성 시간(ms) : {item.created_date}</div> */}
            <span> 작성자 : {author} | 감정점수 : {emotion}</span>
            <br />
            <span className="date">{new Date(created_date).toLocaleString()}</span>
        </div>
        <div className="content">
            {isEdit ? ( 
                <>
                    <textarea 
                        ref={localContentInput}
                        value={localContent} 
                        onChange={(e)=> setLocalContent(e.target.value)}
                    />
                </>
               ) : (
               <>{content}</>
            )}
        </div>
        {isEdit ? (
        <>
            <button onClick={handleQuitEdit}>수정취소</button>
            <button onClick={handleEdit}>수정완료</button>
        </>
        ):(
        <>
            <button onClick={handleRemove}>삭제하기</button>
            <button onClick={toggleIsEdit} >수정하기</button>
        </> )}
        
        {/*<button onClick={() => handleRemove(id)}>삭제하기</button>*/}
        
    </div>
    );
};

export default DiaryItem;