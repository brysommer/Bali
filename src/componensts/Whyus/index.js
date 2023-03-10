import whyusimg1 from './img/why-us-1.jpg';
import whyusimg2 from './img/why-us-2.jpg';
import whyusimg3 from './img/why-us-3.jpg';
import { BiBookReader } from "react-icons/bi";


function Whyus() {
    return (
        <section id="why-us" class="why-us section-bg">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div class="card">
                <img src={whyusimg1} class="card-img-top" alt="..."/>
                <div class="card-icon">
                  <i class="bx bx-book-reader"></i>
                </div>
                <div class="card-body">
                  <h5 class="card-title"><a href="">Our Mission</a></h5>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div class="card">
                <img src={whyusimg2} class="card-img-top" alt="..."/>
                <div class="card-icon">
                  <i class="bx bx-calendar-edit"></i>
                </div>
                <div class="card-body">
                  <h5 class="card-title"><a href="">Our Plan</a></h5>
                  <p class="card-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div class="card">
                <img src={whyusimg3} class="card-img-top" alt="..."/>
                <div class="card-icon">
                  <i class="bx bx-landscape"></i>
                </div>
                <div class="card-body">
                  <h5 class="card-title"><a href="">Our Vision</a></h5>
                  <p class="card-text">Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Whyus;