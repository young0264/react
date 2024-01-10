import React, {useEffect, useState} from 'react';

const UnmountTest = () => {


    useEffect(()=>{
        console.log("Mount!");

        return () => {
            console.log("Unmount!");
        }
    }, []);

    return <div> Unmount Testing Component </div>;
};


const Lifecycle = () => {

    const[isVisible, setIsVisible] = useState(false);
    const toggle = () => { setIsVisible(!isVisible)};

    return (
    <div style={{padding : 20}}> 
        <button onClick={toggle}>ON/OFF</button>
        {/* isVisible이 true이면 UnmountTest component가 
            반환이 되어서 화면에 렌더링이 됨
         false이면 단락 회로평가가 일어나서 UnmountTest component가 일어나지 않게됨.*/}
        {isVisible && <UnmountTest /> } 
    </div>
    );
};

export default Lifecycle;