import logo from '../../assets/logo.svg';
import iconMoon from '../../assets/icon-moon.svg';
import imageAvatar from '../../assets/image-avatar.jpg';

import { useDispatch } from 'react-redux';
import { setTheme } from '../../store/theme/theme-slice';

function LeftSidebar() {
    const dispatch = useDispatch();
    const toggleTheme = () => dispatch(setTheme())
  return (
    <div className='left-sidebar'>
        <div className="left-sidebar_wrapper">
            <div className="logo-container">
                <img className="logo" src={logo} alt="logo"></img>
            </div>
            <div className="bottom-info">
                <img src={iconMoon} alt="moon" className='themeIcon' onClick={() => toggleTheme()}/>
                <div className="profile">
                    <img src={imageAvatar} alt="avatar" className='avatar'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LeftSidebar