
export default function LayoutPage({children}) {
  return (
    <div className=" text-black flex justify-center flex-col items-center bg-primary-300">
        <div className=" w-96">
        <marquee>Voy a ser el mejor programadore electrico que existe</marquee>
        </div>
        {children}
    </div>
  )
}
