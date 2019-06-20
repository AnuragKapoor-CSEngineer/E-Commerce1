import React, { Component } from 'react'
import { Button, Grid, Form,Header,Icon,Segment } from 'semantic-ui-react'

    
export default class CompetativeExam extends Component {
    render() {
        return (
            <div >
                <Grid textAlign="center" verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" icon color="blue" textAlign="center">
            <Icon name="slack" color="yellow" />
            Register For Slack
       </Header>
        <Form onSubmit={this.handleSubmit} size="large">
            <Segment stacked>
                <Form.Input fluid name="username"  iconPosition="left"
                    placeholder="Username" type="text" icon="user"/>
                <Form.Input fluid name="email"  iconPosition="left"
                    placeholder="Email Address"  type="email" icon="mail"/>
                <Form.Input fluid name="password"  iconPosition="left" 
                    placeholder="Password"  type="password" icon="lock"/>
                <Form.Input fluid name="passwordConfirmation" iconPosition="left"
                    placeholder="Password Confirmation" type="password" icon="repeat" />
                <Button >Submit</Button>
            </Segment>
        </Form>
    </Grid.Column>
</Grid>
            </div>
        )
    }
}
