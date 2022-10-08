import React from 'react';
import "./Result.scss";
import { useNavigate } from "react-router-dom"


const Result = ({ id, image, name, price, setTypingDropdown }) => {
    const navigate = useNavigate()
    const onClickResult = () => {
        navigate(`/details/${id}`)
        setTypingDropdown(false)
    }
    return (
        <div onClick={onClickResult} className="typing-result">
            <div className="productImg">
                <img src={image} alt="iphone" />
            </div>
            <div className="details">
                <div className="productName">
                    {name}
                </div>
                <div className="price">
                    {price} AZN
                </div>
            </div>
        </div>
    )
}

export default Result