import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../layout/Layout";
import { Nav } from "../components/organisms/Nav";
import SectionOne from "../layout/SectionOne";
import { MobileFooter } from "../components/organisms/MobileFooter";
import { Button } from "../components/molecules/Button";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
const Home: NextPage = () => {
  return (
    <div className=" bg-bgBlue h-screen">
      <div className="bg-cover pt-[2rem]  w-full h-[10rem] bg-[url('../assets/images/bg-mobile.svg')]">
        <Nav />
        <SectionOne />
        <MobileFooter>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <Button />
          </motion.div>
        </MobileFooter>
      </div>
    </div>
  );
};

export default Home;
