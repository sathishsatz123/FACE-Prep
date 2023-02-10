import Header from '../Header'

import './index.css'

const NotFound = () => (
  <div className="main-not-found-container">
    <Header />
    <div className="not-found-container">
      <img className="not-found-image" alt="not found"/>
      <h1 className="not-found-heading">Page Not Found</h1>
      <p className="not-found-para">
        we’re sorry, the page you requested could not be found
      </p>
    </div>
  </div>
)

export default NotFound
