import { useContext } from "react";
import { ShirtContext } from "../../context/ShirtContext";
import ShirtCard from "../shirtcard/ShirtCard";
import "./GalleryGrid.css";

function GalleryGrid() {
    const { shirtCollection, searchQuery, sortOption } = useContext(ShirtContext);

    // filter list based on search term
    let filteredShirts = shirtCollection.filter((shirt) =>
        shirt.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // sort shirts based on sort option
    if (sortOption === "title-asc") {
        filteredShirts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOption === "title-desc") {
        filteredShirts.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortOption === "year-asc") {
        filteredShirts.sort((a, b) => a.year - b.year);
    } else if (sortOption === "year-desc") {
        filteredShirts.sort((a, b) => b.year - a.year);
    }

    return (
        <div className="gallery-grid">
            {filteredShirts.map((shirt) => (
                <ShirtCard key={shirt.id} shirt={shirt} />
            ))}
        </div>
    );
}

export default GalleryGrid;