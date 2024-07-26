
import { Syne } from "next/font/google"
import { motion } from "framer-motion"
import { useContext } from "react"
import { useTheme } from "@/app/themes/ThemeContext"

const syne = Syne({
    subsets : ['latin'],
    weight : ['600']
})

const Skill = () => {
    const{darkMode}=useTheme()

  return (
    <div className={syne.className}>
    <div className='w-full h-[80vh] flex flex-col '>
        <h1 className='p-10 text-white text-xl'>Tools :</h1>
        <div className={`ml-10 mt-[-10px] w-[70vw] h-[100vh] ${darkMode? "text-black" : "text-white" }  flex flex-row  justify-evenly`}>
        <motion.div
        initial={{opacity :0 , y : 15}}
         whileInView={{translateY : -50,opacity : 1}}
         transition={{duration : 1,type : "spring"}}
         >
            <div className="flex flex-col w-[18vw] h-[18vw] pt-5 border border-gray-500 rounded-md m-10 items-center">
                <img src="next-js.svg" className="w-[200px] h-[200px] border border-white rounded-full bg-white " />
                <h1 className="mt-3 text-xl">Next.Js</h1>
            </div>
            </motion.div>
                
            <motion.div
             initial={{opacity :0 , y : 15}}
             whileInView={{translateY : 50,opacity : 1}}
            transition={{duration : 1,type : "spring"}}
            >
            <div className="flex flex-col w-[18vw] h-[18vw] pt-5 border border-gray-500 m-10 rounded-md items-center">
            <img src="tailwind-css.svg" className="w-[200px] h-[200px] border border-white p-5 rounded-full bg-white " />
                <h1 className="mt-3  text-xl">Tailwind.css</h1>
                </div>
                </motion.div>
                <motion.div
            initial={{opacity :0 , y : 15}}
            whileInView={{translateY : -50,opacity : 1}}
            transition={{duration : 1,type : "spring"}}
            >
            <div className="flex flex-col w-[18vw] h-[18vw] pt-5 border border-gray-500 m-10 rounded-md items-center">
            <img src="nodejs.svg" className="w-[200px] h-[200px] border border-white rounded-full p-5 bg-white " />
                <h1 className="mt-3 text-xl">Node JS</h1>
                </div>
                </motion.div>

        </div>
        
    </div>
    </div>
  )
}

export default Skill