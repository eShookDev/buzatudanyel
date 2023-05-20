
const Aside = () => {

    return (
        <aside className='hidden md:block fixed top-0 right-4 h-screen z-10'>
          <div className='flex flex-col justify-between items-end mt-10 px-4 h-[calc(100vh_-_6.25rem)]'>
            <a className='bg-[hsla(256,7%,97%,.11)] rounded-full p-4 text-sm font-medium text-white' href=''>Contact</a>
            <nav>
              <ul className='relative SideNavigation'>
                <li><a href='#hero' className='block h-12 w-12 text-white'>00</a></li>
                <li><a href='#about' className='block h-12 w-12 text-white'>01</a></li>
                <li><a href='#skill' className='block h-12 w-12 text-white'>02</a></li>
                <div className='h-12 w-2 absolute top-0 right-0 bg-[#f0f0f0] transition-all ease-in-out duration-500 SideNavigationLine'></div>
              </ul>
            </nav>
            <div className='relative flex flex-col items-center max-w-[20px] min-h-[100px]'>
              <span className='min-w-[100px] -rotate-90 opacity-40 text-white'>Scroll Down</span>
            </div>
          </div>
        </aside>
    )
}

export default Aside