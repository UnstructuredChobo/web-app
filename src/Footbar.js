import React from "react";
import "./Footbar.css";


function Footbar(){
    return(
        <>
        <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'></link>
        <div className = "FootbarBox">
            <div className = "discord">
                
                    <p className = "DiscordParagraph">
                        <i class='bx bxl-discord-alt'></i>
                        태호#1234
                    </p>
                
                
            </div>
        </div>
        </>
    )
}

export default Footbar;