import ShirtDetails from "../components/shirtdetails/ShirtDetails";

function ShirtDetailsPage({ shirt }) {
    return (
        <div>
            <ShirtDetails shirt={shirt} />
        </div>
    );
}

export default ShirtDetailsPage;
