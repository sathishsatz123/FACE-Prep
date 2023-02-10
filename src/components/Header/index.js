import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import {MdHome} from 'react-icons/md'

import {FiLogOut} from 'react-icons/fi'

import './index.css'

const Header = props => {
  const removeAccess = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <nav className="main-header-container">
      <Link to="/">
        <img
          src="http://cdn.onlinewebfonts.com/svg/img_311846.png"
          className="header-website-logo"
          alt="website logo"
        />
      </Link>
      <div className="lg-container">
        <ul className="lg-list">
          <li className="header-item">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
        </ul>
        <button
          type="submit"
          className="header-logout-button"
          onClick={removeAccess}
        >
          Logout
        </button>
      </div>
      <ul className="sm-container">
        <li className="sm-list-item">
          <Link to="/" className="l">
            <MdHome className="icons" />
          </Link>
        </li>
        <li className="sm-list-item">
          <button type="submit" className="button-icon" onClick={removeAccess}>
            <FiLogOut className="icons" />
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default withRouter(Header)