export default function Button({ children, ...props }) {
  return(
    <button {...props} className="bg-white hover:bg-green-600 hover:scale-110 ease-in-out duration-700 text-black font-bold p-4 m-20 w-56  rounded-full"
    >{children}</button>
  )
}