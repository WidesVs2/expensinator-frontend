import useTitle from "../../hooks/Title"
import { Link } from "react-router-dom"

function Privacy() {
  useTitle("Privacy Policy")
  return (
    <div className="container">
      <h1 className="text-center">Privacy Policy</h1>
      <hr />
      <section id="introduction" className="container mt-4 mb-4">
        <h2>Introduction to WidesVs2 Privacy Policy</h2>
        <p className="lead text-success mt-4">
          <strong>
            This application is developed as a demonstration product only. The
            collection of user data is a byproduct of ensuring app
            functionality. As such, I am committed to ensuring any data stored,
            acquired, given, or recieved in any way is NEVER sold or released
            unless required by law. If this app should ever become a commercial
            product, links will be provided to navigate there.
          </strong>
        </p>
        <h3
          style={{ fontFamily: "Marck Script" }}
          className="text-center display-3 text-success mt-5">{`--WidesVs2`}</h3>
        <p className="mt-4">Further detailed Policy Below</p>
      </section>
      <section id="policy" className="container mt-4 mb-4">
        <h2>Generic Privacy Policy</h2>
        <p className="mt-4">
          This privacy policy ("policy") will help you understand how WidesVs2
          ("us", "we", "our") uses and protects the data you provide to us when
          you visit and use Expensinator ("website", "service"). We reserve the
          right to change this policy at any given time, of which you will be
          promptly updated. If you want to make sure that you are up to date
          with the latest changes, we advise you to frequently visit this page.
        </p>
        <h2 className="mt-4">What user Data We Collect</h2>
        <p className="mt-4">
          When you visit the website, we may collect the following data:
        </p>
        <ul className="ms-0">
          <li className="ms-5">Your IP address.</li>
          <li className="ms-5">Your contact information and email address.</li>
          <li className="ms-5">
            Other information such as interests and preferences.
          </li>
          <li className="ms-5">
            Data profile regarding your online behavior on our website.
          </li>
        </ul>
        <h2 className="mt-4">Why We Collect Your Data</h2>
        <p className="mt-4">We are collecting your data for several reasons:</p>
        <ul>
          <li className="ms-5">To better understand your needs.</li>
          <li className="ms-5">To improve our services and products.</li>
          <li className="ms-5">
            To send you promotional emails containing the information we think
            you will find interesting.
          </li>
          <li className="ms-5">
            To customize our website according to your online behavior and
            personal preferences.
          </li>
        </ul>
        <h2 className="mt-4">Safeguarding and Securing the Data</h2>
        <p className="mt-4">
          WidesVs2 is committed to securing your data and keeping it
          confidential. WidesVs2 has done all in its power to prevent data
          theft, unauthorized access, and disclosure by implementing the latest
          technologies and software, which help us safeguard all the information
          we collect online.
        </p>
        <h2 className="mt-4">Our Cookie Policy</h2>
        <p className="mt-4">
          Once you agree to allow our website to use cookies, you also agree to
          use the data it collects regarding your online behavior (analyze web
          traffic, web pages you spend the most time on, and websites you
          visit). Please note that cookies don't allow us to gain control of
          your computer in any way. They are strictly used to monitor which
          pages you find useful and which you do not so that we can provide a
          better experience for you.
        </p>
        <h2 className="mt-4">Links to Other Websites</h2>
        <p className="mt-4">
          Our website contains links that lead to other websites. If you click
          on these links WidesVs2 is not held responsible for your data and
          privacy protection. Visiting those websites is not governed by this
          privacy policy agreement. Make sure to read the privacy policy
          documentation of the website you go to from our website.
        </p>
        <h2 className="mt-4">
          Restricting the Collection of your Personal Data
        </h2>
        <p className="mt-4">
          At some point, you might wish to restrict the use and collection of
          your personal data. If you have already agreed to share your
          information with us, feel free to{" "}
          <Link className="text-decoration-none" to="/contact">
            contact us
          </Link>{" "}
          via email and we will be more than happy to change this for you.
          WidesVs2 will not lease, sell or distribute your personal information
          to any third parties. We might do so if the law forces us. Your
          personal information will be used when we need to send you promotional
          materials if you agree to this privacy policy.
        </p>
      </section>
    </div>
  )
}

export default Privacy
