import React from 'react';
import { Container, Image, Menu, Grid, Dropdown } from 'semantic-ui-react';

export default class Content extends React.Component {
  render() {
    return (
        <Container fluid>
          <Image centered src="https://cdn.shopify.com/s/files/1/1035/5187/t/5/assets/logo.png?18002885318982737731" />
          <Menu borderless className="middlemenu">
            <Grid container centered>
              <Dropdown item simple icon="dropdown" text="Men">
                <Dropdown.Menu>
                  <Dropdown.Item text="Tank Tops" />
                  <Dropdown.Item text="Shirts" />
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown item simple icon="dropdown" text="Women">
                <Dropdown.Menu>
                  <Dropdown.Item text="Tank Tops" />
                  <Dropdown.Item text="Shirts" />
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown item simple icon="dropdown" text="Kids">
                <Dropdown.Menu>
                  <Dropdown.Item text="Shirts" />
                  <Dropdown.Item text="Onesies" />
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown item simple icon="dropdown" text="Brands">
                <Dropdown.Menu>
                  <Dropdown.Item text="Aloha Surf Project" />
                  <Dropdown.Item text="Da Mokes" />
                </Dropdown.Menu>
              </Dropdown>
              <Menu.Item>Search</Menu.Item>
            </Grid>
          </Menu>
          <Image fluid src="https://cdn.shopify.com/s/files/1/1035/5187/t/5/assets/slide1.jpg?18002885318982737731" />
        </Container>
    );
  }
}
