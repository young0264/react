import { useRef, useState } from 'react';
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import Lifecycle from './Lifecycle';

// const dummyList = [
  // {
  //   id:1,
  //   author:"남의영",
  //   content:"내용1",
  //   emotion:5,
  //   created_date: new Date().getTime(),
  // },
  // {
  //   id:2,
  //   author:"남의영2",
  //   content:"내용2",
  //   emotion:2,
  //   created_date: new Date().getTime(),
  // },
  // {
  //   id:3,
  //   author:"남의영3",
  //   content:"내용3",
  //   emotion:3,
  //   created_date: new Date().getTime(),
  // }
// ]
   

function App() {

  const [data, setData] = useState([]);
  const dataId = useRef(0);


  /** 게시글(다이어리) update */
  const onEdit = (targetId, newContent) => {
    setData(
      data.map((data) => 
        data.id === targetId ? {...data, content:newContent } : data
      )
    )
  }


  /** 게시글(다이어리) create */
  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author, 
      content,
      emotion, 
      created_date,
      id: dataId.current 
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  /** 게시글(다이어리) 삭제*/
  const onRemove = (targetId) => {
    // console.log("targetId 삭제 : ", targetId);
    console.log(`${targetId+1}번째 글이 삭제되었습니다.`);
    
    // 삭제되지 않은 요소들을 newDiaryList에 담아 초기화하여 리스트를 다시 출력하는 방식
    const newDiaryList = data.filter((item)=>item.id !== targetId);
    console.log(newDiaryList);
    setData(newDiaryList);
  };

  return (
    <div className="App">
      <Lifecycle/>
      <DiaryEditor onCreate={onCreate}/>
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data}/>
    </div>
  );
}

export default App;
