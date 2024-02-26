import style from "./FilterField.module.css"

const FilterField = () => {
    return (
        <div className={style["main"]}>
            <form className={style["form"]}>
                <label>
                    Марка:
                    <select name="cars" id="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                </label>

                <label>
                    Цена от:
                    <input
                        type="number"
                    />
                </label>

                <label>
                    Цена до:
                    <input
                        type="number"
                    />
                </label>

                <label>
                    Локация:
                    <select name="cars" id="cars">
                        <option value="volvo">София</option>
                        <option value="saab">Пловдив</option>
                        <option value="mercedes">Варна</option>
                        <option value="audi">Гоце Делчев</option>
                    </select>
                </label>

                <div>
                    <p>Скорости</p>
                    <input type="radio" id="html" name="fav_language" value="HTML" />
                    <label for="html">Ръчни</label>
                    <input type="radio" id="css" name="fav_language" value="CSS" />
                    <label for="css">Автоматични</label>
                </div>

                <label>
                    Година от:
                    <input
                        type="number"
                    />
                </label>

                <label>
                    Година до:
                    <input
                        type="number"
                    />
                </label>

                <button>Филтрирай</button>
            </form>
        </div>
    )
}

export default FilterField;