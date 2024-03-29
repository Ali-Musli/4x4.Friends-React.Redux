import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useReduxAction } from "../../hooks/useReduxAction";
import { useReduxState } from "../../hooks/useReduxState";
import { mapsSlice } from "../../reducers/maps";

import style from "./MapDetail.module.css"

function MapsDetails() {
    let { mapId } = useParams();
    const [isAddBtnClick, setIsAddBtnClick] = useState(false);
    const [newComment, setNewComment] = useState('');

    const addComment = useReduxAction(mapsSlice.actions.addCommentOnCurrentMap);
    const fetchMapById = useReduxAction(mapsSlice.actions.fetchMapById);
    const currentMap = useReduxState((state) => state.maps.mapById);

    useEffect(() => {
        fetchMapById(mapId)
        setIsAddBtnClick(true)
        setNewComment('')
    }, [mapId]);

    const onAddBtnClick = () => {
        setIsAddBtnClick(state => !state);
        console.log(isAddBtnClick);
    }

    const onAddNewComment = (e) => {
        setNewComment(state => e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        addComment(currentMap._id, newComment);
        setNewComment('')
        console.log(newComment);
    }


    return (
        <div className={style["main"]}>
            <div className={style["main-content"]}>
                <img className={style["content-img"]} src={currentMap.imgUrl}></img>
                <div className={style["content-info"]}>
                    <div className={style["content-info-total"]}>
                        <div>
                            <div className={style["content-info-total-item"]} >
                                <i className="fa-solid fa-map-location-dot"></i>
                                <p>Тип на терена: {currentMap.terrainType}</p>
                            </div>
                            <div className={style["content-info-total-item"]} >
                                <i className="fa-solid fa-arrow-up-short-wide"></i>
                                <p>Ниво на трудност:  {currentMap.hardLevel} / 10</p>
                            </div>
                        </div>
                        <div>
                            <div className={style["content-info-total-item"]} >
                                <i className="fa-solid fa-location-dot"></i>
                                <p>Регион: {currentMap.region}</p>
                            </div>
                            <div className={style["content-info-total-item"]} >
                                <i className="fa-solid fa-flag-checkered"></i>
                                <p>Дистанция: {currentMap.distance} km.</p>
                            </div>
                        </div>
                    </div>

                    <h3 className={style["content-info-titleDescription"]}>Описание на картата</h3>
                    <p className={style["content-info-description"]}>{currentMap.description}</p>
                </div>
            </div>
            <div className={style["main-comments"]}>
                {isAddBtnClick ?
                    <button onClick={onAddBtnClick}>Добави коментар</button> :
                    <form onSubmit={onSubmit} className={style["comments-add"]}>
                        <input placeholder="Добваи своя коментар тук..." value={newComment} onChange={onAddNewComment} />
                        <button>Добави</button>
                    </form>
                }


                <div className={style["comments-current"]}>
                    <p>Иван: картата е супер!</p>
                    <p>Пешо: Топ!</p>
                    <p>Иван: Бива!</p>
                </div>
            </div>
        </div>
    )
}

export default MapsDetails;