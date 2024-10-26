function Navbar() {
    return  <>
    <nav className="navbar navbar-light bg-light justify-content-between px-4">
  <a className="navbar-brand">Quiz App</a>
  <form className="d-flex flex-row">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>
    </>
}

export default Navbar;