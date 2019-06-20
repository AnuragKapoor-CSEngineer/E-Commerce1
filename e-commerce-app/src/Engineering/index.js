import React, { Component } from 'react'
import { Image, Icon, Card, Grid, Button } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import axios from 'axios';
export default class Engineering extends Component {
    componentDidMount() {
        axios.get('http://localhost:8080/read/B.Tech').then((res => {
            this.setState({
                engineeringBook: res.data
            })
        }))

    }
    
    constructor() {
        super();
        this.state = { engineeringBook: [{}] };
    }
    getBooks = () => {
        let arr = [];
        arr = this.state.engineeringBook.map((item, i) => {
            
            return (
                <Grid.Column style={{ paddingTop: "3rem", marginLeft: "1rem" }} width="5" key={i}>
                    <div>
                        <Card>
                            <Image src={`http://localhost:8080/${item.image}`} wrapped ui={false} />
                            <Card.Content >
                                <Card.Header style={{ textAlign: "center" }}>{item.name}</Card.Header>
                                <Card.Description style={{ textAlign: "center", color: "blue" }}>dsjfnjkdfn{item.description} Very awesome book have very great features you will really feel very good to learn</Card.Description>
                                <Card.Description style={{ color: "red" }}> ₹{item.cost}</Card.Description>


                            </Card.Content>
                            <Card.Content >
                                <Link to="/cart">
                                <Button animated='vertical' primary onClick={(e)=>{this.props.addToCart(item)}}>
                                    <Button.Content hidden>Cost is{item.cost}</Button.Content>
                                    <Button.Content visible>
                                       Add to cart <Icon name='shop' />
                                    </Button.Content>
                                </Button>
                                </Link>
                            </Card.Content>
                        </Card>
                    </div>
                </Grid.Column>
            )
        })
        return arr;
    }
    render() {
        return (
            <div style={{ marginTop: "5rem" }} >
                <Grid>
                    <Grid.Row>
                        {this.getBooks()}
                    </Grid.Row>
                </Grid>

            </div>)
    }
}