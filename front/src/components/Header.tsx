import react from "react";
import { NavLink } from "react-router-dom";
interface Props {
  toggleHeader: () => void;
  state?: boolean;
}

export const Header: React.FC<Props> = (props) => {
  const { state } = props;
  return (
    <header className={!state ? "header" : "header active"}>
      <div className="container">
        <div className="row flex-end">
          <button
            type="button"
            className="nav-toggle"
            onClick={props.toggleHeader}
          >
            <span id="toggle"></span>
          </button>
          <nav className="nav">
            <div className="nav-inner">
              <ul>
                <li>
                  <NavLink to="/" className="nav-tem link-item">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className="nav-tem link-item">
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className="nav-tem link-item">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/projects" className="nav-tem">
                    Portfolio
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
