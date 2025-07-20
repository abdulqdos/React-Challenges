export default function Button({ btnWord = "Button" , children}) {
    return (
        <button className="bg-secondary text-white px-3 py-2  w-fit hover:bg-secondary-dark transition duration-300 cursor-pointer ">
            {btnWord}
            {children}
        </button>
    );
}