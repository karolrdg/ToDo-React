import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="header" >
      <nav className="navbar navbar-expand-lg  container d-flex ">
        <span className="flex-grow-1">TAREFAS.DEV_</span>
        <ul className="navbar-nav ">
          <li className="nav-item me-auto">
            <Link className="nav-link active" id='home' aria-current="page" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item" >
            <Link className="nav-link" id='whoiam' to="/quemsou">
              Quem sou
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};