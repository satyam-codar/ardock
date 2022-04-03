import React from 'react'
import "./whatuphtm.css"
import { FaWhatsapp } from 'react-icons/fa';


function Whatsapp() {
    return (
        <div>
            <div className="whats">
                <a href="https://api.whatsapp.com/send?phone=916377237340&text=Hello there, I want to know something." class="float" target="_blank">
                {/* <a href="https://api.whatsapp.com/send?phone=916377237340&text=Hello%21%I%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." class="float" target="_blank"> */}
                    <div className="my-float">
                    {/* <i class="fa fa-whatsapp my-float"></i> */}
                    <FaWhatsapp size={32}/>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Whatsapp
