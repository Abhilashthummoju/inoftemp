import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import About from "./components/About";
import Clients from "./components/Clients";
import Features from "./components/Features";
import FAQs from "./components/FAQs";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/footer";
function App() {
  return (
    <>
      {/* <-------------------------- Header SECTION  -------------------> */}
      <Header />

      <main class="main">
        {/* <!----------------------- HERO SECTION ----------------------> */}
        <HeroSection />

        {/* <!----------------------- FEATURED SERVICES -----------------> */}
        <Services />

        {/* <!------------------------ About Section --------------------> */}

        <About />

        {/* <!----------------------- Clients Section -------------------> */}

        <Clients />

        {/* <!---------------------- Features Section -------------------> */}

        <Features />

        {/* <!-- Features Details Section --> */}
        <section id="features-details" class="features-details section">
          <div class="container">
            <div class="row gy-4 justify-content-between features-item">
              <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <img src="assets/img/features-1.jpg" class="img-fluid" alt="" />
              </div>

              <div
                class="col-lg-5 d-flex align-items-center"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div class="content">
                  <h3>Corporis temporibus maiores provident</h3>
                  <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident.
                  </p>
                  <a href="#" class="btn more-btn">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- Features Item --> */}

            <div class="row gy-4 justify-content-between features-item">
              <div
                class="col-lg-5 d-flex align-items-center order-2 order-lg-1"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div class="content">
                  <h3>Neque ipsum omnis sapiente quod quia dicta</h3>
                  <p>
                    Quidem qui dolore incidunt aut. In assumenda harum id iusto
                    lorena plasico mares
                  </p>
                  <ul>
                    <li>
                      <i class="bi bi-easel flex-shrink-0"></i> Et corporis ea
                      eveniet ducimus.
                    </li>
                    <li>
                      <i class="bi bi-patch-check flex-shrink-0"></i>{" "}
                      Exercitationem dolorem sapiente.
                    </li>
                    <li>
                      <i class="bi bi-brightness-high flex-shrink-0"></i> Veniam
                      quia modi magnam.
                    </li>
                  </ul>
                  <p></p>
                  <a href="#" class="btn more-btn">
                    Learn More
                  </a>
                </div>
              </div>

              <div
                class="col-lg-6 order-1 order-lg-2"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <img src="assets/img/features-2.jpg" class="img-fluid" alt="" />
              </div>
            </div>
            {/* <!-- Features Item --> */}
          </div>
        </section>
        {/* <!-- /Features Details Section --> */}

        {/* <!-- Services Section --> */}
        <section id="services" class="services section light-background">
          {/* <!-- Section Title --> */}
          <div class="container section-title" data-aos="fade-up">
            <h2>Services</h2>
            <p>
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
          </div>
          {/* <!-- End Section Title --> */}

          <div class="container">
            <div class="row g-5">
              <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <div class="service-item item-cyan position-relative">
                  <i class="bi bi-activity icon"></i>
                  <div>
                    <h3>Nesciunt Mete</h3>
                    <p>
                      Provident nihil minus qui consequatur non omnis maiores.
                      Eos accusantium minus dolores iure perferendis tempore et
                      consequatur.
                    </p>
                    <a href="#" class="read-more stretched-link">
                      Learn More <i class="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- End Service Item --> */}

              <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                <div class="service-item item-orange position-relative">
                  <i class="bi bi-broadcast icon"></i>
                  <div>
                    <h3>Eosle Commodi</h3>
                    <p>
                      Ut autem aut autem non a. Sint sint sit facilis nam iusto
                      sint. Libero corrupti neque eum hic non ut nesciunt
                      dolorem.
                    </p>
                    <a href="#" class="read-more stretched-link">
                      Learn More <i class="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- End Service Item --> */}

              <div class="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                <div class="service-item item-teal position-relative">
                  <i class="bi bi-easel icon"></i>
                  <div>
                    <h3>Ledo Markt</h3>
                    <p>
                      Ut excepturi voluptatem nisi sed. Quidem fuga consequatur.
                      Minus ea aut. Vel qui id voluptas adipisci eos earum
                      corrupti.
                    </p>
                    <a href="#" class="read-more stretched-link">
                      Learn More <i class="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- End Service Item --> */}

              <div class="col-lg-6" data-aos="fade-up" data-aos-delay="400">
                <div class="service-item item-red position-relative">
                  <i class="bi bi-bounding-box-circles icon"></i>
                  <div>
                    <h3>Asperiores Commodi</h3>
                    <p>
                      Non et temporibus minus omnis sed dolor esse consequatur.
                      Cupiditate sed error ea fuga sit provident adipisci neque.
                    </p>
                    <a href="#" class="read-more stretched-link">
                      Learn More <i class="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- End Service Item --> */}

              <div class="col-lg-6" data-aos="fade-up" data-aos-delay="500">
                <div class="service-item item-indigo position-relative">
                  <i class="bi bi-calendar4-week icon"></i>
                  <div>
                    <h3>Velit Doloremque.</h3>
                    <p>
                      Cumque et suscipit saepe. Est maiores autem enim facilis
                      ut aut ipsam corporis aut. Sed animi at autem alias eius
                      labore.
                    </p>
                    <a href="#" class="read-more stretched-link">
                      Learn More <i class="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- End Service Item --> */}

              <div class="col-lg-6" data-aos="fade-up" data-aos-delay="600">
                <div class="service-item item-pink position-relative">
                  <i class="bi bi-chat-square-text icon"></i>
                  <div>
                    <h3>Dolori Architecto</h3>
                    <p>
                      Hic molestias ea quibusdam eos. Fugiat enim doloremque aut
                      neque non et debitis iure. Corrupti recusandae ducimus
                      enim.
                    </p>
                    <a href="#" class="read-more stretched-link">
                      Learn More <i class="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- End Service Item --> */}
            </div>
          </div>
        </section>
        {/* <!-- /Services Section --> */}

        {/* <!-- More Features Section --> */}
        <section id="more-features" class="more-features section">
          <div class="container">
            <div class="row justify-content-around gy-4">
              <div
                class="col-lg-6 d-flex flex-column justify-content-center order-2 order-lg-1"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h3>Enim quis est voluptatibus aliquid consequatur</h3>
                <p>
                  Esse voluptas cumque vel exercitationem. Reiciendis est hic
                  accusamus. Non ipsam et sed minima temporibus laudantium.
                  Soluta voluptate sed facere corporis dolores excepturi
                </p>

                <div class="row">
                  <div class="col-lg-6 icon-box d-flex">
                    <i class="bi bi-easel flex-shrink-0"></i>
                    <div>
                      <h4>Lorem Ipsum</h4>
                      <p>
                        Voluptatum deleniti atque corrupti quos dolores et quas
                        molestias{" "}
                      </p>
                    </div>
                  </div>
                  {/* <!-- End Icon Box --> */}

                  <div class="col-lg-6 icon-box d-flex">
                    <i class="bi bi-patch-check flex-shrink-0"></i>
                    <div>
                      <h4>Nemo Enim</h4>
                      <p>
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiise
                      </p>
                    </div>
                  </div>
                  {/* <!-- End Icon Box --> */}

                  <div class="col-lg-6 icon-box d-flex">
                    <i class="bi bi-brightness-high flex-shrink-0"></i>
                    <div>
                      <h4>Dine Pad</h4>
                      <p>
                        Explicabo est voluptatum asperiores consequatur magnam.
                        Et veritatis odit
                      </p>
                    </div>
                  </div>
                  {/* <!-- End Icon Box --> */}

                  <div class="col-lg-6 icon-box d-flex">
                    <i class="bi bi-brightness-high flex-shrink-0"></i>
                    <div>
                      <h4>Tride clov</h4>
                      <p>
                        Est voluptatem labore deleniti quis a delectus et. Saepe
                        dolorem libero sit
                      </p>
                    </div>
                  </div>
                  {/* <!-- End Icon Box --> */}
                </div>
              </div>

              <div
                class="features-image col-lg-5 order-1 order-lg-2"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <img src="assets/img/features-3.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>
        {/* <!-- /More Features Section --> */}

        {/* <!------------------------------- Faq Section ------------------------------> */}
        <FAQs />

        {/* <!------------------------------- Testimonials Section ---------------------> */}
        <Testimonials />

        {/* <!-------------------------------- Contact Section -------------------------> */}
        <Contact />
      </main>

      {/* <---------------------------------------Footer Section----------------------------> */}

      <Footer />
      {/* <!-- Scroll Top --> */}
      <a
        href="#"
        id="scroll-top"
        class="scroll-top d-flex align-items-center justify-content-center"
      >
        <i class="bi bi-arrow-up-short"></i>
      </a>

      {/* <!-- Preloader --> */}
      <div id="preloader"></div>

      {/* <!-- Vendor JS Files --> */}
      <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="assets/vendor/php-email-form/validate.js"></script>
      <script src="assets/vendor/aos/aos.js"></script>
      <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
      <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>

      {/* <!-- Main JS File --> */}
      <script src="assets/js/main.js"></script>
    </>
  );
}

export default App;
