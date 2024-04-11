import Image from "next/image";
import styles from "../page.module.css";
import ContactForm from "@/components/global/ContactForm";


export default function Home() {

  

  return (
    <main className={styles.main}>
      <ContactForm />
    </main>
  );
}
