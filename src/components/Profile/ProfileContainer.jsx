import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profile-reducer";
import { withRouter, Redirect } from "react-router";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId?.slice(1);
    if (!userId) {
      userId = 2;
    } else {
      this.props.getUserProfile(userId);
    }
  }

  render() {
    if (!this.props.isAuth) return <Redirect to="/login" />;
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
});

let ProfileUrlContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, { getUserProfile })(
  ProfileUrlContainer
);
