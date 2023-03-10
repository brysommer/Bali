import heroImg from "./img/hero-bg.jpg"


function Hero() {
    return (
        <section id="hero" style={{backgroundImage:`url(${heroImg})` }} >
            <div class="hero-container">
                <h1>Welcome to Siimple</h1>
                <h2>Please, fill out the for below to be notified for the latest updates!</h2>
                <form action="forms/notify.php" method="post" role="form" class="php-email-form">
                <div class="row no-gutters">
                    <div class="col-md-6 form-group pr-md-1">
                        <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required />
                    </div>
                    <div class="col-md-6 form-group pl-md-1">
                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required  />
                    </div>
                </div>
                <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your notification request was sent. Thank you!</div>
            </div>
            <div class="text-center"><button type="submit">Notify me!</button></div>
            </form>
            </div>
        </section>
    )
}

export default Hero;