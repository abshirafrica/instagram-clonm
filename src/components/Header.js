import profile from '../assets/images/post.jpeg'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import {ImHome} from 'react-icons/im'
import {RiMessengerLine} from 'react-icons/ri'
import {IoIosAddCircleOutline} from 'react-icons/io'
import {GiHeavyTimer} from 'react-icons/gi'
import {GiSelfLove} from 'react-icons/gi'

const Header = () => {
  return (
    <div className='bg-white shadow-lg static top-0 z-50 border-b-1 mb-5 p-2'>
      <div className='flex items-center justify-between'>
        {/* left */}
        <Link to="/"><img src={logo} alt="logo" /></Link>

        {/* right */}
        <div className='flex items-center space-x-6 text-2xl'>
          <Link to="/"><ImHome /></Link>
          <div className='relative'>
          <Link to="/"><RiMessengerLine />
          <div className='absolute w-4 h-4 text-white bg-red-500 flex items-center justify-center rounded-full -top-2 -right-1 text-xs animate-pulse'>14
          </div></Link>
          </div>
        
          <Link to="/"><IoIosAddCircleOutline /></Link>
          <Link to="/"><GiHeavyTimer /></Link>
          <Link to="/"><GiSelfLove /></Link>
          <Link to="/profile" className='ml-2'><img src={profile} className="w-7 h-7 rounded-full border p-[2px]" /></Link>
          
        </div>
       
          
        

      </div>
    </div>
  )
}

export default Header
