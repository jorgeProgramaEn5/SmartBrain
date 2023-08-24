import Link from "next/link";
import Image from "next/image";
import { logo } from "@/assets/indice"

const links = [
  {
    label:'Home',
    route:'/'
  },{
    label:'About',
    route:'/about'
  },{
    label:'Post',
    route:'/post'
  }
]

export function Navegation() {

    return (
        <div> 
            <nav className="bg-white w-full z-20 top-0 left-0 border-b border-gray-200">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 px-24">
                    <Link href="/" className="flex items-center">
                      <div className="w-[60px] h-[60px] rounded-full bg-fourth-100 p-1 mr-1">
                        <Image src={logo} className="w-full h-full" alt="smart brain Logo"/>
                      </div>
                      <div>
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">Smart</span>
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-primary-400">Brain</span>
                      </div>
                    </Link>
                    <div className="flex md:order-2">
                        <button type="button" className="text-white bg-tersary-300 hover:bg-tersary-100 focus:ring-4 focus:outline-none focus:ring-tersary-200 font-extrabold rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0">
                            Get started
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    )
}