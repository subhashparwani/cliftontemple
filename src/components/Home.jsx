import React from "react";
import one from "./1.png";
import two from "./2.JPG";
import three from "./3.JPG";
import four from "./4.JPG";
import five from "./5.jpg";
import six from "./6.JPG";
import seven from "./7.JPG";
import eight from "./8.JPG";
import nine from "./9.JPG";
import {
  CardImg,
  Card,
  CardImgOverlay,
  CardTitle,
  CardBody,
  CardSubtitle,
} from "reactstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row p-2">
        <div className="col-12">
          <div className="banner">
            <Card>
              <CardImg src={one} />
              <CardImgOverlay>
                <Card className="card-work">
                  <CardImgOverlay>
                    <CardTitle className="text-position3">Welcome To</CardTitle>
                    <CardTitle className="text-position">
                      Sri Sri Radha Rasabihari Temple
                    </CardTitle>
                    <CardTitle className="text-position2">
                      Temple is open for visitors.
                    </CardTitle>
                  </CardImgOverlay>
                </Card>
              </CardImgOverlay>
            </Card>
          </div>
        </div>
      </div>
      <div className="row p-2">
        <h2 className="labell">Inside The Temple</h2>
        <div className="col-md-3 col-xs-12 photo">
          <Link className="linking">
            <Card>
              <CardImg src={two} />
              <CardBody>
                <CardTitle className="titling">Book & Gift Shop</CardTitle>
              </CardBody>
            </Card>
          </Link>
        </div>
        <div className="col-md-3 col-xs-12 photo">
          <Link className="linking">
            <Card>
              <CardImg src={three} />
              <CardBody>
                <CardTitle className="titling">Govinda's Restaurant</CardTitle>
              </CardBody>
            </Card>
          </Link>
        </div>
        <div className="col-md-3 col-xs-12 photo">
          <Link className="linking">
            <Card>
              <CardImg src={four} />
              <CardBody>
                <CardTitle className="titling">Prabhupada Quarters</CardTitle>
              </CardBody>
            </Card>
          </Link>
        </div>
        <div className="col-md-3 col-xs-12 photo">
          <Link className="linking">
            <Card>
              <CardImg src={eight} />
              <CardBody>
                <CardTitle className="titling">Temple Hall</CardTitle>
              </CardBody>
            </Card>
          </Link>
        </div>
      </div>
      <div className="row p-2">
        <div className="col-md-3 col-xs-12 photo">
          <Link to="/styledetail4" className="linking">
            <Card>
              <CardImg src={five} />
              <CardBody>
                <CardTitle className="titling">Multipurpose Hall</CardTitle>
              </CardBody>
            </Card>
          </Link>
        </div>
        <div className="photo col-md-3 col-xs-12">
          <Link to="/styledetail5" className="linking">
            <Card>
              <CardImg src={six} />
              <CardBody>
                <CardTitle className="titling">Clifton Library</CardTitle>
              </CardBody>
            </Card>
          </Link>
        </div>
        <div className="photo col-md-3 col-xs-12">
          <Link to="/styledetail6" className="linking">
            <Card>
              <CardImg src={seven} />
              <CardBody>
                <CardTitle className="titling">Prasadam</CardTitle>
              </CardBody>
            </Card>
          </Link>
        </div>
        <div className="photo col-md-3 col-xs-12">
          <Link to="/styledetail6" className="linking">
            <Card>
              <CardImg src={nine} />
              <CardBody>
                <CardTitle className="titling">Guest House</CardTitle>
              </CardBody>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
