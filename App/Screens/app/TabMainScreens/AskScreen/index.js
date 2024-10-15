import React, { useState, useRef } from 'react';
import Ask from './component/Ask';

const FavrtItemView = ({ navigation }) => {
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
        <Ask
            SearchPoPup={SearchPoPup}
            search={search}
            scrollRef={scrollRef}
        />
    )
}
export default FavrtItemView;