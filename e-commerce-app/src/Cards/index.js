import React, { Component } from 'react'
import { Card,Grid,Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
export default class Cards extends Component {
    courseName = [{ name: "Engineering", image: '.././assets/engineering.jpeg' }, { name: "Medical", image: '.././assets/medical.jpg' }, { name: "BDS", image: '.././assets/bds.png' }, { name: "BSC", image: ".././assets/bsc.jpeg" }, { name: "CompetativeExam", image: ".././assets/competative.jpeg" }, { name: "Nursing", image: ".././assets/nursing.jpg" }];
    cards = () => {
        let arr = [];
        arr = this.courseName.map((item, i) => {
            console.log(item.image);
            return (
                <Grid.Column key={i} style={{ paddingTop: "3rem" }} width={5} >
                    <div >
                        <Link to={`/course/${item.name}`}>
                            <Card >
                                <Image src={item.image} height="300" />
                                <Card.Content>
                                <Card.Header>{item.name}</Card.Header>
                                </Card.Content>
                                <Card.Content extra>
                                    
                                </Card.Content>
                            </Card>
                        </Link>
                    </div>
                </Grid.Column>

            );

        })
        return arr;
    }
    render() {
        return (
            
                <div>
                    <Grid textAlign="center">
                        <Grid.Row >
                        {this.cards()}
                        </Grid.Row>
                        </Grid>
                </div>
            
        )
    }
}
