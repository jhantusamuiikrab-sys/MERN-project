import { motion } from 'framer-motion';
const LIGHTER_BRONZE = '#e3d7bf'; 
const PRIMARY_GOLD = '#cfa866';

function GphStaggeredAnimation() {
  return (
    <>
     <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              className="text-4xl font-extrabold text-center text-[#cfa866] mb-16"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              Our 3-Step to Graphics Design
            </motion.h2>
            <div className="relative">
              {/* Decorative line */}
              <motion.div
                className={`hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[${LIGHTER_BRONZE}]`}
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 1.5 }}
              />
              <div className="space-y-16">
                {[
                  { step: 1, title: "Deep Dive Audit & Strategy", text: "We analyze your current performance, competitors, and market to build a hyper-focused, custom strategy." },
                  { step: 2, title: "Agile Campaign Build & Launch", text: "Our certified specialists build and launch high-conversion campaigns, from keyword research to creative design." },
                  { step: 3, title: "Daily Optimization & Reporting", text: "We constantly monitor and refine bids, budgets, and creatives to ensure maximum return on ad spend (ROAS)." }
                ].map((item, index) => (
                  <motion.div
                    key={item.step}
                    className="flex md:flex-row flex-col items-center relative"
                    initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.2 }}
                  >
                    <div className={`w-full md:w-5/12 ${index % 2 !== 0 ? 'md:order-3' : ''}`}>
                      <div className={`p-6 rounded-xl shadow-lg border-l-4 border-[${PRIMARY_GOLD}] bg-gray-50 ${index % 2 !== 0 ? 'md:text-left' : 'md:text-right'}`}>
                        <h3 className="text-2xl font-bold text-[#cfa866] mb-2">{item.title}</h3>
                        <p className="text-[#1b2e4e]">{item.text}</p>
                      </div>
                    </div>
                    <div className="md:w-2/12 flex justify-center py-4 md:py-0">
                      <div className={`w-12 h-12 rounded-full bg-[${PRIMARY_GOLD}] text-white flex items-center justify-center font-bold text-xl shadow-xl border-4 border-white`}>
                        {item.step}
                      </div>
                    </div>
                    <div className="w-full md:w-5/12" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default GphStaggeredAnimation