// Write your code here
import ThemeContext from '../../context/ThemeContext'
import './index.css'
import Navbar from '../Navbar'

const About = () => (
  <>
    <Navbar />
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const className = isDarkTheme
          ? 'dark about-container'
          : 'light about-container'
        const headingClassName = isDarkTheme
          ? 'heading content-dark'
          : 'heading content-light'
        return (
          <div className={className}>
            {isDarkTheme ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                alt="about"
                className="image"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                alt="about"
                className="image"
              />
            )}
            <h1 className={headingClassName}>About</h1>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  </>
)
export default About
