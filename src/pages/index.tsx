import Image from 'next/image';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="grow bg-primary">
      <section className="flex flex-col relative">
        <div className="absolute bg-white px-5 pb-5 -top-20 right-36">
          <motion.div
            className="flex"
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: -560, opacity: 0 }}
            transition={{ ease: 'easeInOut', duration: 0.5 }}
          >
            <Image
              src="/assets/images/model-jumping.png"
              width={374}
              height={560}
            />
          </motion.div>
        </div>
        <h1 className="flex items-center h-[320px] text-8xl text-white w-fit px-10">
          NEW COLLECTION
        </h1>
        <div className="flex items-center h-[320px] text-[114px] bg-white w-fit px-14">
          <motion.div
            initial={{ x: -560, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.5 }}
          >
            SUPERSONIC
          </motion.div>
        </div>
      </section>
      <section className="flex relative mt-[480px]">
        <div className="ml-32 relative w-fit text-[70px]  text-white after:absolute after:w-[120%] after:h-1 after:bg-white after:-bottom-3 after:left-0 leading-[84px]">
          ENTER THE SEASON <br></br>WITH STYLE
        </div>
        <div className="flex absolute -top-60 right-40 after:absolute after:w-[472px] after:h-[590px] after:bg-white after:-top-[50px] after:-right-[50px]">
          <motion.div
            className="flex z-10"
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 590, opacity: 0 }}
            transition={{ ease: 'easeInOut', duration: 0.5 }}
          >
            <Image
              src="/assets/images/model-walking.png"
              width={472}
              height={590}
            />
          </motion.div>
        </div>
      </section>
      <section className="flex relative mt-[480px] justify-end">
        <div className="flex absolute left-0 after:absolute after:w-[320px] after:h-[877px] after:bg-white after:-top-[50px] after:left:0">
          <motion.div
            className="flex z-10"
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: -590, opacity: 0 }}
            transition={{ ease: 'easeInOut', duration: 0.5 }}
          >
            <Image
              src="/assets/images/model-sitting.png"
              width={590}
              height={777}
            />
          </motion.div>
        </div>
        <div className="mr-32 my-80 relative w-fit text-[70px]  text-white after:absolute after:w-[120%] after:h-1 after:bg-white after:-bottom-3 after:right-0 leading-[84px] text-right">
          SUMMER SALE 2022<br></br>GREAT CLOTHES AT<br></br> GREAT PRICES
        </div>
      </section>
      <section className="flex flex-col items-end mt-[320px]">
        <div className="flex items-center h-[320px] text-[114px] bg-white w-fit px-28">
          <motion.div
            initial={{ x: 560, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.5 }}
          >
            EST. 2022
          </motion.div>
        </div>
        <div className="flex justify-center items-center h-[320px] text-[70px] text-white w-full">
          FREE SHIPPING FOR ANY ORDER
        </div>
      </section>
    </div>
  );
};

export default Home;
