import React from "react";
import PropTypes from "prop-types";
import { styled } from "../../../stitches.config";

const Container = styled("div", {
  display: "flex",
  gap: "$medium",
  alignItems: "center",
  transition: "all 300ms ease",

  variants: {
    toggle: {
      true: {
        backgroundColor: "none",
        delay: "200ms",
      },
      false: {
        backgroundColor: "$backgroundColor",
        borderRadius: "$medium",
        padding: "$medium",
      },
    },
  },
});

const ImageWrapper = styled("div", {
  minWidth: "3.5rem",
  height: "3.5rem",
  borderRadius: "50%",
  overflow: "hidden",
});

const Image = styled("img", {
  width: "100%",
  height: "100%",
  borderRadius: "50%",
  objectFit: "cover",
});

const InfoWrapper = styled("div", {
  variants: {
    toggle: {
      true: {
        opacity: 0,
        transitionDelay: "200ms",
      },
      false: {
        opacity: 1,
      },
    },
  },
});

const UserName = styled("h3", {
  fontSize: "$lg",
  color: "$textColor",
});

const UserEmail = styled("span", {
  fontSize: "0.75rem",
  opacity: 0.6,
  color: "$textColor",
});

const UserProfile = ({ toggle, user }) => {
  if (!user) return null;

  return (
    <Container toggle={toggle}>
      <ImageWrapper>
        <Image src={user.user_img} alt="pic-profile" />
      </ImageWrapper>
      <InfoWrapper toggle={toggle}>
        <UserName>{user.user_name}</UserName>
        <UserEmail>{user.email}</UserEmail>
      </InfoWrapper>
    </Container>
  );
};

UserProfile.propTypes = {
  toggle: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    user_img: PropTypes.string.isRequired,
    user_name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserProfile;
