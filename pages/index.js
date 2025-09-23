import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-b from-[#1c1c1c] via-[#3a2c1b] to-[#d1a562] text-white font-[Cairo] px-6 py-10">
      <div className="flex flex-col items-center">
        {/* اللوجو */}
        <motion.img
          src="/logo.png"
          alt="Logo"
          className="w-[150px] h-[180px] object-contain mb-15"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* العنوان */}
        <motion.h1
          className="text-5xl font-extrabold mb-2"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          هنا السلطان
        </motion.h1>
        <motion.p
          className="text-2xl mt-[30px] font-medium mb-5"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          شكراً لاختيارك السلطان
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <Link
            href="/about"
            className="w-[328px] mt-[100px] flex items-center justify-center h-[101px] bg-[#5b4630] text-white text-4xl font-bold rounded-2xl mb-4 shadow-md hover:bg-[#6b5239] transition"
          >
            فروعنا
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <Link
            href="/contact"
            className=" w-[328px] flex items-center justify-center max-w-[220px] h-[74px] bg-[#5b4630] text-white text-sm font-bold rounded-2xl shadow-md hover:bg-[#6b5239] transition"
          >
            الإقتراحات والشكاوي
          </Link>
        </motion.div>
      </div>

      {/* الفوتر */}
      <div className="flex items-center justify-center gap-6 mt-10 text-white">
        <a
          href="https://www.facebook.com/share/1CKMjXBUgK/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition text-2xl"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/_elsultanselim?igsh=YWlvN2x1aGJjMXJy"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition text-2xl"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.tiktok.com/@mahmoud_elsoultan1?_t=ZS-8zwcyPnYoI4&_r=1"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition text-2xl"
        >
          <FaTiktok />
        </a>
      </div>
    </div>
  );
}
