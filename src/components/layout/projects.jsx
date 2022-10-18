import DisplayPlane from "../three/displayPlane"

const Projects = () => {

  return (
    <section>
      <h2>Projects</h2>
      <h4>Blog Application</h4>
      <p>
        Next.js blog application using static site generation and server side rendering.
      </p>
      <p>You can view the hosted project and the code below.</p>
      <a href="https://chase-stokes-blog.vercel.app/" target='_blank'>Project</a>
      <a href="https://chase-stokes-blog.vercel.app/" target='_blank'>Code</a>
      <DisplayPlane link='https://chase-stokes-blog.vercel.app/' />
      <br />
      <hr />
      <h4>Next - Prisma/PostgreSQL</h4>
      <p>
        Next.js application created to familiarize myself with CRUD functionality using Prisma and PostgreSQL.
      </p>
      <p>You can view the hosted project and the code below.</p>
      <a href="https://prisma-postgres-nextjs.vercel.app/" target='_blank'>here</a>
      <a href="https://prisma-postgres-nextjs.vercel.app/" target='_blank'>here</a>
      <DisplayPlane link='https://prisma-postgres-nextjs.vercel.app/' />
      <br />
      <hr />
      <h4>Three-React-App</h4>
      <p>
        React.js project using Three.js, and GSAP to create a 3D scene with animations.
      </p>
      <p>You can view the codesandbox and te code below.</p>
      <a href="https://codesandbox.io/p/github/Chase-Stokes/threejs-react/main" target='_blank'>here</a>
      <a href="https://codesandbox.io/p/github/Chase-Stokes/threejs-react/main" target='_blank'>here</a>
      <DisplayPlane link='https://codesandbox.io/p/github/Chase-Stokes/threejs-react/main' />
      <br />
      <hr />
    </section>
  )
}

export default Projects
