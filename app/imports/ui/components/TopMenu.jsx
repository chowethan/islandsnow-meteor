import React from 'react';
import { Menu, Container, Icon, Dropdown } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item fitted><Icon name="facebook f" /></Menu.Item>
            <Menu.Item fitted><Icon name="twitter" /></Menu.Item>
            <Menu.Item fitted><Icon name="pinterest" /></Menu.Item>
            <Menu.Item fitted><Icon name="instagram" /></Menu.Item>

            <Menu.Item fitted position="right"><Icon name="home" /></Menu.Item>
            <Menu.Item fitted><Icon name="search" /></Menu.Item>
            <Menu.Item fitted><Icon name="user" /></Menu.Item>
            <Dropdown item simple icon="shopping cart" text='My Cart (0)'>
              <Dropdown.Menu>
                <Dropdown.Item text="Your cart is currently empty" />
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>
    );
  }
}
