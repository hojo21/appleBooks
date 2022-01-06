import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
  CardGroup, Card, Button, Container, Row, Col
} from 'react-bootstrap';

import {
  ASnakeFallsToEarth, HowTheOtherHalfEats, LoveInTheBigCity, OurFirstCivilWar, RevolutionInOurTime, Tenderness, TheIslandOfMissingTrees
} from '../../assets/bookCovers';

const AvailableBooks = () => {
  return (
    <>
      <CardGroup>
        <Container>
          <Row>
            <Col>
              <Card>
                <Card.Header>Featured</Card.Header>
                <Card.Img variant="top" src={ASnakeFallsToEarth} />
                <Card.Body>
                  <Card.Title>A Snake Falls to Earth</Card.Title>
                  <Card.Text>
                    Average Rating:
                  </Card.Text>
                  <Button variant="secondary" href="/badger">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Header>Featured</Card.Header>
                <Card.Img variant="top" src={HowTheOtherHalfEats} />
                <Card.Body>
                  <Card.Title>How The Other Half Eats</Card.Title>
                  <Card.Text>
                    Average Rating:
                  </Card.Text>
                  <Button variant="secondary" href="/singh">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Header>Featured</Card.Header>
                <Card.Img variant="top" src={LoveInTheBigCity} />
                <Card.Body>
                  <Card.Title>Love In The Big City</Card.Title>
                  <Card.Text>
                    Average Rating:
                  </Card.Text>
                  <Button variant="secondary" href="/hur">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <Card.Img variant="top" src={OurFirstCivilWar} />
                <Card.Body>
                  <Card.Title>Our First Civil War</Card.Title>
                  <Card.Text>
                    Average Rating:
                  </Card.Text>
                  <Button variant="secondary" href="/brands">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={RevolutionInOurTime} />
                <Card.Body>
                  <Card.Title>Revolution In Our Time</Card.Title>
                  <Card.Text>
                    Average Rating:
                  </Card.Text>
                  <Button variant="secondary" href="/magoon">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={Tenderness} />
                <Card.Body>
                  <Card.Title>Tenderness</Card.Title>
                  <Card.Text>
                    Average Rating:
                  </Card.Text>
                  <Button variant="secondary" href="/macleod">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <Card.Img variant="top" src={TheIslandOfMissingTrees} />
                  <Card.Body>
                    <Card.Title>The Island of Missing Trees</Card.Title>
                    <Card.Text>
                      Average Rating:
                    </Card.Text>
                    <Button variant="secondary" href="/shafak">Read More</Button>
                  </Card.Body>
              </Card>
            </Col>
            <Col>
            </Col>
            <Col>
            </Col>
          </Row>
        </Container>
      </CardGroup>
    </>
  );
};

export default AvailableBooks;
