import style from "./Navbar.module.css";
import logo from "./logo.png";
import user from "./metamong.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClipboardList, faUserGroup, faMessage,
            faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
    return (
        <div className={style.navbar}>
            <img src={logo} alt="logo-img" className={style.logo_img}/>
            <div className={style.navbar_section}>
                <div className={style.navbar_item}>
                    <FontAwesomeIcon icon={faClipboardList} />
                    <span>List</span>
                </div>
                <div className={style.navbar_item}>
                    <FontAwesomeIcon icon={faCalendar} />
                    <span>Calendar</span>
                </div>
            </div>
            <div className={style.navbar_section}>
                <div className={style.navbar_item}>
                    <FontAwesomeIcon icon={faUserGroup} />
                    <span>Group</span>
                </div>
                <div className={style.navbar_item}>
                    <FontAwesomeIcon icon={faMessage} />
                    <span>Chat</span>
                </div>
                <div className={style.navbar_item}>
                    <FontAwesomeIcon icon={faMoon} />
                    <span>/</span>
                    <FontAwesomeIcon icon={faSun} />
                </div>
            </div>
            <div className={style.navbar_section}>
                <div className={style.navbar_item}>
                    <img src={user} alt="user-img" className={style.user_img} />
                    <span>username</span>
                </div>
            </div>
        </div>
    );
}

export default Navbar;