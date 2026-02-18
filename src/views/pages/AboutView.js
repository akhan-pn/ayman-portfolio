import abstractImg from "../../assets/images/home/abstract-figure.svg";
// import portraitVerImg from '../../assets/images/about/cristian-saenz-portrait-lost.jpg'
// import portraitHorImg from '../../assets/images/about/cristian-saenz-portrait-hor.jpg'
import portraitVerImg from "../../assets/images/about/mustafa-about.jpg";
import portraitHorImg from "../../assets/images/about/mustafa.jpg";

export default class AboutView {
  constructor() {
    this.html = "";
  }

  getData() {
    this.createContent();
  }

  createContent() {
    this.html = `
    <div class="about">
      <div class="about__wrapper">
        <header class="about__header">
          <div class="about__header__wrapper">
            <div class="about__header__bio">
              <div class="about__header__hi title">Hello!</div>
              <h1 class="about__header__title paragraph">
I’m a professional Full Stack Developer specializing in building scalable, user-centric web and mobile apps with React, Next.js, Node.js, and MongoDB—based in Hyderabad, India.

              </h1>
              <p class="about__header__description opacity__inner">
For the past two years I’ve engineered end-to-end solutions: from a custom Applicant Tracking System to high-converting Shopify and WordPress storefronts. My focus is clean architecture, thoughtful UI/UX, and performance that feels effortless.

              </p>
            </div>
            <div class="about__header__portrait">
              <figure class="about__header__media">
                <img
                  class="about__header__image three__image"
                  alt="Ayman"
                  src="${portraitVerImg}"
                  data-webgl="image"
                />
              </figure>
            </div>
          </div>
        </header>
        <main class="about__main">
          <div class="about__main__wrapper">
            <section class="section__skills">
              <div class="section__skills__wrapper">
                <h2 class="section__skills__title title__inner">Skills</h2>
                <div class="section__skills__content">
                  <div class="section__skills__devdes">
                    <div class="section__skills__devdes__item">
                      <h3 class="skill__title paragraph__inner">Design & Front-end</h3>
                      <div class="skill__items">
                        <div class="skill__item paragraph__inner">HTML5</div>
                        <div class="skill__item paragraph__inner">CSS3</div>
                        <div class="skill__item paragraph__inner">JavaScript</div>
                        <div class="skill__item paragraph__inner">React</div>
                        <div class="skill__item paragraph__inner">Next.js</div>
                        <div class="skill__item paragraph__inner">Tailwind CSS</div>
                        <div class="skill__item paragraph__inner">GSAP</div>
                      </div>
                    </div>
                    <div class="section__skills__devdes__item">
                      <h3 class="skill__title paragraph__inner">Back-end & Database
</h3>
                      <div class="skill__items">
                        <div class="skill__item paragraph__inner">Node.js</div>
                        <div class="skill__item paragraph__inner"> Express.js</div>
                        <div class="skill__item paragraph__inner">Mongoose</div>
                        <div class="skill__item paragraph__inner">MongoDB</div>
                      </div>
                    </div>
                     <div class="section__skills__devdes__item">
                      <h3 class="skill__title paragraph__inner">Marketing & SEO

</h3>
                      <div class="skill__items">
                        <div class="skill__item paragraph__inner">Facebook Ads</div>
                        <div class="skill__item paragraph__inner">Google Ads</div>
                        <div class="skill__item paragraph__inner">Google Analytics</div>
                        <div class="skill__item paragraph__inner">SEO Strategy</div>
                      </div>
                    </div>
                  </div>
                  <p class="section__skill__description opacity__inner">
                    <span>
I’m a fast learner 🚀, adaptive, and passionate about tech innovation 💡. My goal is to craft digital experiences that delight users and drive business growth.

                </span>
                    <span class="section__skill__description__git">
                      If you want to see how this GitHub profile , check out my <a class="word__link" href="https://github.com/akhan-pn" target="_blank">GitHub profile</a>.
                    </span>
                  </p>
                </div>
                <div class="section__skills__logo">
                  <figure class="section__skills__logo__media">
                    <img
                      class="section__skills__logo__image object__rotate"
                      alt="Mustafa Design Studio"
                      src="${abstractImg}"
                    />
                  </figure>
                </div>
              </div>
            </section>
            <section class="section__experience">
  <div class="section__experience__wrapper">
    <h2 class="section__experience__title title__inner">
      Experience
    </h2>
    <div class="section__experience__companies">
      <div class="section__line"></div>
      <div class="experience__company">
        <div class="company__info">
          <h4 class="company__name paragraph__inner">
            ProficientNow
          </h4>
          <div class="company__positions paragraph__inner">
          Full-Stack Developer
          </div>
        </div>
        <div class="company__duration">
          <div class="duration__number title__inner">02</div>
          <div class="duration__year title__inner">Years</div>
        </div>
      </div>
      <div class="section__line"></div>
      <div class="experience__company">
        <div class="company__info">
          <h4 class="company__name paragraph__inner">
Amvotech Solution Inc
          </h4>
          <div class="company__positions paragraph__inner">
Digital Marketing & Web Developer           </div>
        </div>
        <div class="company__duration">
          <div class="duration__number title__inner">01</div>
          <div class="duration__year title__inner">Year</div>
        </div>
      </div>
      <div class="section__line"></div>
    </div>
  </div>
</section>

            <section class="section__photo">
              <div class="section__photo__wrapper">
                <figure class="section__photo__media">
                  <img
                    class="section__photo__image three__image"
                    alt="Mustafa"
                    src="${portraitHorImg}"
                    data-webgl="image"
                  />
                </figure>
              </div>
            </section>
            <section class="section__moreinfo">
              <div class="section__moreinfo__wrapper">
                <div class="section__moreinfo__inspiration">
                  <h5 class="section__moreinfo__phrase">
                    <div class="phrase__line paragraph__inner">
                      Good design is obvious.
                    </div>
                    <div class="phrase__line paragraph__inner">
                      Great design is transparent.
                    </div>
                  </h5>
                  <div class="section__moreinfo__author">
                    <div class="author__line section__line"></div>
                    <div class="author__name title__inner">Joe_Sparano</div>
                  </div>
                </div>
                <div class="section__moreinfo__description">
                  <p class="section__moreinfo__text opacity__inner">
                    My projects focus on creating meaningful digital experiences that solve real user problems. Rest assured, your product is in expert hands - I'll elevate your user interface with exceptional design thinking and ensure your users have unforgettable experiences.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </main>
        <footer class="footer__contact">
          <div class="footer__contact__wrapper">
            <div class="footer__contact__main">
              <div class="footer__contact__logo">
                <figure class="footer__contact__logo__media">
                  <img
                    class="footer__contact__logo__image object__rotate"
                    alt="Ayman Design Studio"
                    src="${abstractImg}"
                  />
                </figure>
              </div>
              <div class="footer__contact__advice">
                <h2 class="footer__contact__text">
                  <div class="footer__advice__line title__inner">
                    Have_a
                  </div>
                  <div class="footer__advice__line title__inner">project</div>
                  <div class="footer__advice__line title__inner">in_mind?</div>
                </h2>
                <a
                  class="footer__contact__label word__link title__inner"
                  href="mailto:khanayman080@gmail.com"
                  >Contact_me</a
                >
              </div>
            </div>
            <div class="footer__about__contact__networks">
              <ul class="footer__contact__items">
                <li class="footer__network">
                  <a class="word__link" href="https://github.com/akhan-pn" target="_blank">GitHub</a>
                </li>
                 <li class="footer__network">
                  <a class="word__link" href="https://www.linkedin.com/in/mohammed-ayman-khan-370319263/" target="_blank">LinkedIn</a>
                </li>
                <li class="footer__network">
                  <a class="word__link" href="mailto:khanayman080@gmail.com">Email</a>
                </li>
              </ul>
              <div class="footer__copy">©2025</div>
            </div>
          </div>
        </footer>
      </div>
    </div>
    `;
  }
}
