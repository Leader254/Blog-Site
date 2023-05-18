import { Link } from 'react-router-dom'
import { FaHome, FaBookmark } from "react-icons/fa"
import { FcAbout } from "react-icons/fc";
import { TiContacts } from "react-icons/ti";
import './Navbar.css'
function Navbar() {
  return (
    <div className="navbar">
      <ul>
      <li><Link to="/"><FaHome />Landing Page</Link></li>
      <li><Link to="/blogs"><FaBookmark />Blogs</Link></li>
      <li><Link to="/about"><FcAbout/>About</Link></li>
      <li><Link to="/contact"><TiContacts/>Contact Us</Link></li>
      </ul>
      </div>
  )
}

export default Navbar