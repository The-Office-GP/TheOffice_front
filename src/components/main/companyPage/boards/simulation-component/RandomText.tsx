import React, {FC, useEffect, useState} from 'react';
import '../../../../../@styles/main/components/companyPage/TextAnimation.css';

const RandomText:FC <{text:string, xInitial:string, yInitial:string}> = ({text, xInitial, yInitial}) => {
    const [position, setPosition] = useState({x: xInitial, y: yInitial});

    return (
        <div className="container-random-text">
            <div
                className="animated-text"
                style={{left: position.x, top: position.y}}
            >
                {text}
            </div>
        </div>
    );
};

export default RandomText;
