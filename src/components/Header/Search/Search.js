import React, { useState, useRef, useEffect } from 'react';
import { commerce } from '../../../commerce';
import './Search.scss';
import SearchIcon from "../../../images/search-icon.svg";
import Result from './Result/Result';
import { DebounceInput } from 'react-debounce-input';
import ResultSkeleton from '../../Skeleton/Result/Result';

const Search = () => {
    let recentSearchs = localStorage.getItem('recentSearchs');
    const [inputValue, setInputValue] = useState('')
    const [focusDropdown, setFocusDropdown] = useState(false)
    const [typingDropdown, setTypingDropdown] = useState(false)
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)
    const [searchs, setSearchs] = useState(recentSearchs ? JSON.parse(recentSearchs) : [])
    const formRef = useRef()

    useEffect(() => {
        if (inputValue.length > 0) {
            getResults(inputValue)
            setTypingDropdown(true)
            setFocusDropdown(false)
        }
        else {
            setTypingDropdown(false)
        }
    }, [inputValue])
    useEffect(() => {
        localStorage.setItem("recentSearchs", JSON.stringify(searchs))
    }, [searchs])
    const getResults = async (query) => {
        try {
            setLoading(true)
            const response = await commerce.products.list({ query: query });
            setResults(response.data)
        }
        catch (err) {
            return err.message
        }
        setLoading(false)
    }
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

    return (
        <form ref={formRef} onSubmit={onSubmitForm} className='search-form'>
            <img src={SearchIcon} alt="search" />
            <DebounceInput
                className='search-input'
                type="text"
                placeholder='Axtarış...'
                value={inputValue}
                minLength={2}
                debounceTimeout={1000}
                onChange={onChangeHandler}
                onFocus={onFocusHandler}
            />
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
                {loading ?
                    <div className='resultsSkeleton'>
                        <ResultSkeleton />
                        <ResultSkeleton />
                        <ResultSkeleton />
                    </div>
                    : <div className="results">
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
                    </div>}
            </div>}

        </form>
    )
}

export default Search