import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import style from "./Maps.module.css";
import { useReduxState } from "../../hooks/useReduxState"
import { useReduxAction } from '../../hooks/useReduxAction';
import { mapsSlice } from '../../reducers/maps';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Maps() {
  const getAllMaps = useReduxAction(mapsSlice.actions.fetchAllMaps);
  const allMaps = useReduxState((state) => state.maps.maps);

  useEffect(() => {
    getAllMaps()
  }, [])
  return (
    <section className={style["section-maps"]}>
      <Row xs={1} md={2} className="g-4">
        {allMaps.map(map => (
          <Col key={map._id}>
            <Card id={style["card"]}>
              <Card.Img variant="top" src={map.imgUrl} />
              <Card.Body id={style["cardBody-first"]}>
                <div className={style["cardBody-div"]}>
                  <div className={style["cardBody-div-item"]}>
                    <i className="fa-solid fa-map-location-dot"></i>
                    <p>Тип на терена: {map.terrainType}</p>
                  </div>
                  <div className={style["cardBody-div-item"]}>
                    <i className="fa-solid fa-arrow-up-short-wide"></i>
                    <p>Ниво на трудност:  {map.hardLevel} / 10</p>
                  </div>
                </div>
                <div className={style["cardBody-div"]}>
                  <div className={style["cardBody-div-item"]}>
                    <i className="fa-solid fa-location-dot"></i>
                    <p>Регион: {map.region}</p>
                  </div>
                  <div className={style["cardBody-div-item"]}>
                    <i className="fa-solid fa-flag-checkered"></i>
                    <p>Дистанция: {map.distance} km.</p>
                  </div>
                </div>
              </Card.Body>
              <Card.Body id={style["cardBody-second"]}>
                <Card.Text id={style["card-description"]}>{map.description}</Card.Text>
                <Link to={`/maps/${map._id}`} ><Button id={style["card-btn"]} >View comments</Button></Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default Maps;