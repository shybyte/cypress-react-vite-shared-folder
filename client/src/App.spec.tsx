import * as React from 'react'
import {mount} from '@cypress/react'
import Button from './App'
import App from "./App";

it('Button', () => {
  mount(<App/>)
  cy.get('button')
    .contains('count is: 0')
    .click()
    .contains('count is: 1');
})

