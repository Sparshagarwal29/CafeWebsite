import logo from '../assets/logo.jpg';
const Navbar = () => {
    return(
        <nav className="max-w-7xl mx-auto">
            <div className="Navbar flex items-center justify-between p-6 bg-[#E3E0D7] text-[#2C1810] ">
                <div  className="nav-logo  ">
                    <h1 className='flex items-center gap-2 text-2xl font-bold'>
                        Flaoured <img src={logo} alt="Logo" className='w-8 h-8'/>
                    </h1>   
                    <p className='text-sm opacity-80'>
                        wake up to some delicious 😋
                    </p>     
                </div>
                <div  className="nav-items flex items-center gap-8">
                    <div className='Buttons  flex gap-6 font-semibold '>
                        <button className="hover:border-b-2 border-[#2C1810] pb-1 transition-all" >Home</button>
                        <button className="hover:border-b-2 border-[#2C1810] pb-1 transition-all" >Menu</button>
                        <button className="hover:border-b-2 border-[#2C1810] pb-1 transition-all" >our story</button>
                        <button className="hover:border-b-2 border-[#2C1810] pb-1 transition-all" >contact</button>
                    </div>
                </div>
            </div>
        </nav>
        

    )
}

export default Navbar;