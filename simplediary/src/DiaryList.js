import DiaryItem from "./DiaryItem";

const DiaryList = ({diaryList}) => {
    console.log(diaryList);
    return (
    <div className="DiaryList">
        <h2>게시글 리스트</h2>
        <h4>{diaryList.length}개의 게시글이 있습니다.</h4>
        <div>
            {diaryList.map((item)=>(
                // <div>게시글 아이템</div>
                <DiaryItem key={item.id} {...item} />
                // <div key={item.id}>
                //     <div>작성자 : {item.author}</div>
                //     <div>내용 : {item.content}</div>
                //     <div>감정 : {item.emotion}</div>
                //     <div>작성 시간(ms) : {item.created_date}</div>
                // </div>
            ))}
        </div>
    </div>
    );
};

// default prop에 대한 null처리
DiaryList.defaultProps={
    diaryList:[],
}

export default DiaryList;  