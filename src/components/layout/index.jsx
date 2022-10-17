import Intro from "./intro"
import About from "./about"
import Projects from "./projects"
// import Contact from "./contact"
// import Education from "./education"
import Work from "./work"
import Quote from "./quote"


const Layout = () => {
  return (
    <main>
      <Intro />
      <About />
      <Projects />
      <Work />
      {/* <Education /> */}
      {/* <Contact /> */}
      <Quote />
    </main>
  )
}

export default Layout
