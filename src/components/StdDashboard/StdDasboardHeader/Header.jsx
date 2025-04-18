import userProfile from '../../../assets/StudDashboardImages/Photos.png'
const Header = () => {
  return (
    <div className="bg-[#FFFFFF] px-6 py-8 flex justify-center">
      <div className="flex items-center space-x-5">
        <img
          src={userProfile}
          alt="Kevin Gilbert"
          className="w-16 h-16 rounded-full object-cover shadow-sm"
        />
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Kevin Gilbert</h2>
          <p className="text-sm text-gray-500">Web Designer & Best-Selling Instructor</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
