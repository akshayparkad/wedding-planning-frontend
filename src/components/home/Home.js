import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export function Home(prop) {
  return (
    <div className='DIV'>
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="WED"
            src="https://image.wedmegood.com/resized/1900X/uploads/city_bg_image/1/delhi_bg.jpeg"
            alt="First slide"
          />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img

            className="WED"
            src="https://www.weddingsutra.com/images/wedding-images/blog-images/kashika-anish/kashika-anish-img1.webp"
            alt="Second slide"
          />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
      <div className='container mb-4'>
        <h2 className="Venue"><i>Popular Venue</i></h2>

        <CardGroup>
          <div className='row'>
            <div className='col-4'>
              <Card style=
                {{ marginLeft: "10px" }}>
                <Card.Img variant="top" src="https://image.wedmegood.com/resized/450X/uploads/member/141244/1658634961_IMG20211221152132.jpg?crop=40,59,1998,1124" />
                <Card.Body>
                  <Card.Title>MUMBAI</Card.Title>
                  <Card.Text>

                  </Card.Text>
                </Card.Body>

              </Card>
            </div>

            <div className='col-4'>
              <Card>
                <Card.Img variant="top" src="https://image.wedmegood.com/resized/450X/uploads/member/2552391/1637143272_File_013__1_.jpeg?crop=97,138,809,455" />
                <Card.Body>
                  <Card.Title>PUNE</Card.Title>
                  <Card.Text>

                  </Card.Text>
                </Card.Body>

              </Card>
            </div>
            <div className='col-4'>
              <Card>
                <Card.Img variant="top" src="https://image.wedmegood.com/resized/450X/uploads/member/252369/1667233951_IMG_5803.jpg?crop=251,130,1786,1004" />
                <Card.Body>
                  <Card.Title>KOLKATA</Card.Title>
                  <Card.Text>

                  </Card.Text>
                </Card.Body>

              </Card>
            </div>
          </div>
        </CardGroup>


        <h2 className="Venue"><i>Popular Search</i></h2>
        <CardGroup className="card">
          <div className='row'>
            <div className='col-4'>

              <Card >
                <Card.Img variant="top" src="https://image.wedmegood.com/resized/450X/uploads/project/205944/1658732885_REEK595199__1__min.jpg?crop=5,1490,2038,1146" />
                <Card.Body>
                  <Card.Title>BRIDAL WEAR</Card.Title>
                  <Card.Text>

                  </Card.Text>
                </Card.Body>

              </Card>
            </div>
            <div className='col-4'>
              <Card>
                <Card.Img variant="top" src="https://image.wedmegood.com/resized/450X/uploads/member/112147/1632813355_image4620.jpg?crop=0,66,1280,720" />
                <Card.Body>
                  <Card.Title>GROOM WEAR</Card.Title>
                  <Card.Text>

                  </Card.Text>
                </Card.Body>

              </Card>
            </div>
            <div className='col-4'>
              <Card>
                <Card.Img variant="top" src="https://image.wedmegood.com/resized/450X/uploads/member/1062485/1602401533_image3385.jpg?crop=7,75,1522,856" />
                <Card.Body>
                  <Card.Title>PLANNING AND DECIRATION</Card.Title>
                  <Card.Text>

                  </Card.Text>
                </Card.Body>

              </Card>
            </div>
          </div>
        </CardGroup>
      </div>
    </div >




  )
}

export default Home