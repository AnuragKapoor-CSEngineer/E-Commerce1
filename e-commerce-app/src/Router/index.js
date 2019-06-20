import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Body from '../Body/index';
import Header from '../Header/index'
import Engineering from '../Engineering/index';
import Medical from '../Medical/index';
import Nursing from '../Nursing/index';
import Bsc from '../BSC/index';
import CompetativeExam from '../CompetativeExam/index.js'
import Cart from '../Cart/index';
class Router extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={cartItem:[]}
        // console.log(this.props);
    }
    addToCart=(item)=>{
        
        let tmp = this.state.cartItem;
        tmp.push(item);
        this.setState({
            cartItem: tmp
        })
        
    }
    render(){
        return(
 
                
                    <BrowserRouter>
                   <Header />                 
                 <Switch> 
                <Route exact path="/" render={(props)=><Body {...props} ></Body>}></Route>
                <Route path="/course/Engineering" render={(props)=><Engineering {...props} addToCart={this.addToCart}></Engineering>}></Route>
                <Route path="/course/Medical" component={Medical}></Route>
                <Route path="/course/Nursing" component={Nursing}></Route>
                <Route path="/course/BSC" component={Bsc}></Route>
                <Route path="/course/CompetativeExam" component={CompetativeExam}/>
                <Route path="/cart" render={(props)=><Cart {...props} cartItem={this.state.cartItem} ></Cart>}></Route>
                </Switch>
                </BrowserRouter>

                     
        )
    }
}
export default Router;