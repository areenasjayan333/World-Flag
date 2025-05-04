import { useState } from "react";
import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import styles from "./Navbar.module.css";

const RegionNavbar = () => {
  const [show, setShow] = useState(false);
  const dispatch = useAppDispatch();
  const { regionFilter } = useAppSelector((state) => state.country);

  const handleRegionSelect = (region: string) => {
    dispatch({
      type: "country/setFilter",
      payload: region === "All" ? "" : region,
    });
    setShow(false); // close drawer on mobile
  };

  const RegionLinks = (
    <>
      {["All", "Asia", "Europe"].map((region) => (
        <Nav.Link
          key={region}
          onClick={() => handleRegionSelect(region)}
          style={{ color: "#3d3d3d" }}
          className={
            regionFilter === (region === "All" ? "" : region)
              ? styles.activeRegion
              : "py-2 px-0 px-md-2"
          }
        >
          {region}
        </Nav.Link>
      ))}
    </>
  );

  return (
    <>
      <Navbar expand="md" className="mt-3 mb-4">
        <Container>
          <Navbar.Brand className="fw-bold">Countries</Navbar.Brand>

          {/* Show normal nav links on large screens */}
          <Nav className="ms-auto d-none d-md-flex">{RegionLinks}</Nav>

          {/* Hamburger icon on small screens */}
          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            onClick={() => setShow(true)}
            className="border-0"
          />
        </Container>
      </Navbar>

      {/* Offcanvas drawer on small screens */}
      <Offcanvas
        show={show}
        onHide={() => setShow(false)}
        placement="end"
        className="d-md-none"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Select Region</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column " style={{ color: "red !important" }}>
            {RegionLinks}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default RegionNavbar;
