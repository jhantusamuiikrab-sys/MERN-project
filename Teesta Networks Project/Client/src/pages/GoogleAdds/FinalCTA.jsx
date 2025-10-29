
import { motion } from 'framer-motion';

const VERY_LIGHT_TEXT = '#f9f3e9';
const PRIMARY_GOLD = '#cfa866'; 
 const DARKER_GOLD = '#b58c49';
const SHADOW_RGB = '207, 168, 102'; 

const Button = ({ children, primary = true }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05, boxShadow: primary ? `0 10px 15px rgba(${SHADOW_RGB}, 0.5)` : "0 5px 10px rgba(0,0,0,0.1)" }}
      whileTap={{ scale: 0.95 }}
      className={`px-8 py-3 font-semibold rounded-lg transition duration-300 ${
        primary
          ? `bg-[${PRIMARY_GOLD}] text-white shadow-lg hover:bg-[${DARKER_GOLD}]`
          : `bg-white text-[${PRIMARY_GOLD}] border border-[${PRIMARY_GOLD}] hover:bg-gray-50`
      }`}
    >
      {children}
    </motion.button>
  );
};


function FinalCTA() {
  return (
    <>
        <section className={`py-20 bg-[${PRIMARY_GOLD}]`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              className="text-4xl sm:text-5xl font-extrabold text-white mb-4"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              Ready to See 450% ROAS?
            </motion.h2>
            <motion.p
              className={`text-xl text-[${VERY_LIGHT_TEXT}] mb-8`}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.3 }}
            >
              Schedule your free, zero-obligation Google Ads performance audit today.
            </motion.p>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.5 }}
            >
              <Button primary={false} className={`!bg-white !text-[${PRIMARY_GOLD}]`}>
                Book My Free Audit
              </Button>
            </motion.div>
          </div>
        </section>
    </>
  )
}

export default FinalCTA