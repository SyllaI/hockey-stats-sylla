import { Route,Routes } from "react-router-dom";
import CreatePlayer from "../../modules/CreatePlayer";
import Player from "../../modules/Player";
import PlayerDetails from "../../modules/PlayerDetails";


const AppRoutes = () =>{
    return(
        <Routes>
            <Route path="/" element={<Player/>}/>
            <Route path="CreatePlayer" element={<CreatePlayer/>}/>
            <Route path="Player/:playerID" element={<PlayerDetails/>}/>
        </Routes>
    );

};
export default AppRoutes