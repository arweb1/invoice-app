import logo from '../../assets/logo.svg';
import iconMoon from '../../assets/icon-moon.svg';
import iconSun from '../../assets/icon-sun.svg'
import imageAvatar from '../../assets/image-avatar.jpg';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../store/theme/theme-slice';

function LeftSidebar() {
    const dispatch = useDispatch();
    const currentTheme = useSelector(state => state.theme.theme);
    const toggleTheme = () => {
        const newTheme = currentTheme === 'light' ? 'dark' : 'light'
        dispatch(setTheme(newTheme))
    }

    const navigate = useNavigate()
  return (
    <div className='left-sidebar'>
        <div className="left-sidebar_wrapper"> 
            <div className="logo-container" onClick={() => navigate('/')}>
                <img className="logo" src={logo} alt="logo"></img>
            </div>
            <div className="bottom-info">
                <img src={currentTheme === 'dark' ? iconSun : iconMoon} alt="moon" className='themeIcon' onClick={() => toggleTheme()}/>
                <div className="profile">
                    <img src={imageAvatar} alt="avatar" className='avatar'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LeftSidebar