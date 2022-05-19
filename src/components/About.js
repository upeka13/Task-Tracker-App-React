import { Link } from "react-router-dom"
import '../index.css';

const About = () => {
  return (
    <div>
        <div className="about">
        <h4>Version 1.0.0</h4>
        <Link to ="/" className="btn ">Go Back</Link>
        </div>
    </div>
  )
}

export default About