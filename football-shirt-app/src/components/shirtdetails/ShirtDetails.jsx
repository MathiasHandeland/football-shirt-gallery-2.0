import "./ShirtDetails.css"
import { useContext, useState } from "react"
import { useParams } from "react-router-dom"
import { ShirtContext } from "../../context/ShirtContext"
import { Link } from "react-router-dom"

function ShirtDetails() {
    const { shirtCollection } = useContext(ShirtContext);
    const { id } = useParams();
    const shirt = shirtCollection.find((s) => s.id === parseInt(id));
    const [ currentImage, setCurrentImage ] = useState(0);

    if (!shirt) {
        return <div>Shirt not found</div>;
    }

    const imageArray = Object.values(shirt.images)

    const handleImageClick = () => {
        setCurrentImage((currentImage + 1) % imageArray.length);
    }

    return (
        <div className="shirt-details">
            <h3>{shirt.title}</h3>
            <div className="shirt-details-img-container">
            <img
                className="shirt-image"
                src={imageArray[currentImage]}
                alt={`${shirt.title} view`}
                onClick={handleImageClick}
            />
      </div>
            <p><strong>Brand:</strong> {shirt.brand}</p>
            <p><strong>Colors:</strong> {shirt.colors}</p>
            <p><strong>Worn by players like:</strong> {shirt.wornBy}</p>
            <Link to={`/`}>Back To Gallery</Link>
        </div>
    )
}

export default ShirtDetails