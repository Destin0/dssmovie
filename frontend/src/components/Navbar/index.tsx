import { ReactComponent as GithubIcon } from '../../assets/img/github.svg';
import './styles.css';

function Navbar() {

    return (
        <header>
            <nav className="container">
                <div className="dsmove-nav-content">
                    <h1>DSmovie</h1>
                    <a href="https://github.com/Destin0">
                        <div>
                            <GithubIcon />
                            <p>/devsuperior</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}
export default Navbar;