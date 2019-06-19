import React from 'react';
import { storiesOf } from '@storybook/react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { MenuItem, MenuItemDropdown, NavBar, StyleLinksV2 } from '../src/';

storiesOf('NavBar', module)
  .add('with simple links', () => (
    <BrowserRouter>
      <StyleLinksV2 />
      <div className="l-app">
        <div>
          <link rel="stylesheet" type="text/css" href="https://asker-management-test.revinate.com/components/styleguide/_site/css/bootstrap.css" />
          <link rel="stylesheet" type="text/css" href="https://asker-management-test.revinate.com/components/styleguide/_site/css/font-awesome.min.css" />
          <link rel="stylesheet" type="text/css" href="https://asker-management-test.revinate.com/components/styleguide/_site/css/app-alt.css" />
        </div>
        <NavBar>
          <MenuItem
            label="Link 1"
            iconClass="fa-home"
            href="/lorem"
          />
          <MenuItem
            label="Link 2"
            href="/ipsum"
          />
          <MenuItemDropdown label="DropDown">
            <MenuItem
              label="sub item1"
              href="/test"
            />
            <MenuItem
              label="sub item2"
              href="/test2"
            />
          </MenuItemDropdown>
        </NavBar>
        <main className="l-main" style={{ padding: '100px'}}>
          <Switch>
            <Route exact path="/" render={() => <h1>Welcome</h1>} />
            <Route exact path="/lorem" render={() => <h1>Lorem</h1>} />
            <Route exact path="/ipsum" render={() => <h1>ipsum</h1>} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  ));
