import SearchBar from "./SearchBar"
import Logo from "./Logo"
const Navbar = () => {
  return (
    <div className="d-flex justify-content-center">
        <Logo />
        <SearchBar />
    </div>
  )
}

export default Navbar