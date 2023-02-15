import aboutImg from './img/about-img.jpg';
import { BiCheckDouble } from "react-icons/bi";


function About() {
  return (
    <section id="about" class="about">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <img src={aboutImg} class="img-fluid" alt=""/>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0">
            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
            <p class="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <ul>
              <li><BiCheckDouble /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li><BiCheckDouble />  Duis aute irure dolor in reprehenderit in voluptate velit.</li>
              <li><BiCheckDouble />  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
            </ul>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
