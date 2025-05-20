import Navbar from '../components/navbar'
const AboutBar = ()=>{
    return (

      <div className='relative'>
        <Navbar />
        <div className="bg-white py-3 sticky top-14 w-full z-20 items-center text-center">
          <div className="flex items-center  max-w-7xl 2xl:max-w-[96rem] px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="text-blue-600 text-xl font-semibold">ABOUT US</div>
            <div className="ml-25">
              <button className="text-blue-400 pr-4 text-sm font-semibold ml-5">
                Strategic durability
              </button>
              <button className="text-blue-400 pr-4 text-sm font-semibold ml-5">
                Brand partnership
              </button>
              <button className="text-blue-400 pr-4 text-sm font-semibold ml-5">
                Stories
                <select name="" id=""></select>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}
export default AboutBar;