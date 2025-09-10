import { Link } from "react-router-dom";
import "./ShirtCard.css";

function ShirtCard({ shirt }) {
    return (
        <div className="shirt-card">
        <h3 className="shirt-title">{shirt.title}</h3>
      <div className="img-container">
        <img src={shirt.images.front} alt={shirt.title} />
      </div>
      <Link to={`/shirts/${shirt.id}`}>View Details</Link>
    </div>
    );
}

export default ShirtCard;