import React, { Component } from 'react'
import { Header, Image, Button, Grid } from 'semantic-ui-react'
export default class Cart extends Component {
  // constructor(props)
  // {
  //   super(props);
    
  // }
  getCartItem=()=>{
    return(
    this.props.cartItem.map((item,i)=>{
      return(
        <Grid.Row key={i}>
    <Grid.Column verticalAlign="middle" width={4} textAlign="center">
      <Button primary>X</Button>
    </Grid.Column>
    <Grid.Column width={3} verticalAlign="middle">
      <Image src={`http://localhost:8080/${item.image}`} size="small"></Image>
    </Grid.Column>
    <Grid.Column width={3} verticalAlign="middle" right="true">
      <Header as="h4">{item.description}</Header>
    </Grid.Column>
    <Grid.Column width={2} verticalAlign="middle" textAlign="center"><Header as="h3" >1</Header></Grid.Column>
    <Grid.Column width={3} verticalAlign="middle"><Header as="h3" >{item.cost}</Header></Grid.Column>
  </Grid.Row>
      )
    })
    )
  }
  render() {
    return (
      <div style={{ marginTop: "5rem" }}>
        <Grid >
          <Grid.Row>
            <Grid.Column width={10} textAlign="center"><Header as="h2">Product</Header></Grid.Column>
            <Grid.Column width={3}><Header as="h2">Quantity</Header></Grid.Column>
            <Grid.Column width={3}><Header as="h2">Total</Header></Grid.Column>
          </Grid.Row>
          {this.getCartItem()}
        </Grid>
      </div>




    )
  }
}
