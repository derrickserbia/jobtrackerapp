import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import { Container } from "react-bootstrap";

function MainLayout() {
  return (
    <>
      <NavigationBar />
      <Container fluid="lg">
        <Outlet />
      </Container>
    </>
  );
}

export default MainLayout;
