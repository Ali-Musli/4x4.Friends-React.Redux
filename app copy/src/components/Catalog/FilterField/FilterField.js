import { useState } from "react";
import { useReduxAction } from "../../../hooks/useReduxAction";
import { useReduxState } from "../../../hooks/useReduxState";
import { trucksSlice } from "../../../reducers/trucks";
import style from "./FilterField.module.css"

const FilterField = () => {
    const trucks = useReduxState((state) => state.trucks.trucks);
    const setTrucks = useReduxAction(trucksSlice.actions.setTrucks);
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
        console.log(trucks);
        filterData(formData.location)
    }

    const filterData = (text) => {
        const excludedFields = ["extras", "images"]
        const filteredData = trucks.filter(item =>
          Object.keys(item).some(key =>
            !excludedFields.includes(key) &&
            String(item[key]).toLowerCase().includes(text.toLowerCase())
          )
        );

        setTrucks(filteredData);

        console.log(filteredData);
        // setData(filteredData);
      };

    // const filterData = (text) => {
    //     const filteredData = trucks.filter(item =>
    //       item['location'].toLowerCase().includes(text.toLowerCase())
    //     );

    //     console.log(filteredData);
    //     setData(filteredData);
    //   };
    return (
        <div className={style["main"]}>
            <h2 className={style["main-title"]}>Търсене</h2>
            <form onSubmit={onSubmit} className={style["form"]}>
                <label className={style["form-item"]}>
                    Марка:
                    <select value={formData.brand} onChange={changeHandler} name="brand" id="brand">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                </label>

                <label className={style["form-item"]}>
                    Цена от:
                    <input
                        name="priceFrom"
                        type="number"
                        value={formData.priceFrom}
                        onChange={changeHandler}
                    />
                </label>

                <label className={style["form-item"]}>
                    Цена до:
                    <input
                        name="priceTo"
                        type="number"
                        value={formData.priceTo}
                        onChange={changeHandler}
                    />
                </label>

                <label className={style["form-item"]}>
                    Локация:
                    <select value={formData.location} onChange={changeHandler} name="location" id="location">
                        <option value="sofia">София</option>
                        <option value="plovdiv">Пловдив</option>
                        <option value="varna">Варна</option>
                        <option value="goce">Гоце Делчев</option>
                    </select>
                </label>

                <label className={style["form-item"]}>
                    Скорости
                    <select name="gear" value={formData.gear} onChange={changeHandler}>
                        <option value="manuel">Ръчни</option>
                        <option value="automatic">Автоматични</option>
                    </select>
                </label>

                <label className={style["form-item"]}>
                    Година от:
                    <input
                        name="yearFrom"
                        type="number"
                        value={formData.yearFrom}
                        onChange={changeHandler}
                    />
                </label>

                <label className={style["form-item"]}>
                    Година до:
                    <input
                        name="yearTo"
                        type="number"
                        value={formData.yearTo}
                        onChange={changeHandler}
                    />
                </label>

                <button className={style["form-btn"]}>Филтрирай</button>
            </form>
        </div>
    )
}

export default FilterField;