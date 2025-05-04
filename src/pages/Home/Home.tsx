import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { fetchCountries } from "../../features/countries/countrySlice";
import CountryCard from "../../components/CountryCard/CountryCard";
import Slider from "../../components/Slider/Slider";
import { Row, Col, Container } from "react-bootstrap";
import RegionNavbar from "../../components/Navbar/Navbar";
import facebook from "../../assets/FaceBook.png";
import google from "../../assets/Google.png";
import linkedIn from "../../assets/LinkedIn.png";
import youtube from "../../assets/Youtube.png";
import styles from "./Home.module.css";
import { Country } from "../../types/Country";
const Home = () => {
  const dispatch = useAppDispatch();
  const { countries, displayed, regionFilter } = useAppSelector(
    (state) => state.country
  );

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const filtered = regionFilter
    ? countries.filter((country: Country) => country.region === regionFilter)
    : countries;

  return (
    <Container>
      <RegionNavbar />

      <div className={`${styles.lineWithText} mx-lg-1`}>WELCOME</div>
      <Slider />
      <Row className="px-2">
        {filtered.slice(0, displayed).map((country: Country) => (
          <Col key={country.name} md={6} className="mb-2 mb-md-4 px-3 py-1">
            <CountryCard country={country} />
          </Col>
        ))}
      </Row>
      {displayed < filtered.length && (
        <div className="d-flex text-center align-items-center justify-content-center">
          {" "}
          <button
            className={styles.loadMoreButton}
            onClick={() => dispatch({ type: "country/loadMore" })}
          >
            Load More
          </button>
        </div>
      )}
      <div className="d-flex justify-content-center mt-5 pt-4">
        <Row className={styles.socialIcons}>
          <Col>
            <img
              src={google}
              alt="Google-Icon"
              className="img-fluid"
              style={{ scale: 0.8 }}
            />
          </Col>
          <Col>
            {" "}
            <img
              src={facebook}
              alt="Facebook-Icon"
              className="img-fluid"
              style={{ scale: 0.8 }}
            />
          </Col>
          <Col>
            <img
              src={linkedIn}
              alt="LinkedIn-Icon"
              className="img-fluid"
              style={{ scale: 0.8 }}
            />
          </Col>
          <Col>
            {" "}
            <img
              src={youtube}
              alt="Youtube-Icon"
              className="img-fluid"
              style={{ scale: 0.8 }}
            />
          </Col>
        </Row>
      </div>
      <p className="d-flex justify-content-center fs-6 pb-0 mb-0 mt-3">Example@email.com</p>
      <p className="d-flex justify-content-center fs-6">
        Copyright@ 2020 Name. All rights reserved.
      </p>
    </Container>
  );
};

export default Home;
