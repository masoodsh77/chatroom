import Login from "../Pages/Login/Login";
import Chats from "../Pages/Chats/Chats";

const MainRoutes=[
    {path:"/" , exact:true , Component:Login},
    {path:"/chats" , exact:true , Component:Chats},
]
export default MainRoutes