import React,{useState,useEffect} from 'react'
import '../Assets/DarkMode.css';

export default function ScrollIndicator() {    
    const [scrollTop, setScrollTop] = useState(0);

const scroll= () => {
    const y = document.documentElement.scrollTop;
    const height =
    document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled=(y / height) * 100;
    setScrollTop(scrolled);
}
 useEffect(()=>{
    window.addEventListener('scroll',scroll)
    return ()=> window.removeEventListener('scroll',scroll)
 },[]);
    return (
        <div className="bg-soft-purple fixed top-14 left-0 w-full h-5 z-50 drop-shadow-lg" id='scroll-indicate'>
            <div className="bg-lightmauve h-5 drop-shadow-lg" style={{ width: `${scrollTop}%` }}></div>
        </div>
    );
}
