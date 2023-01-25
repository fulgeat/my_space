import { Link } from 'react-router-dom';
import './SearchBar.scss';

const SearchBar = ({ linkLogo, className }) => {
    return (
        <div className={`SearchBar ${className}`}>
            <Link to="music" className="SearchBar__link">
                <img
                    src={process.env.PUBLIC_URL + `/img/${linkLogo}`}
                    alt=""
                    className="SearchBar__logo"
                />
            </Link>
            <div className="SearchBar__input-inner">
                <input type="text" className="SearchBar__input" />
                <button className="SearchBar__button">
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            '/img/buttons/button_search.svg'
                        }
                        alt=""
                        className="SearchBar__button-img"
                    />
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
