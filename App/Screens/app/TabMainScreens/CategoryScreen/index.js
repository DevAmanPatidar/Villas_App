import React, { useState, useRef } from 'react';
import Categories from './component/Categories';

const CategoriesView = ({ navigation }) => {
    const scrollRef = useRef();
    const [search, setSearch] = useState()
    const [fruitCatgr, setFruitCatgr] = useState(null)
    const [VegtblCatgr, setVegtblCatgr] = useState(null)
    const SearchPoPup = () => {
        setSearch(!search)
        scrollRef.current?.scrollTo({
            y: 0,
            animated: true,
        });
    }
    const VegtblCatgrPoPup = (index) => {
        VegtblCatgr == index ? setVegtblCatgr(null) : setVegtblCatgr(index)
    }
    const FruitCatgrPoPup = (index) => {
        fruitCatgr == index ? setFruitCatgr(null) : setFruitCatgr(index)
    }
    return (
        <Categories
            SearchPoPup={SearchPoPup}
            search={search}
            VegtblCatgrPoPup={VegtblCatgrPoPup}
            FruitCatgrPoPup={FruitCatgrPoPup}
            VegtblCatgr={VegtblCatgr}
            fruitCatgr={fruitCatgr}
            scrollRef={scrollRef}
        />
    )
}
export default CategoriesView;