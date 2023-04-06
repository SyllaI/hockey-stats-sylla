import { createContext, useContext, useState, useEffect } from "react";
import { Auth, DataStore } from "aws-amplify";
import { Player} from "../models";



const PlayerContext = createContext();

const PlayerContextProvider = ({children }) => {

    const [user, setUser] = useState();
    const [player, setPlayer] = useState();
    const sub = user?.attributes?.sub;

    useEffect(()=>{
        Auth.currentAuthenticatedUser({bypassCache: true}).then(setUser);
    },[]);

    console.log(user);
    console.log(sub);

    useEffect(() =>{
        if (!sub){
            return;
        }
        DataStore.query(Player,(r) => r.adminSub.eq(sub)).then(
            (players) => setPlayer(players[0])
        );
    },[sub]);
    
    console.log(player)

    return (
        <PlayerContext.Provider value={{sub, player, setPlayer}}>
            {children}
        </PlayerContext.Provider>
    );

};

export default PlayerContextProvider;

export const usePlayerContext = () => useContext(PlayerContext);