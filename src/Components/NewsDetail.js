import React from 'react'
import { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useNewsData from "../hooks/useNewsData";

const NewsDetail = (props) => {
    const newsName = useParams();
    const { category, searchTerm } = props;
  
    const { newsData, loading, error } = useNewsData(category, searchTerm);

    const filteredNewsData = newsData?.filter(item => item.source.name === newsName?.name);

    console.log(newsName?.name, newsData, filteredNewsData, "News Name");

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <Container>
            <Row>
                {filteredNewsData?.map((data) => (
                    <Col>
                        <Card>
                            <Card.Img src={data.image} variant="top" />
                            <Card.Body>
                            <Card.Title>{data.title}</Card.Title>
                            <Card.Text>{data.description}</Card.Text>
                            <Card.Text>{data.content}</Card.Text>
                            <Card.Link href={data.url} target="blank">Read More</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default NewsDetail;
