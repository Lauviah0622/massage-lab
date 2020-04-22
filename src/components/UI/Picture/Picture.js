import React, { useState } from 'react';

const Picture = (props) => {
    const [hookState, setHookState] = useState({
        webp: null,
        img: null
    })

    // dynamic Import webp
    import(`../../../asset/img/${props.name}.webp`)
        .then(webpFile => {
            console.log(webpFile.default);
            setHookState({
                webp : <source srcSet={webpFile.default} type="image/webp" />
            })
        })
        .catch(err => console.log(err))

    // dynamic Import JPG/PNG  

    import(`../../../asset/img/${props.name}.png`)
        .then(imgFile => {
            console.log(imgFile);
            setHookState({
                img: <img src={imgFile.default} alt={props.name} style={props.imgStyle} />
            })
            console.log(hookState.img);
        })
        .catch(err => {
            console.log(err);
        })          
    return (
        <picture>
            {hookState.webp}
            {hookState.img}
        </picture>
    )

}

// export default Picture;