import { Link } from "react-router-dom"
import "./NavBar.css"
import { useContext } from "react"
import { ShirtContext } from "../../context/ShirtContext"

function NavBar() {
    const { searchQuery, setSearchQuery } = useContext(ShirtContext);
    const { sortOption, setSortOption } = useContext(ShirtContext);

    return (
    <nav className='navbar'>
      <Link to="/"><h1><strong>Football Shirt Gallery</strong></h1></Link>
      <input
        className="search-field"
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
       <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className="sort-dropdown"
      >
        <option value="default" disabled hidden>Sort By</option>
        <option value="title-asc">Title (A–Z)</option>
        <option value="title-desc">Title (Z–A)</option>
        <option value="year-asc">Year (Oldest First)</option>
        <option value="year-desc">Year (Newest First)</option>
      </select>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;