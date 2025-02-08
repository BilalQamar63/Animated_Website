import Home from "./components/Home"
import OurServices from "./components/OurServices"
import OurWorks from "./components/OurWorks"
import About from "./components/About"
import People from "./components/People"
import States from "./components/States"
import Contact from "./components/Contact"
import AboutStudio from "./components/AboutStudio"


const page = () => {
  return (
    <div>
     
      <Home/>
      <OurServices/>
      <OurWorks/>
      <About />
      <People />
      <States/>
      <Contact/>
      <AboutStudio/>
      
    </div>
  )
}

export default page
