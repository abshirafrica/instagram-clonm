import me from "../../assets/images/me.png";
import me2 from "../../assets/images/About.jpg";
import me3 from "../../assets/images/cover.jpg";

import { FiSettings } from "react-icons/fi";
import { BsGrid3X3Gap } from "react-icons/bs";
import Stories from "../Stories";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="max-w-4xl p-10 xl:mx-auto">
      <div className="grid grid-cols-4 gap-4">
        {/* left */}
      <div>
          <img
            src={me}
            alt=""
            className="rounded-full object-cover w-36 h-36"
          />
        </div>

        {/* right */}
        <div className="col-span-3">
          <div className="flex items-center space-x-7">
            <span className="text-gray-800 text-2xl mr-7 ">Profile</span>
            <div className="cursor-pointer text-sm text-gray-700 font-semibold p-1 px-2 border border-gray-200 mr-4">
              Edit profile
            </div>
            <FiSettings className="cursor-pointer h-6 w-6 animate-spin" />
          </div>
          <div className="mt-4 flex items-center ">
            <div className="ml-4">
              <span className="font-semibold mr-2">350</span> posts
            </div>
            <div className="ml-4">
              <span className="font-semibold mr-2">129</span> following
            </div>

            <div className="ml-4">
              <span className="font-semibold mr-2">212</span> followers
            </div>
          </div>
          <div className="pt-5">
            <p className="text-base font-semibold mr-2 ">AbshirAfrica</p>
            <p className="text-base text-gray-400  font-normal mr-2 ">
              Degital creator
            </p>
            <p className="text-base font-normal mr-2 ">
              keep pushing your self.
            </p>
            <Link to="https://haaraay.com/" className="font-semibold">
              <a href="https://haaraay.com/" target="_blank">haaraay.com</a>
            </Link>
          </div>
          <div className="mt-10">  
            <Stories />
          </div>
          <hr className="border-gray-500 mt-10" />
          <div className="flex items-center space-x-10 justify-center">
            <button className="flex items-center border-t text-sm border-gray-800">
              <BsGrid3X3Gap />
              POSTS
            </button>
            <button className="flex items-center text-gray-400 border-t text-sm">
              <BsGrid3X3Gap />
              SAVED
            </button>
            <button className="flex items-center text-gray-400 border-t text-sm">
              <BsGrid3X3Gap />
              TAGS
            </button>
          </div>
          {/* images */}
          <div className="flex mt-5 items-center space-x-3">
            <img src={me3} alt="" className="w-48" />
            <img src={me2} alt="" className="w-48" />
            <img src={me} alt="" className="w-48" />
          </div>
        </div>


        


        




      </div>
    </div>
  )
}

export default Profile
