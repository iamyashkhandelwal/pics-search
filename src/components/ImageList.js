import React from "react";
import './ImageList.css';
import ImageCard from "./ImageCard";

const ImageList = (props) => {
    console.log(props);
    // console.log(props.images.map((e) => e.urls.regular));

    let images = props.images.map((image) => {
        // return <img key={image.id} 
        //             src={image.urls.regular} alt={image.description}
        //         />

        return <ImageCard key={image.id} image={image} />
    })

    // console.log(images);


    return(
        <div className="image-list">
            {/* ImageList: {props.images.length} */}
            {images}
        
        </div>
    );
}

export default ImageList;