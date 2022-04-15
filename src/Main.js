import style from "./Main.module.css";

function Main() {
    return (
        <div className={style.container}>
            <div className={style.first_div}>1</div>
            <div className={style.second_div}>2</div>
            <div className={style.third_div}>3</div>
            <div className={style.four_div}>4</div>
        </div>
    );
}

export default Main;