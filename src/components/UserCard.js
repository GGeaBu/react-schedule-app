import style from "./UserCard.module.css";
import user from "./metamong.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

function UserCard() {
    return (
        <div className={style.card}>
            <img src={user} alt="user-img" className={style.user_profile} />
            <ul className={style.user_info}>
                <li className={style.name}>UserName(#044APD)</li>
                <li className={style.email}>h2sorginal@gmail.com</li>
                <li className={style.address}>경기도 성남시 중원구</li>
                <li className={style.job}>FE Developer</li>
            </ul>
            <div className={style.user_social}>
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faGithub} />
                <FontAwesomeIcon icon={faAt} />
            </div>
        </div>
    );
}

export default UserCard;