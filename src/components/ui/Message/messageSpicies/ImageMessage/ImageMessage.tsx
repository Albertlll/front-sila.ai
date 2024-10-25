
const ImageMessage = (props : {base64 : string}) => {
    
    return (
        <img src={props.base64} alt='image' />        
    );
};

export default ImageMessage;