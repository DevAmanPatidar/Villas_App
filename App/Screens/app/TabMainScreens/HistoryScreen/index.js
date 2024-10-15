import React, { useState, useRef } from 'react';
import History from './component/History';

const HistoryView = ({ navigation }) => {
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
        <History
            SearchPoPup={SearchPoPup}
            search={search}
            scrollRef={scrollRef}
        />
    )
}
export default HistoryView;