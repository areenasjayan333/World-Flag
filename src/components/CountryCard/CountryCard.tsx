import { Card, Col, Row } from "react-bootstrap";
import { Country } from "../../types/Country";
import styles from "./CountryCard.module.css";

const CountryCard = ({ country }: { country: Country }) => (
  <Card className={styles.flagCard}>
    <Row className="g-0 align-items-center">
      <Col xs={4} md={3}>
        <Card.Img
          src={country.flag}
          alt={`${country.name} flag`}
          className={styles.flagImg}
        />
      </Col>
      <Col xs={8} md={9}>
        <Card.Body>
          <Card.Title className={styles.flagCardTitle}>
            {country.name}
          </Card.Title>
          <Card.Text className={styles.flagCardSubTitle}>
            {country.region}
          </Card.Text>
        </Card.Body>
      </Col>
    </Row>
  </Card>
);

export default CountryCard;
