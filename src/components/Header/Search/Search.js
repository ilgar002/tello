import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import './Search.scss';
import SearchIcon from "../../../images/search-icon.svg";
import Result from './Result/Result';
import { useEffect } from 'react';



const Search = () => {
    let recentSearchs = localStorage.getItem('recentSearchs');
    const [inputValue, setInputValue] = useState('')
    const [focusDropdown, setFocusDropdown] = useState(false)
    const [typingDropdown, setTypingDropdown] = useState(false)
    const { allProducts } = useSelector((state) => state.allProducts)
    const [results, setResults] = useState([])
    const [searchs, setSearchs] = useState(recentSearchs ? JSON.parse(recentSearchs) : [])
    const formRef = useRef()
    const onChangeHandler = (e) => {
        setInputValue(e.target.value)
        window.addEventListener('click', handleClickOutside)
    }
    const onClickClearTyping = () => {
        setTypingDropdown(false)
        setInputValue('')
    }
    const onClickClearFocus = () => {
        setSearchs([])
        setFocusDropdown(false)
        setInputValue('')
    }
    const onFocusHandler = () => {
        setFocusDropdown(true)
        window.addEventListener('click', handleClickOutside)
    }
    const handleClickOutside = (e) => {
        if (!formRef.current?.contains(e.target)) {
            setTypingDropdown(false)
            setFocusDropdown(false)
            window.removeEventListener('click', handleClickOutside)
        }
    }
    const onSubmitForm = (e) => {
        e.preventDefault()
        inputValue.trim('').length > 0 && setSearchs([...searchs, inputValue])
        setInputValue('')
        setTypingDropdown(false)
    }
    useEffect(() => {
        localStorage.setItem("recentSearchs", JSON.stringify(searchs))
    }, [searchs])
    useEffect(() => {
        inputValue.length > 0 ? setTypingDropdown(true) : setTypingDropdown(false)
        const results = allProducts.data?.filter((el) => el.name.toLowerCase().includes(inputValue.toLowerCase()))
        setResults(results)
        setFocusDropdown(false)
    }, [inputValue, allProducts])

    return (
        <form ref={formRef} onSubmit={onSubmitForm} className='search-form'>
            <img src={SearchIcon} alt="search" />
            <input value={inputValue} onChange={onChangeHandler} onFocus={onFocusHandler} className='search-input' type="text" placeholder='Axtarış...' />
            {focusDropdown &&
                <div className="focus-dropdown dropdown">
                    <div className="row">
                        <span className="title">
                            Son axtarışlar
                        </span>
                        <button type='button' onClick={onClickClearFocus} className="clear">
                            Təmizlə
                        </button>
                    </div>
                    <div className="searchs">
                        {searchs.map((el, index) => {
                            return <span onClick={() => setInputValue(el)} key={index} className="search">{el}</span>
                        })}
                    </div>
                </div>}
            {typingDropdown && <div className="typing-dropdown dropdown">
                <div className="row">
                    <span className="title">
                        Nəticələr
                    </span>
                    <button type='button' onClick={onClickClearTyping} className="clear">
                        Təmizlə
                    </button>
                </div>
                <div className="results">
                    {results?.map((el) => {
                        return <Result
                            key={el.id}
                            id={el.id}
                            image={el.image.url}
                            name={el.name}
                            price={el.price.raw}
                            setTypingDropdown={setTypingDropdown}
                        />
                    })}
                </div>
            </div>}

        </form>
    )
}

export default Search