import React from "react"
import facebook from "../../assets/images/servicesImg/face.svg"
import inst from "../../assets/images/servicesImg/inst.svg"
import youtube from "../../assets/images/servicesImg/you.svg"
import odnoclass from "../../assets/images/servicesImg/odn.svg"
import vk from "../../assets/images/servicesImg/vk.svg"

const FooterSocial = () => {
    return (
        <div className="footer__social">
            <a href="https://www.facebook.com/profile.php?id=100029878417801">
                <img src={facebook} />
            </a>
            <a href="https://www.instagram.com/tuluntelecom/">
                <img src={inst} />
            </a>
            <a href="https://www.youtube.com/channel/UCLB579t31RmkXKDgtvwp8pA">
                <img src={youtube} />
            </a>
            <a href="https://ok.ru/tuluntk">
                <img src={odnoclass} />
            </a>
            <a href="https://vk.com/tuluntk">
                <img src={vk} />
            </a>
        </div>
    )
}

export default FooterSocial