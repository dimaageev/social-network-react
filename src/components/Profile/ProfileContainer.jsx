import React from "react";
import styles from "./Profile.module.css";
import Profile from "./Profile";
import * as axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profile-reducer";
import { withRouter } from "react-router";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId?.slice(1);
    if (!userId) {
      userId = 2;
    } else {
      axios
        .get(`https://social-network.samuraijs.com/api/1.0/profile/ ${userId}`)
        .then((response) => {
          this.props.setUserProfile(response.data);
        });
    }
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

let ProfileUrlContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(
  ProfileUrlContainer
);
