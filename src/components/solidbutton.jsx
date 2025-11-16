function SolidButton({children}){
    return (
        <>
        <button className="px-6 py-2 rounded-lg font-semibold
                            bg-gray-800 text-white
                            dark:bg-white dark:text-black
                            transition-all hover:opacity-80
        ">
            {children}    
        </button>       
        </>
    )
}

export default SolidButton;