import { useEffect, useRef, useState } from 'react';
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

// https://jsonplaceholder.typicode.com/comments

function App() {

  const [data, setData] = useState([]);
  const dataId = useRef(0);

  const getData = async() => { //비동기
    const res = await fetch('https://jsonplaceholder.typicode.com/comments'
    ).then((res) => res.json());
    console.log(res);

    const initData = res.slice(0,20).map((data)=>{
      // console.log(data);
      return {
        author: data.email,
        content : data.body,
        emotion : Math.floor(Math.random()*5)+1,
        created_date : new Date().getTime(),
        id : dataId.current++,
      };
    });

    console.log(initData);
    setData(initData);
  };

  //이렇게 빈 배열을 전달하면. callback 함수는 
  //이 component가 탄생. mount 되는 시점에 바로 실행되게 된다.
  useEffect(()=>{
    getData();
  }, []);

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
      <DiaryEditor onCreate={onCreate}/>
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data}/>
    </div>
  );
}

export default App;
