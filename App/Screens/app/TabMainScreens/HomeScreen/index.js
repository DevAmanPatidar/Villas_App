import React, { useState, useRef } from 'react';
import Home from './component/Home';

const HomeScreenView = ({ navigation }) => {
    const scrollRef = useRef();
    const [search, setSearch] = useState()
    const SearchPoPup = () => {
        setSearch(!search)
        scrollRef.current?.scrollTo({
            y: 0,
            animated: true,
        });
    }
    return (
        <Home
            search={search}
            SearchPoPup={SearchPoPup}
            scrollRef={scrollRef}
        />
    )
}
export default HomeScreenView;
// function myFunction() {
//     var timea = new Date().getHours();
//     var time =  18
    
//     var greeting;
//     if (time <= 12) {
//       greeting = "Good Morning";
//     }
//     else if (time >= 12 && time <= 16) {
//       greeting = "Good Afternoon";
     
//      }else if((time >= 16) && (time <= 20)){
//       greeting = "Good evening";
//     }else{
//     greeting = "Good Night";
//   }
  