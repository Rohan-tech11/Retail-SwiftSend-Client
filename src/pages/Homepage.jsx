// import homepage images from assets
import heroBgImage from "../assets/Homepage/hero-1-bg.jpg";
import helpImage from "../assets/Homepage/help.png";
import helpOneImage from "../assets/Homepage/help-1.svg";
import helpTwoImage from "../assets/Homepage/help-2.svg";
import clientOneImage from "../assets/Homepage/cli-1.png";
import clientTwoImage from "../assets/Homepage/cli-2.png";
import clientThreeImage from "../assets/Homepage/cli-3.png";
import clientFourImage from "../assets/Homepage/cli-4.png";
import clientFiveImage from "../assets/Homepage/cli-5.jpg";

// import css module styles
import styles from "./Homepage.module.css";

export default function Homepage() {
  return (
    <div>
      <div id="hero" className={styles.hero}>
        <img
          src={heroBgImage}
          alt="background image"
          className={styles.hero__bg}
        />
        <div className={styles.hero__area}>
          <div className="container">
            <div className={styles.hero__content}>
              <h1 data-aos="fade-up" data-aos-anchor-placement="top-center">
                Logistic Delivery Around The World
              </h1>
            </div>
          </div>
        </div>
      </div>

      <section className={styles.image__text__section}>
        <div className={styles.help__img}>
          <img src={helpImage} alt="help" />
        </div>
        <div className={styles.text__container}>
          <h2 className={styles.section__title}>
            How We Help Businesses Across The World.
          </h2>

          <p className={styles.section__text}>
            To become a digital logistics company, you&apos;ll need to invest in
            the latest technology. This includes transportation management
            systems (TMS), warehouse management systems (WMS), and other
            software that can help you streamline your operations, reduce costs,
            and improve customer service.
          </p>
          <ul className={styles.help__collections}>
            <li>
              <div className={styles.help__icon}>
                <img src={helpOneImage} alt="help" />
              </div>
              <h3>Ultimate Data Protection</h3>
            </li>
            <li>
              <div className={styles.help__icon}>
                <img src={helpTwoImage} alt="help" />
              </div>
              <h3>Easy and Quick Customer service</h3>
            </li>
          </ul>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            className={styles.hero__btn__box}
          >
            <a href="#" className={styles.btn + " " + styles.btn__orange}>
              About Us
            </a>
          </div>
        </div>
      </section>

      <div id="client" className={styles.client + " " + styles.section__pb}>
        <div className={styles.client__area}>
          <div className="container">
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              className={styles.section__top__title}
            >
              <p className={styles.client__text}>
                Trusted by 100+ growing partners take our services
              </p>
            </div>
            <div className={styles.client__wrapper}>
              <img
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
                src={clientOneImage}
                alt="client"
              />
              <img
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
                src={clientTwoImage}
                alt="client"
              />
              <img
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
                src={clientThreeImage}
                alt="client"
              />
              <img
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
                src={clientFourImage}
                alt="client"
              />
              <img
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
                src={clientFiveImage}
                alt="client"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
