import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import style from "./Maps.module.css";
import { useReduxState } from "../../hooks/useReduxState"

function Maps() {
  const allMaps = useReduxState((state) => state.maps.maps)
  return (
    <section className={style["section-maps"]}>
      <Row xs={1} md={2} className="g-4">
        {allMaps.map(map => (
          <Col key={map._id}>
            <Card>
              <Card.Img variant="top" src={map.imgUrl} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>{map.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default Maps;