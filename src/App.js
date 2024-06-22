import { useState } from "react";
import {
  Col,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Dropdown,
  Container,
} from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import NewsList from "./Components/NewsList";
import NewsDetail from "./Components/NewsDetail";

function App() {
  const [category, setCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategoryClick = (cetegory) => {
    setCategory(cetegory);
    setSearchTerm("");
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setCategory("");
    setSearchTerm(event.target.search.value);
  };

  return (
    <>
      <Navbar bg="light" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="/" className="fw-bold fs-4">
            News App
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav" />

          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Dropdown>
                <Dropdown.Toggle variant="outline-primary">
                  Categories
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => handleCategoryClick("world")}>
                    World
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => handleCategoryClick("business")}
                  >
                    Business
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => handleCategoryClick("technology")}
                  >
                    Technology
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleCategoryClick("sports")}>
                    Sports
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => handleCategoryClick("entertainment")}
                  >
                    Entertainment
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>

            <Form onSubmit={handleSearch} className="d-flex">
              <FormControl
                type="text"
                placeholder="Search"
                className="me-2"
                name="search"
              />

              <Button variant="outline-primary" type="submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Col>
          <Col xs={12} md={12}>
            <h5>Categories</h5>
            <Nav className="flex-row my-3">
              <Nav.Link className={category === "world" ? 'active' : ''} onClick={() => handleCategoryClick("world")}>
                World
              </Nav.Link>
              <Nav.Link className={category === "business" ? 'active' : ''} onClick={() => handleCategoryClick("business")}>
                Business
              </Nav.Link>
              <Nav.Link className={category === "technology" ? 'active' : ''} onClick={() => handleCategoryClick("technology")}>
                Technology
              </Nav.Link>
              <Nav.Link className={category === "sports" ? 'active' : ''} onClick={() => handleCategoryClick("sports")}>
                Sports
              </Nav.Link>
              <Nav.Link className={category === "entertainment" ? 'active' : ''} onClick={() => handleCategoryClick("entertainment")}>
                Entertainment
              </Nav.Link>
            </Nav>
          </Col>

          <Col>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<NewsList category={category} searchTerm={searchTerm} />} />
                <Route path="/newsDetail/:name" element={<NewsDetail />} />
              </Routes>
            </BrowserRouter>
          </Col>
        </Col>
      </Container>
    </>
  );
}

export default App;
