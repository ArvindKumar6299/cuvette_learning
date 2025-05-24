
const Header = ()=>{


    return (
        <nav className="flex justify-between  h-80px w-full bg-green-500  p-5 mt-0">
            <div className="flex items-center">
            <ul className="flex justify-around list-none  font-bold  text-center fixed items-center">
                <li className="pl-7  hover:bg-white-500 hover:text-red-500">Todo</li>
                <li className="pl-7  hover:bg-white-500 hover:text-red-500">Counter</li>
                <li className="pl-7  hover:bg-white-500 hover:text-red-500">UI</li>
            </ul>
            </div>
            <div className="text-center">
                <div className="size-12 ">
                    <img className="rounded-[25px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQslq9QqZNMB8OUhQw5roYC6dQestseq444Qg&s" alt="" />
                </div>
            </div>
        </nav>
    )
}

export default Header;