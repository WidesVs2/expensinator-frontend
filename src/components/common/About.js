import useTitle from "../../hooks/Title"
import { Link } from "react-router-dom"

// Images
import DisplaySmall from "../images/app-display.png"
import DisplayLarge from "../images/app-display-large.png"
import AdminLarge from "../images/admin-area-large.png"
import AdminSmall from "../images/admin-area.png"

function About() {
  useTitle("About Page")
  return (
    <div className="container">
      <h1 className="text-center mt-4">Welcome to WidesVs2's Expensinator!</h1>
      <p className="lead text-center mt-3 mb-4">
        An expanded expense tracking app providing user profiles and accurate
        calculation.
      </p>
      <section id="what-it-does" className="container mt-5">
        <h2 className="mt-5">What does this App do?</h2>
        <p className="mt-4">
          This App, here-in refered to as "Expensinator", was built to showcase
          coding skills. It allows for the registration and login of users,
          which are then redirected to the dashboard which displays current
          balance, list of past transactions, and a form to add additional
          transactions. <small>See Image Below</small>
        </p>
        <div className="container text-center w-75 h-75">
          <img
            srcSet={`${DisplaySmall} 260w, ${DisplayLarge} 650w`}
            sizes="(max-width: 600px) 260w,
                    650w"
            className=" img-fluid rounded border-dark border-5 mx-auto h-50"
            src={DisplaySmall}
            alt="Screen shot of app dashboard"
          />
        </div>
      </section>
      <section id="how-it-does" className="container mt-5">
        <h2 className="mt-5">How does Expensinator work?</h2>
        <p className="mt-4">
          Expensinator is built using modern web technologies such as React.Js,
          Node.Js, MongoDB Database, and Express. This is commonly grouped
          together to form the MERN stack of technology. The React web app makes
          requests to the Express server to store user and transaction data in
          the MongoDB database.{" "}
        </p>
        <p>
          With Expensinator, users can enter transactions as either Debit or
          Credit(expense or income), track a running balance, and view a list of
          past transactions. Each user has an individual balance and transaction
          record. An admin function is built in to the app, allowing certain
          users with admin access to view lists and totals of all users,
          transactions, and points of contact with other users. Currently only a
          single admin is supported, but framework exists to support additional
          individuals. <small>See Photo Below</small>
        </p>
        <div className="container text-center w-75 h-75">
          <img
            srcSet={`${AdminSmall} 260w, ${AdminLarge} 650w`}
            sizes="(max-width: 600px) 260w,
                    650w"
            className=" img-fluid rounded border-dark border-5 mx-auto h-50"
            src={DisplaySmall}
            alt="Screen shot of app admin area"
          />
        </div>
      </section>
      <section id="why-do-it" className="container mt-5">
        <h2 className="mt-5">Why build such a simple app?</h2>
        <p className="mt-4">
          I, WidesVs2, am currently seeking to switch careers from a
          sales/customer service field to a technological one. Specifically, I
          have spent the better part of the last year and a half learning web
          development and coding languages. Not gonna lie, it's not always been
          a smooth course and there have been several distractions along the
          way. However, I am confident in my current abilities and designed this
          simple demonstration of skills and capabilities to encourage more
          complex work. If you or your company need a junior level developer,
          feel free to reach out through the{" "}
          <Link className="text-decoration-none" to="/contact">
            contact form.
          </Link>
        </p>
        <p>
          Specifically, this app showcases the following skills and abilities:
        </p>
        <ul className="mt-4">
          <li>
            Effective and mobile responsive user interface design utilizing
            Bootstrap.
          </li>
          <li>
            Dynamic user interface built with{" "}
            <a
              rel="noreferrer"
              target="_blank"
              className="text-decoration-none"
              href="https://reactjs.org/">
              React JS.
            </a>
          </li>
          <li>
            Secure and fast data management built with{" "}
            <a
              rel="noreferrer"
              target="_blank"
              className="text-decoration-none"
              href="https://nodejs.org/en/">
              Node Js
            </a>
            ,
            <a
              rel="noreferrer"
              target="_blank"
              className="text-decoration-none"
              href="https://expressjs.com/">
              {" "}
              Express
            </a>
            , and{" "}
            <a
              rel="noreferrer"
              target="_blank"
              className="text-decoration-none"
              href="https://www.mongodb.com/">
              MongoDB
            </a>
            .
          </li>
          <li>
            User authentication system. (details of build absent for security
            purposes)
          </li>
          <li>
            Relational data management, user specific data management and access
            levels.
          </li>
          <li>Server management and logging system.</li>
          <li>Server and Client side code deployment and dev ops.</li>
          <li>Domain management and initial website set-up</li>
          <li>Website maintenance, updates, and security patches.</li>
        </ul>
      </section>
      <section id="credits" className="container mt-5">
        <h2 className="mt-5">Credits and Thanks</h2>
        <p className="mt-4">
          Expensinator wouldn't be possible without the contributions of a few.
          First, thank you to my loving wife. You support, encourage, and push
          me to become more and more every day. I love you. Second, to my best
          friend. Without your vision and wonder, I would have lost hope a long
          time ago. Third, to my parents. No matter how often I stumble, you
          always help lift me up again. Thank you for suffering through this
          with me. Finally, to all the creators on{" "}
          <a
            rel="noreferrer"
            target="_blank"
            className="text-decoration-none"
            href="https://www.youtube.com/">
            YouTube
          </a>{" "}
          whose tutorials got me this far. Specifically,{" "}
          <a
            rel="noreferrer"
            target="_blank"
            className="text-decoration-none"
            href="https://www.youtube.com/user/TechGuyWeb">
            Traversy Media
          </a>{" "}
          and{" "}
          <a
            rel="noreferrer"
            target="_blank"
            className="text-decoration-none"
            href="https://www.freecodecamp.org/">
            FreeCodeCamp.org.
          </a>{" "}
          Your collective knowledge, experience, and passion to share your
          skills has opened this door for me. Thank you all.
        </p>
      </section>
    </div>
  )
}

export default About
