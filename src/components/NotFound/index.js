// Write your code here
import './index.css'
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const NotFound = () => (
  <>
    <Navbar />
    <ThemeContext>
      {value => {
        const {isDarkTheme} = value
        const headingClassName = isDarkTheme
          ? 'heading content-dark'
          : 'heading content-light'
        const paragraphClassName = isDarkTheme
          ? 'paragraph content-dark'
          : 'paragraph content-light'
        const className = isDarkTheme
          ? 'dark notFound-container'
          : 'light notFound-container'
        return (
          <div className={className}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="image"
            />
            <h1 className={headingClassName}>Lost Your Way</h1>
            <p className={paragraphClassName}>
              we cannot seem to find the page you are looking for.
            </p>
          </div>
        )
      }}
    </ThemeContext>
  </>
)
export default NotFound
