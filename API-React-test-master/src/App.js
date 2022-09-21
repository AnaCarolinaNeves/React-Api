import React from 'react'
import { Form, Input, Button, Select, Label } from 'semantic-ui-react'

const unidadeMedida = [
  {text: 'Internacional', value: 'internacional' },
  {text: 'Imperial', value: 'imperial' },
]

const certification = [
  {text: 'ANAC', value: 'anac'},
  {text: 'EASA', value: 'easa'},
  {text: 'FAA', value: 'faa'},
]

const flap = [
  {text: '220', value: '220'},
  {text: '450', value: '450'},
]

const typeWind = [
  {text: 'Head wind', value: 'head'},
  {text: 'Tail wind', value: 'tail'},
]

const runway = [
  {text: '1 (Poor)', value: '1'},
  {text: '2 (Medium to poor)', value: '2'},
  {text: '3 (Medium)', value: '3'},
  {text: '4 (Good to medium)', value: '4'},
  {text: '5 (Good)', value: '5'},
  {text: '6 (Dry)', value: '6'},
]

const typeSlope = [
  {text: 'Downhill', value: 'downhill'},
  {text: 'Uphill', value: 'uphill'},
]

const FormExampleFieldControlId = () => (
  <Form>
    
    <Form.Group widths='equal'>
      <Form.Field
        control={Select}
        options={unidadeMedida}
        label={{ children: 'Select a unit of measurement', htmlFor: 'select-unidade-medida' }}
        placeholder='Unit of measurement'
      />
      <Form.Field
        id='input-model'
        control={Input}
        label='Aircraft Model'
        placeholder='Aircraft model'
      />
      <Form.Field
        id='input-engine'
        control={Input}
        label='Engine'
        placeholder='Engine'
      />     
    </Form.Group>

    <Form.Group widths='equal'>
      <Form.Field
        control={Select}
        options={certification}
        label={{ children: 'Certification', htmlFor: 'select-certification' }}
        placeholder='Certification'
      />

      <Form.Input label='Aircraft weight'>   
        <Input labelPosition='right' type='text' placeholder='Aircraft weight'>         
          <input />
            <Label id="AircraftWeight"></Label>
        </Input>
      </Form.Input>

      <Form.Input label='Speed additive'>
        <Input labelPosition='right' type='text' placeholder='Speed additive'>
          <input />
            <Label id='SpeedAdditive'></Label>
        </Input>
      </Form.Input>    
    </Form.Group>

    <Form.Group widths='equal'>
      <Form.Field
        control={Select}
        options={flap}
        label={{ children: 'Flap', htmlFor: 'select-flap' }}
        placeholder='Flap'
      />

      <Form.Input label ='Wind'>
        <Input labelPosition='right' type='text' placeholder='Wind'>
          <input />
            <Label id="Wind"></Label>
        </Input>
      </Form.Input>

      <Form.Field
        control={Select}
        options={typeWind}
        label={{ children: 'Type of wind', htmlFor: 'select-typeWind' }}
        placeholder='Type of wind'
      />
    </Form.Group>
  
    <Form.Group widths='equal'>
      <Form.Field
        control={Select}
        options={runway}
        label={{ children: 'Runway Condition (Braking Action)', htmlFor: 'select-runway' }}
        placeholder='Runway Condition (Braking Action)'
      />

      <Form.Input label='Temperature'>
        <Input labelPosition='right' type='text' placeholder='Temperature'>
          <input />
            <Label id='Temperature'></Label>
        </Input>
      </Form.Input>

      <Form.Input label='Airport altitude'>
        <Input labelPosition='right' type='text' placeholder='Airport altitude'>
          <input />
            <Label id='AirportAltitude'></Label>
        </Input>
      </Form.Input>   
    </Form.Group>

    <Form.Group widths='equal'>
      <Form.Field
        id='input-slope'
        control={Input}
        label='Slope'
        placeholder='Slope'
      />
      <Form.Field
        control={Select}
        options={typeSlope}
        label={{ children: 'Type of slope', htmlFor:'select-typeSlope'}}
        placeholder='Type of slope'
      />
      <Form.Field
        id='input-reversor'
        control={Input}
        label='Reversor'
        placeholder='Reversor'
      />
    </Form.Group>

    <Form.Field
      id='button-result'
      control={Button}
      content='Result'
    />
  </Form>
)

export default FormExampleFieldControlId
