import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.tag}>Hello, I am</div>
        <h1 className={styles.name}>Harish Guru</h1>
        <h2 className={styles.role}>MERN Stack Developer</h2>
        <p className={styles.desc}>
          A passionate web developer who builds clean, functional, and real-world
          web applications using the modern MERN stack — from database to deployment.
        </p>
        <div className={styles.btns}>
          <a href="#projects" className={styles.btnPrimary}>View My Work</a>
          <a href="#contact" className={styles.btnOutline}>Get In Touch</a>
        </div>
      </div>
    </section>
  );
}
