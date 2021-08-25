import react from "react";
import { NavLink } from "react-router-dom";
import { paths } from "../helpers/Route";
import { useAppDispatch } from "../utils/redux/hooks";
import { resetHeader, setOverlay } from "../utils/reducers/model.reducer";
interface Props {
  toggleHeader: () => void;
  state?: boolean;
  route: string;
}

export const Header: React.FC<Props> = (props) => {
  const { state, route } = props;

  const filteredRoutes = paths.filter((rt) => rt.name !== route);
  const dispatch = useAppDispatch();
  const resetHead = () => {
    dispatch(resetHeader(false));
    resetOverLay();
  };
  const resetOverLay = () => {
    dispatch(setOverlay(true));
    return setTimeout(() => {
      dispatch(setOverlay(false));
    }, 1000);
  };
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
                {filteredRoutes.map((route) => (
                  <li key={route.name}>
                    <NavLink
                      to={route.path}
                      className="nav-tem link-item"
                      onClick={resetHead}
                    >
                      {route.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
