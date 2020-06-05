import React from 'react';
import "./assets/css/main.css";
import Button_Nav from './components/button/button';
import Intro from "./components/modules/intro/intro"
import Proyectos from './components/modules/proyectos/proyectos';

export default function App() {
  return (
    <div id="page-wrapper">
      <section id="header" className="wrapper">
        <div id="logo">
          <h1><a href="index.html">Francisco Javier Novoa P.</a></h1>
          <p>Full Stack Web Developer</p>
        </div>
        <nav id="nav">
          <ul>
            <Button_Nav url="https://github.com/Francisco-Novoa" text="Github" />
            <Button_Nav url="https://www.linkedin.com/in/francisconovoaparada/" text="Linkedin" />
          </ul>
        </nav>
      </section>
      <Intro/>
      <Proyectos/>
      <section id="main" className="wrapper style2">
        <div className="title">The Details</div>
        <div className="container">
          <a href="#" className="image featured">
            <img src="images/pic01.jpg" alt="" />
          </a>
          <section id="features">
            <header className="style1">
              <h2>Dolor consequat feugiat amet veroeros</h2>
              <p>Feugiat dolor nullam orci pretium phasellus justo</p>
            </header>
            <div className="feature-list">
              <div className="row">
                <div className="col-6 col-12-medium">
                  <section>
                    <h3 className="icon fa-comment">Mattis velit diam vulputate</h3>
                    <p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate et magna feugiat laoreet vel velit lorem.</p>
                  </section>
                </div>
                <div className="col-6 col-12-medium">
                  <section>
                    <h3 className="icon solid fa-sync">Lorem ipsum dolor sit veroeros</h3>
                    <p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate et magna feugiat laoreet vel velit lorem.</p>
                  </section>
                </div>
                <div className="col-6 col-12-medium">
                  <section>
                    <h3 className="icon fa-image">Pretium phasellus justo lorem</h3>
                    <p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate et magna feugiat laoreet vel velit lorem.</p>
                  </section>
                </div>
                <div className="col-6 col-12-medium">
                  <section>
                    <h3 className="icon solid fa-cog">Tempus sed pretium orci</h3>
                    <p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate et magna feugiat laoreet vel velit lorem.</p>
                  </section>
                </div>
                <div className="col-6 col-12-medium">
                  <section>
                    <h3 className="icon solid fa-wrench">Aliquam consequat et feugiat</h3>
                    <p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate et magna feugiat laoreet vel velit lorem.</p>
                  </section>
                </div>
                <div className="col-6 col-12-medium">
                  <section>
                    <h3 className="icon solid fa-check">Dolore laoreet aliquam mattis</h3>
                    <p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate et magna feugiat laoreet vel velit lorem.</p>
                  </section>
                </div>
              </div>
            </div>
            <ul className="actions special">
              <li><a href="#" className="button style1 large">Get Started</a></li>
              <li><a href="#" className="button style2 large">More Info</a></li>
            </ul>
          </section>
        </div>
      </section>
      
      <section id="footer" className="wrapper">
        <div className="title">The Rest Of It</div>
        <div className="container">
          <header className="style1">
            <h2>Ipsum sapien elementum portitor?</h2>
            <p>
              Sed turpis tortor, tincidunt sed ornare in metus porttitor mollis nunc in aliquet.<br />
								Nam pharetra laoreet imperdiet volutpat etiam feugiat.
							</p>
          </header>
          <div className="row">
            <div className="col-6 col-12-medium">
              <section>
                <form method="post" action="#">
                  <div className="row gtr-50">
                    <div className="col-6 col-12-small">
                      <input type="text" name="name" id="contact-name" placeholder="Name" />
                    </div>
                    <div className="col-6 col-12-small">
                      <input type="text" name="email" id="contact-email" placeholder="Email" />
                    </div>
                    <div className="col-12">
                      <textarea name="message" id="contact-message" placeholder="Message" rows="4"></textarea>
                    </div>
                    <div className="col-12">
                      <ul className="actions">
                        <li><input type="submit" className="style1" value="Send" /></li>
                        <li><input type="reset" className="style2" value="Reset" /></li>
                      </ul>
                    </div>
                  </div>
                </form>
              </section>
            </div>
            <div className="col-6 col-12-medium">
              <section className="feature-list small">
                <div className="row">
                  <div className="col-6 col-12-small">
                    <section>
                      <h3 className="icon solid fa-home">Mailing Address</h3>
                      <p>
                        Untitled Corp<br />
														1234 Somewhere Rd<br />
														Nashville, TN 00000
													</p>
                    </section>
                  </div>
                  <div className="col-6 col-12-small">
                    <section>
                      <h3 className="icon solid fa-comment">Social</h3>
                      <p>
                        <a href="#">@untitled-corp</a><br />
                        <a href="#">linkedin.com/untitled</a><br />
                        <a href="#">facebook.com/untitled</a>
                      </p>
                    </section>
                  </div>
                  <div className="col-6 col-12-small">
                    <section>
                      <h3 className="icon solid fa-envelope">Email</h3>
                      <p>
                        <a href="#">info@untitled.tld</a>
                      </p>
                    </section>
                  </div>
                  <div className="col-6 col-12-small">
                    <section>
                      <h3 className="icon solid fa-phone">Phone</h3>
                      <p>
                        (000) 555-0000
													</p>
                    </section>
                  </div>
                </div>
              </section>

            </div>
          </div>
          <div id="copyright">
            <ul>
              <li>&copy; Untitled.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

