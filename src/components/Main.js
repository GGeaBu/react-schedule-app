import style from "./Main.module.css";
import UserCard from "./UserCard.js";

function Main() {
    return (
        <div className={style.container}>
            <div className={style.first_div}>
                <UserCard />
            </div>
            <div className={style.second_div}>2</div>
            <div className={style.third_div}>3</div>
            <div className={style.four_div}>4</div>
        </div>
    );
}

export default Main;