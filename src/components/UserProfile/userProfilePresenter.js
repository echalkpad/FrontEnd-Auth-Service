import React, { Component } from 'react';
import HealthBar from '../HealthBar/healthIndex';
import ProfilePic from '../ProfilePic/picIndex';
import XPbar from '../XPbar/xpIndex';
import * as actions from '../../actions/index';
import * as xpTypes from '../../constants/expTypes';

class UserProfile extends Component {

  componentWillMount() {
    this.props.loadData(this.props.params.id);
  }

  challenge() {
    this.props.history.push('/battle');
  }

  render() {
    const total = 'XP_LEVEL_' + this.props.loadedUserinfo.level;
    let button = '';
    // if (JSON.parse(this.props.user.following).indexOf(this.props.loadedUserinfo.id) !== -1) {
    //   button = <button id='unfollow' className='btn btn-danger'>Unfollow</button>;
    // } else {
    //   button =
    // }

    return (
      <section>
        <h1>{this.props.loadedUserinfo.username}</h1>
        <HealthBar type={'loaded'} />
        <ProfilePic />
        <button className='btn btn-success' onClick={() => this.props.addFriend(this.props.loadedUserinfo, this.props.user)}>
          Follow<span className="glyphicon glyphicon-ok-circle" aria-hidden="true"></span></button>
        <button className='btn btn-danger' onClick={() => this.props.removeFriend(this.props.loadedUserinfo, this.props.user)}>
          Unfollow<span className="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
        <p>Current Level: {this.props.loadedUserInfo.level}</p>
        <button className='btn btn-danger' onClick={() => this.challenge()}>
        CHALLENGE</button>
        <h2>XP: ({this.props.loadedUserinfo.totalXp} / {xpTypes[total]})</h2>
      </section>
    );
  }

}
// <button className='btn btn-danger' onClick={() => this.props.challenge(this.props.loadedUserinfo, this.props.user, this.props.socket)}>
//        CHALLENGE</button>
export default UserProfile;