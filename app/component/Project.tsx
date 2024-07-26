
import { Syne } from 'next/font/google'

const syne = Syne({
    subsets : ['latin'],
    weight : ['600']
})



const Project = () => {
  return (
    <div className={syne.className}>
    <div className='w-[80vw] h-[100vh] flex flex-col'>
        <h1 className='text-white text-2xl p-10'>Project :</h1>
        <div className=' w-[100%] h-auto flex flex-row mt-[-30px]'>
        <img src='florism.png' className="w-[30.1%] h-[220px] mr-3 ml-10 mt-5 rounded-md mb-5" />
        <div className='flex flex-col w-[80%] h-auto border-l border-gray-700 p-5'>

        <h1 className='text-2xl'>Florism :</h1>
        <h1 className='w-[90%]  text-xl text-justify '>Florism Adalah Sebuah sebuah website e-tourism yaitu sebuah website yang sigunakan untuk membeli tiket wisata alam yang ada di provinsi jogja</h1>
        </div>

        </div>
        <div className=' border-t border-gray-700 w-[100%] h-auto flex flex-row'>
        <img src='sportfest.png' className='w-[37%] h-[220px] mr-3 ml-10 mt-5 rounded-md mb-5' />
        <div className='flex flex-col w-[80%] h-auto border-l border-gray-700 p-5'>

        <h1 className='text-2xl'>SportFest :</h1>
        <h1 className='w-[90%]  text-xl text-justify '>SportFest adalah sebuah sistem informasi berbasis web yang digunakan untuk melihat info seputar bulu tangkis di Indonesia, mulai dari kejuaraan, ranking sampai klasemen kejuaraan Bulu Tangkis</h1>
        </div>

        </div>
    </div>
    </div>
  )
}

export default Project;

