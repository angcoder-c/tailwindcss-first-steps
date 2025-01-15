const NavBar = () => {
    return (
        <section>
            <div className="">
                <nav className="bg-slate-500 py-2 px-5 text-white rounded-xl">
                    <div className="flex justify-between">
                        <h1>Logo</h1>
                        <ul className="flex gap-3">
                            <li className="hover:text-gray-300 hover:cursor-pointer">Products</li>
                            <li className="hover:text-gray-300 hover:cursor-pointer">Pricing</li>
                            <li className="hover:text-gray-300 hover:cursor-pointer">Section</li>
                        </ul>
                    </div>
                </nav>
            </div>
        </section>
    )
}

export default NavBar