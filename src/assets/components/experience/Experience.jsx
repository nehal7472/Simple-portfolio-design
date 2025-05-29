import { motion } from "framer-motion";
import { fadeIn } from "../framerMotion/varriants";

export default function Experience() {
  return (
    <div id="experience" className="py-2 px-4 md:py-24 md:px-52 ">
      <h2 className="flex flex-wrap items-center gap-4 my-8 pb-4 text-center sm:text-left text-xl md:text-4xl dark:text-darkTextColor">
        <div className="flex-grow border-t border-gray-400"></div>
        <span className="font-semibold uppercase">Experience</span>
        <div className="flex-grow border-t border-gray-400"></div>
      </h2>
      <div className="flex flex-col gap-16">
        <div className="flex flex-col md:flex-row gap-8">
          <motion.div
            variants={fadeIn("right", 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="w-full md:w-[600px] flex flex-col justify-center  items-center md:items-end  gap-4 border-gray-500 md:border-r-2 pr-0 md:pr-8 "
          >
            <div className="border-b-2 border-gray-500 pb-4 mb-4 flex flex-col items-end text-center md:text-right ">
              <h4 className="dark:text-darkTextColor">System Engineer</h4>
              <p className="dark:text-darkTextColor">Amber It ltd.</p>
            </div>
            <div>
              <p className="text-center md:text-right dark:text-darkTextColor">Apr 2022 - May 204</p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="flex flex-col justify-center items-start gap-4"
          >
            <p>
              <li className="dark:text-darkTextColor">
                Network Infrastructure Maintenance & Support Monitored,
                maintained, and troubleshooted Amber IT’s enterprise network
                infrastructure, ensuring stable and secure connectivity across
                multiple departments and client locations.
              </li>
            </p>
            <p>
              <li className="dark:text-darkTextColor">
                System Configuration & Security Implementation Configured and
                managed Windows and Linux-based servers, implemented security
                policies including firewall rules and VPN access, and performed
                regular backups and updates to minimize downtime and data risk.
              </li>
            </p>
            <p>
              <li className="dark:text-darkTextColor">
                Client Support & Technical Documentation Provided Tier 2 support
                for internal users and external clients, resolving system issues
                efficiently. Created detailed technical documentation and SOPs
                to streamline IT operations and knowledge transfer.
              </li>
            </p>
          </motion.div>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <motion.div
            variants={fadeIn("right", 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="flex flex-col justify-center items-start gap-4"
          >
            <p>
              <li className="dark:text-darkTextColor">
                Network Infrastructure Maintenance & Support Monitored,
                maintained, and troubleshooted Amber IT’s enterprise network
                infrastructure, ensuring stable and secure connectivity across
                multiple departments and client locations.
              </li>
            </p>
            <p className="dark:text-darkTextColor">
              <li>
                System Configuration & Security Implementation Configured and
                managed Windows and Linux-based servers, implemented security
                policies including firewall rules and VPN access, and performed
                regular backups and updates to minimize downtime and data risk.
              </li>
            </p>
            <p>
              <li className="dark:text-darkTextColor">
                Client Support & Technical Documentation Provided Tier 2 support
                for internal users and external clients, resolving system issues
                efficiently. Created detailed technical documentation and SOPs
                to streamline IT operations and knowledge transfer.
              </li>
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="w-full md:w-[600px] flex flex-col justify-center items-center md:items-start gap-4 border-gray-500 md:border-l-2 pl-0 md:pl-8"
          >
            <div className="border-b-2 border-gray-500 pb-4 mb-4 flex flex-col items-start text-center md:text-right ">
              <h4 className="dark:text-darkTextColor">System Engineer</h4>
              <p className="dark:text-darkTextColor">Amber It ltd.</p>
            </div>
            <div>
              <p className="text-center md:text-right dark:text-darkTextColor">Apr 2022 - May 204</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
