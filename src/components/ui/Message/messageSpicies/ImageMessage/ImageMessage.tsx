import { useEffect, useState } from 'react';
import './ImageMessage.scss'
import 'fast-average-color';
import { FastAverageColor } from 'fast-average-color';


const fac = new FastAverageColor();

const ImageMessage = (props : {url : string, text : string}) => {


    const [backgroundColor, setBackgroundColor] = useState<string>('#000');


    useEffect(() => {

        fac.getColorAsync(props.url)
        .then((color) => {
            setBackgroundColor(color.hex)
        })

    }, [])

    
    return (
        <div className='image_cont'>
            <img className='image_message' style={{backgroundColor : backgroundColor}} src={props.url} alt='image' /> 
            <div className='image_text'>
                {props.text}
            </div>

        </div>
    );
};

export default ImageMessage;