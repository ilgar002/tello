import React from 'react';
import "./Filter.scss";
import PlusIcon from '../../../images/plus-icon.svg';
import MinusIcon from '../../../images/minus-icon.svg';
import { DebounceInput } from 'react-debounce-input';



const Filter = ({ searchParams, setSearchParams, options, filterVisibility, setFilterVisibility }) => {

    const onClickHandler = () => {
        setFilterVisibility((prev) => !prev)
    }

    const changeHandler = (e) => {
        return (el) => {
            e.target.checked ? el.checked = true : el.checked = false
            const labels = []
            options.forEach((el2) => {
                if (el2.checked) {
                    labels.push(el2.label)
                }
            })
            if (labels.length > 0) {
                const params = Object.fromEntries([...searchParams])
                setSearchParams({ ...params, queries: labels.toString() })
            }
            else {
                searchParams.delete('queries');
                setSearchParams(searchParams);
            }
        }
    }
    return (
        <div className="side-filter" >
            <div className="filter">
                <span className='sortBy'>Brend</span>
                <button onClick={onClickHandler} className="toggle">
                    {filterVisibility
                        ?
                        <img src={MinusIcon} alt="minus" />
                        :
                        <img src={PlusIcon} alt="plus" />
                    }
                </button>
            </div>
            {filterVisibility &&
                <div className="options-dropdown">
                    <ul className='options'>
                        {options.map((el) => {
                            return <li key={el.id} className='option'>
                                <DebounceInput
                                    type="checkbox"
                                    onChange={(e) => changeHandler(e)(el)}
                                    name={el.label}
                                    id={el.label}
                                    defaultChecked={searchParams.get('queries')?.includes(el.label)}
                                    debounceTimeout={500}
                                />
                                <label htmlFor={el.label}>{el.label}</label>
                            </li>
                        })}
                    </ul>
                </div>}

        </div >
    )
}

export default Filter