import React, {Component} from 'react';
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import { 
  BrowserRouter, 
  Switch,
  Route,
  Link,
  Redirect 
} from "react-router-dom";


export default class HomePage extends Component {
  constructor(props){
    super(props);
    this.homePageMessage = this.homePageMessage.bind(this)
  }

  homePageMessage(){
    return (
      <p>Home Page</p>
    )
  }

  render(){
    const homePageMessage = () => {
      return (
        <p>Home Page</p>
      )
    }
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={homePageMessage} />
          <Route path="/join" component={RoomJoinPage} />
          <Route path="/create" component={CreateRoomPage} />
        </Switch>
      </BrowserRouter>
    )
  }
}