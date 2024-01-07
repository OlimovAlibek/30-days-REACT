import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/day-1">Day-1</Link>
          </li>
          <li>
            <Link to="/day-2">Day-2</Link>
          </li>
          <li>
            <Link to="/day-3">Day-3</Link>
          </li>
          <li>
            <Link to="/day-4">Day-4</Link>
          </li>
          <li>
            <Link to="/day-5">Day-5</Link>
          </li>
          <li>
            <Link to="/day-6">Day-6</Link>
          </li>
          <li>
            <Link to="/day-7">Day-7</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;