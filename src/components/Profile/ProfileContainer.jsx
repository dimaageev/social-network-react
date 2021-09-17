import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profile-reducer";
import { withRouter } from "react-router";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

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
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

let ProfileUrlContainer = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, { getUserProfile })(
  ProfileUrlContainer
);
