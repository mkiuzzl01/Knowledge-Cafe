import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className="flex justify-between items-center border-b-2 p-5">
            <h1 className="font-bold text-4xl">Knowledge Cafe</h1>
            <img src={profile} alt="profile image coming soon" />
        </div>
    );
};

export default Header;