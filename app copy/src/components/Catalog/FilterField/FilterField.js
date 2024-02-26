import { useState } from "react";
import style from "./FilterField.module.css"

const FilterField = () => {
    const [formData, setFormData] = useState({
        brand: "volvo",
        priceFrom: 0,
        priceTo: 1,
        location: "sofia",
        gear: "manuel",
        yearFrom: 1990,
        yearTo: 2024
    });

    const changeHandler = (e) => {
        setFormData(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }
    return (
        <div className={style["main"]}>
            <form onSubmit={onSubmit} className={style["form"]}>
                <label>
                    Марка:
                    <select value={formData.brand} onChange={changeHandler} name="brand" id="brand">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                </label>

                <label>
                    Цена от:
                    <input
                        name="priceFrom"
                        type="number"
                        value={formData.priceFrom}
                        onChange={changeHandler}
                    />
                </label>

                <label>
                    Цена до:
                    <input
                        name="priceTo"
                        type="number"
                        value={formData.priceTo}
                        onChange={changeHandler}
                    />
                </label>

                <label>
                    Локация:
                    <select value={formData.location} onChange={changeHandler} name="location" id="location">
                        <option value="sofia">София</option>
                        <option value="plovdiv">Пловдив</option>
                        <option value="varna">Варна</option>
                        <option value="goce">Гоце Делчев</option>
                    </select>
                </label>

                <label>
                    Скорости
                    <select name="gear" value={formData.gear} onChange={changeHandler}>
                        <option value="manuel">Ръчни</option>
                        <option value="automatic">Автоматични</option>
                    </select>
                </label>

                <label>
                    Година от:
                    <input
                        name="yearFrom"
                        type="number"
                        value={formData.yearFrom}
                        onChange={changeHandler}
                    />
                </label>

                <label>
                    Година до:
                    <input
                        name="yearTo"
                        type="number"
                        value={formData.yearTo}
                        onChange={changeHandler}
                    />
                </label>

                <button>Филтрирай</button>
            </form>
        </div>
    )
}

export default FilterField;