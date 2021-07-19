import { FaMedal } from 'react-icons/fa';
import './Goal.css';

function Goal({ color, backgroundColor, borderColor, title }) {
    return (
        <>
            <div>
                <div style={{color, backgroundColor, borderColor}}  className="goalContainer position-relative">
                    <div className="iconBox position-absolute top-50 start-50 translate-middle text-center text-wrap">
                        <FaMedal className="icon"/>
                        <h6>{title}</h6>
                    </div>  
                </div>
            </div>
        </>
    )
}

export default Goal
