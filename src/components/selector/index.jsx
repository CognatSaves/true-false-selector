import React, {useEffect, useState} from 'react';
import './selector.scss';

const Selector = ({ data }) => {
    const [value, setValue] = useState(true);
    const [variants, setVariants] = useState(['is', 'is not']);

    useEffect(() => {
        if (data) {
            setValue(data.value);

            let text = data.text;
            let firstSpaceIndex = text.indexOf(' ');
            let parts;

            if (firstSpaceIndex !== -1) {
                parts = [
                    text.slice(0, firstSpaceIndex + 1),
                    text.slice(firstSpaceIndex)
                ];
            } else {
                parts = [
                    text,
                    ''
                ];
            }            

            setVariants([text, parts[0] + ' not' + parts[1]]);
        }   
    }, [data])

    return (
        <div className="selector">
            <div className="selector-variants">
            {
                variants.map((variant, index) => (
                    <div 
                        className="element variant"
                        onClick={() => setValue(index === 0)}
                    >
                        <div 
                            className={"value " + ((index === 0) ? 'correct' : 'wrong' )}
                        >{variant}</div>
                    </div>
                ))
            }
            </div>   
            <div className={"element background animated " + (value ? 'correct' : 'wrong')}></div>         
        </div>
    )
}

export default Selector;