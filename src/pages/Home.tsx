import { motion } from "framer-motion";
import Hero from "../components/Hero";
import LogosMarquee from "../components/LogosMarquee";
import Sobre from "../components/Sobre";
import Projetos from "../components/Projetos";
import ComoTrabalho from "../components/ComoTrabalho";
import Trajetoria from "../components/Trajetoria";
import Formacao from "../components/Formacao";
import Contato from "../components/Contato";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Hero />
      <LogosMarquee />
      <Sobre />
      <Projetos />
      <ComoTrabalho />
      <Trajetoria />
      <Formacao />
      <Contato />
    </motion.main>
  );
}
