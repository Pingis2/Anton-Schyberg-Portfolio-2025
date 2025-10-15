import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
      </header>
      <main className={styles.main}>

        <section className={styles.intro}>
          <div className={styles.introBox}>
            <div className={styles.imageWrapper}>
              <Image
                src="/profilbild.jpeg"
                alt="Profile Picture"
                width={550}
                height={600}
                className={styles.profileImage}
                />
            </div>
          </div>
          <div className={styles.introBox}>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis amet totam,
              tenetur natus voluptatem atque iste quia consequatur,
              sed iusto qui voluptatibus aliquam dolores excepturi laudantium distinctio expedita saepe non!
            </p>
          </div>
        </section>

      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
