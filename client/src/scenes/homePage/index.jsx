import Navbar from "scenes/navbar";
import { useSelector } from "react-redux";
import { Box, useMediaQuery} from "@mui/material";
import UserWidget from "scenes/widgets/UserWidget";
const HomePage=()=>{
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
     const { _id, picturePath } = useSelector((state) => state.user);

    return <Box>
        <Navbar/>
        <UserWidget userId={_id} picturePath={picturePath} />
    </Box>; 
}; 
export default HomePage; 