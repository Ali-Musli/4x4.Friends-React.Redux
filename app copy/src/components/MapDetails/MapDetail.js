import { useEffect } from "react";
import { useParams } from "react-router";
import { useReduxAction } from "../../hooks/useReduxAction";
import { useReduxState } from "../../hooks/useReduxState";
import { mapsSlice } from "../../reducers/maps";

function MapsDetails() {
    let { mapId } = useParams();
    
    const fetchMapById = useReduxAction(mapsSlice.actions.fetchMapById);
    const currentMap = useReduxState((state) => state.maps.mapById);
    
    useEffect(() => {
        fetchMapById(mapId)
    }, [mapId]);


    return(
        <section>
            <div>
                <img src={currentMap.imgUrl}></img>
            </div>
        </section>
    )
}

export default MapsDetails;