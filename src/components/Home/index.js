// Write your code here
import ThemeContext from '../../context/ThemeContext'
import './index.css'
import Navbar from '../Navbar'

const Home = () => (
  <>
    <Navbar />
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const className = isDarkTheme
          ? 'dark home-container'
          : 'light home-container'
        const headingClassName = isDarkTheme
          ? 'heading content-dark'
          : 'heading content-light'
        return (
          <div className={className}>
            {isDarkTheme ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                alt="home"
                className="image"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                alt="home"
                className="image"
              />
            )}
            <h1 className={headingClassName}>Home</h1>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  </>
)
export default Home
