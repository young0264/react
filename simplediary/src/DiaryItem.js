

const DiaryItem = ({author, content, created_date, emotion, id}) => {
    return (
    <div className="DiaryItem">
        <div className="info">
            {/* <div>작성자 : {author}</div> */}
            {/* <div>내용 : {item.content}</div> */}
            {/* <div>감정 : {item.emotion}</div> */}
            {/* <div>작성 시간(ms) : {item.created_date}</div> */}
            <span> 작성자 : {author} | 감정점수 : {emotion}</span>
            <br />
            <span className="date">{new Date(created_date).toLocaleString()}</span>
        </div>
        <div className="content">{content}</div>
    </div>
    )
}

export default DiaryItem;