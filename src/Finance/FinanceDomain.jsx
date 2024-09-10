import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBusinessTime } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { FaNetworkWired } from "react-icons/fa";
import { LiaIndustrySolid } from "react-icons/lia";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { GrDocumentPerformance } from "react-icons/gr";
import { FaRegHandshake } from "react-icons/fa";
import { HiOutlineReceiptTax } from "react-icons/hi";
import { GrMoney } from "react-icons/gr";





function StudioDomain() {
  const data = [
    {
      text: "Business Entity Formation",
      icon: <FaBusinessTime size={50} color="#f8c33c" />,
      bgImage: "/src/assets/FinanceDomain/boximg1.png",
      des: "We help you choose the right business structure, from sole proprietorships, partnerships to LLPs and companies, ensuring your business is legally sound and strategically positioned for success.",
    },
    {
      text: "Commencement of Operations",
      icon: <FaNetworkWired size={50} color="#f8c33c" />,
      bgImage: "/src/assets/FinanceDomain/boximg2.png",
      des: "We simplify your business launch by managing everything from initial planning to all applicable licenses and other legal compliance, ensuring a seamless start.",
    },
    {
      text: "Industry Specific Solutions",
      icon: <LiaIndustrySolid size={50} color="#f8c33c" />,
      bgImage: "/src/assets/FinanceDomain/boximg3.png",
      des: "We provide tailored financial solutions that address the unique challenges of your industry, and guide you through various government schemes and subsidies, enhancing efficiency and profitability.",
    },
    {
      text: "Intellectual Property Rights",
      icon: <MdOutlineSettingsSuggest size={50} color="#f8c33c" />,
      bgImage: "/src/assets/FinanceDomain/boximg4.png",
      des: "Safeguard your business with strong Intellectual Property Rights (IPR). We offer expert guidance on patents, trademarks, and copyrights. Let us protect your competitive edge.",
    },
    {
      text: "Accounting & Retainer Services",
      icon: <MdManageAccounts size={50} color="#f8c33c" />,
      bgImage: "/src/assets/FinanceDomain/boximg5.png",
      des: "Our accounting services cover bookkeeping, invoicing, income tax, GST and payroll management, delivering reliable financial insights to support your business decisions.",
    },
    {
      text: "Mystery Audits",
      icon: <GrDocumentPerformance size={50} color="#f8c33c" />,
      bgImage: "/src/assets/FinanceDomain/boximg6.png",
      des: "Our services offer an unbiased review of your business operations, identifying strengths, weaknesses, and areas for improvement to ensure optimal performance, and quality services along with complete legal compliance.",
    },
    {
      text: "MSME Support",
      icon: <FaRegHandshake size={50} color="#f8c33c" />,
      bgImage: "/src/assets/FinanceDomain/boximg7.png",
      des: "Empower your MSME with our specialized support, including registration, government schemes, payment recovery, and compliance services.",
    },
    {
      text: "Income Tax Filings",
      icon: <HiOutlineReceiptTax size={50} color="#f8c33c" />,
      bgImage: "/src/assets/FinanceDomain/boximg8.png",
      des: "Simplify tax season with our expert tax planning and income tax filing services, ensuring compliance and optimizing benefits while you focus on your business/job.",
    },
    {
      text: "Loan Facilitation",
      icon: <GrMoney size={50} color="#f8c33c" />,
      bgImage: "/src/assets/FinanceDomain/boximg9.png",
      des: "Our loan facilitation services simplify the process, from application to approval, ensuring you get the best financing options for Home, Personal, Business, and Property Loans.",
    }
  ];

  // Animation controls for heading and items
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  // Trigger animation when in view
  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [controls, inView]);

  return (
    <section ref={ref} className="relative bg-[#121212] py-20 rounded-[4rem]">
      <div className="absolute top-0 left-0 p-8">
        <motion.h2
          className="text-white text-[75px] font-bold mb-8 mt-[8rem] w-[100%]"
          style={{ lineHeight: '5rem', fontFamily: '"Rowdies", sans-serif' }}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 2.5, ease: 'easeOut' }}
        >
          Domain Expertise
        </motion.h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-[14rem] px-8">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="relative bg-[#1c1c1c] p-8 w-full h-[400px] rounded-[1rem] flex flex-col items-center justify-center border-l-2 border-r-2 border-[#ffffff1a] group overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.2 }}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ backgroundImage: `url(${item.bgImage})` }}
            />
            {/* Icon */}
            <div className="mb-4 relative z-10 transition-opacity duration-500 opacity-100 group-hover:opacity-0">
              {item.icon}
            </div>
            {/* Text */}
            <p className="text-white text-[33px] font-semibold text-center px-8 py-4 transition-opacity duration-500 opacity-100 group-hover:opacity-0 relative z-10">
              {item.text}
            </p>
            <p className="text-white text-xl text-center mt-4">
              {item.des}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default StudioDomain;
