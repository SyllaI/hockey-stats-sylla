import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";
import { usePlayerContext } from "../../context/PlayerContext";

const SideMenu = () =>{
    const navigate = useNavigate();
    const {player} = usePlayerContext();


    const menuItems = [
        {
        key:'/',
        label: 'Player'
    },
    {
        key:'CreatePlayer',
        label: 'Create Player'
    },
    {
        key:'Season',
        label: 'Season'
    },
    {
        key: 'signout',
        label: 'Sign Out'
    },

    ];

    const onMenuItemClick = async (menuItem) =>{
        if(menuItem.key === 'signout'){
            await Auth.signOut();
            window.location.reload();
        } else {
            navigate(menuItem.key);
        }
        
    };

    return(
        <>
         {player && (<h2 style={{color:'white'}}>{player.name}</h2>)}
         <Menu items={menuItems} onClick={onMenuItemClick} />
        </>
     );
 };

export default SideMenu;