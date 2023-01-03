import { Component } from "react";
import { Card } from "react-bootstrap";

export class About extends Component {
  //export class AboutUs extends {        /*textAlign:'center' ,justifyContent:'center'*/

  render() {
    return (
      <>
      
    <div className="container">
            <div className="">

          <Card>
            <Card.Img
              variant="top"
              src="https://image.wedmegood.com/resized/1000X/uploads/project/189770/1651306002_TWD_04404.jpg?crop=415,453,1623,913"
            />
            <Card.Body>
              <Card.Text>
                <center>
                  <h5 className="text-primary">
                    <h2>We don't plan events, we plan Memories</h2>
                  </h5>
                </center>
              </Card.Text>
            </Card.Body>
          </Card>
          </div>
          <br></br>
        <div abt="text-dark m-2 p-3 bg-secondary" style={{ fontSize:20}}>

          India's favourite wedding planning website & app. ​MerryWedding is​ a ​swanky alternative to the
          outdated wedding planning process. A one-stop-shop for all things
          weddings, you can find inspiratio​​n​, ​ideas ​and vendors within​
          your​ budget​. MerryWedding has been trusted by more brides
          & grooms​ all over the India​ to plan their big day.​ So sit back, log
          on to MerryWedding, and ​plan the wedding of your dreams​!
          
          <h2>Make Planning decisions</h2>

          <h3>Vendors</h3>
          From photographers to wedding priests, MerryWedding has most of active
          vendors for you to choose from. Browse their portfolio, prices,
          genuine client reviews & much more to do your research and book just
          about any wedding vendor you might require.
          <br></br>
          <br></br>
         <h3>MerryWedding Bridal Gallery / Shop</h3> 
          The MW Bridal Gallery is your one-stop wedding shop. Choose from 2000+ outfits and chat with the designer's team directly to find the outfit of your dreams. Kick-start your wedding shopping here from the comfort of your home!
          <br></br>
          <br></br>
        <h3 >MerryWedding Mynt</h3>
        An exclusive loyalty program by WedMeGood for our brides-to-be and
        grooms-to-be, this allows access to special offers and benefits from
      across various categories like bridal wear, travel,
        jewellery, beauty and more!
        </div>

    </div>

        <div className="text-dark m-2 p-3 bg-secondary" style={{ fontSize:20}}>
          <h3>Our Vision </h3>
          MerryWedding (@mw) is an event planner came to existance back in
          2022. @MW offers A-Z and 0-9 excellent event planning services from a
          team of experienced, energetic & innovative event planners. We ensures
          that our clients, which are constantly growing, make regular use of
          our services.
          <div className="d-flex justify-content-between m-3">
            <div className="card" style={{ width: "27rem" ,height:"100%" }}>
            <img className="card-img-top" src="https://image.wedmegood.com/resized/1000X/uploads/member/664795/1640599720_image8083.jpg?crop=333,492,1366,768" alt="Card image cap"
              ></img>
            </div>
            <div className="card" style={{ width: "27rem" ,height:"15rem" }}>
            <img classNames="card-img-top" src="https://image.wedmegood.com/resized/1000X/uploads/member/3362407/1662537106_IMG_6126.JPG?crop=108,0,1067,600" alt="Card image cap"
              ></img>
            </div>
            <div className="card" style={{ width: "27rem" ,height:"100%" }}>
            <img className="card-img-top" src="https://image.wedmegood.com/resized/1000X/uploads/member/14377/1434462034_image.jpg"  alt="Card image cap"
              ></img>
            </div>
            <div className="card" style={{ width: "27rem" ,height:"100%" }}>
              <img
                className="card-img-top"
                src="https://image.wedmegood.com/resized/1000X/uploads/member/115974/1662618065__SRJ0883.jpeg?crop=5,133,2038,1146"
                alt="Card image cap"
              ></img>
            </div>
          </div>
        </div>
      </>
    );
  }
}
