import React from 'react';
import { Container, Grid, Form } from 'semantic-ui-react';

export default class Footer extends React.Component {
  render() {
    return (
        <Container fluid className="footer">
          <Grid container columns={3}>
            <Grid.Column>
              <span className="footer-header">Navigation</span>
              <hr />
              <a href="#">About Us</a><br />
              <a href="#">Videos</a><br />
              <a href="#">Store Locations</a><br />
              <a href="#">Shipping & Returns</a><br />
              <a href="#">Terms & Conditions</a><br />
              <a href="#">Privacy Policy</a>
            </Grid.Column>
            <Grid.Column>
              <span className="footer-header">Main Menu</span>
              <hr />
              <a href="#">Men</a><br />
              <a href="#">Women</a><br />
              <a href="#">Kids</a><br />
              <a href="#">Brands</a><br />
              <a href="#">Search</a>
            </Grid.Column>
            <Grid.Column>
              <span className="footer-header">Connect</span>
              <hr />
              Sign up for the latest updates<br />
              <Form>
                <input type="text" placeholder="Enter Email Address" style={{width: "75%", height: "50px", borderRadius: 0, textIndent: "10px"}} /><input type="submit" value="Join" style={{width: "25%", height: "50px"}} />
              </Form>
            </Grid.Column>
          </Grid>
        </Container>
    );
  }
}
