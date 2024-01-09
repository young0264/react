import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const dummyList = [
  {
    id:1,
    author:"남의영",
    content:"내용1",
    emotion:5,
    created_date: new Date().getTime(),
  },
  {
    id:2,
    author:"남의영2",
    content:"내용2",
    emotion:2,
    created_date: new Date().getTime(),
  },
  {
    id:3,
    author:"남의영3",
    content:"내용3",
    emotion:3,
    created_date: new Date().getTime(),
  },
  {
    id:4,
    author:"남의영4",
    content:"내용4",
    emotion:4,
    created_date: new Date().getTime(),
  },
  {
    id:5,
    author:"남의영5",
    content:"내용5",
    emotion:5,
    created_date: new Date().getTime(),
  }
]

function App() {
  return (
    <div className="App">
      <DiaryEditor/>
      <DiaryList diaryList={dummyList}/>
    </div>
  );
}

export default App;
