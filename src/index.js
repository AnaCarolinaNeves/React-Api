import React from "react";
import ReactDOM from "react-dom";
import { Container, Image, Grid, Form, FormGroup, GridColumn } from "semantic-ui-react";
import aviao from './Icons/aviao.png';

import Example from "./App";

const App = ({ children }) => (
  <Container>
    <Form>
    <FormGroup widths={"equal"}>
      <Form.Field>
        <Grid columns={3} padded="vertically">
          <GridColumn>
            <Image src={aviao}/>
          </GridColumn>
          <GridColumn textAlign='bottom-middle'>
            <h3>Performance Calculation</h3>
          </GridColumn>
        </Grid>
      </Form.Field>
    </FormGroup>
    </Form>
    {children}</Container>
    
      
);

// TODO: Switch to https://github.com/palmerhq/the-platform#stylesheet when it will be stable
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

ReactDOM.render(
  <App>
    <Example />
  </App>,
  document.getElementById("root")
);
