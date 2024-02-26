import CatalogItem from "./CatalogItem/CatalogItem";
import FilterField from "./FilterField/FilterField"
import style from "./Catalog.module.css";
import Paginationn from "../Pagination/Pagination";
import { useReduxAction } from "../../hooks/useReduxAction";
import { trucksSlice } from "../../reducers/trucks";
import { useEffect } from "react";
import { useReduxState } from "../../hooks/useReduxState";

const Catalog = () => {
    const getTrucks = useReduxAction(trucksSlice.actions.fetchTrucks);
    const trucks = useReduxState((state) => state.trucks.trucks);

    useEffect(() => {
        getTrucks()
    }, [])
    return (
        <section className={style["section-catalog"]}>
            <input className={style["search"]} placeholder="Search..."></input>
            <div className={style["items"]}>
                <FilterField />

                <div>
                    {
                        trucks.map((item) => {
                            return (
                                <CatalogItem key={item.id} {...item} />
                            )
                        })
                    }
                </div>
            </div>
            <Paginationn />;
        </section>
    )
}

export default Catalog;