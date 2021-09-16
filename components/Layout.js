import Nav from "./Navbar"

const Layout = ( { children }) => {
    return (
        <div className="content">
            <Nav/>
            {children}
        </div>
    )
}

export default Layout
