import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "../../../stitches.config";
import api from "../../api/User/index";

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  marginTop: "0",
  gap: "10px",
  alignItems: "center",
  padding: "10px",
  borderRadius: "24px",
  backgroundColor: "$backgroundColor",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  height: "100%",
  width: "100%",
});

const ProfileSection = styled("div", {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
});

const PhotoWrapper = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "50%",
});

const ProfileImage = styled("img", {
  borderRadius: "50%",
  width: "200px",
  height: "200px",
  objectFit: "cover",
  cursor: "pointer",
  transition: "opacity 0.3s, filter 0.3s",

  "&:hover": {
    opacity: "0.5",
    filter: "brightness(40%)",
  },
});

const FormWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "50%",
  justifyContent: "center",
  alignItems: "center",
});

const Form = styled("form", {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  width: "100%",
});

const FormField = styled("div", {
  display: "flex",
  alignItems: "center",
});

const Label = styled("label", {
  width: "25%",
  marginRight: "8px",
  fontSize: "14px",
  fontWeight: "500",
});

const Input = styled("input", {
  flexGrow: 1,
  padding: "8px",
  borderRadius: "8px",
  border: "1px solid $borderColor",
  outline: "none",
  "&:focus": {
    borderColor: "$primary",
    boxShadow: "0 0 0 2px rgba(255, 102, 0, 0.2)",
  },
});

const SubmitButton = styled("button", {
  padding: "10px 16px",
  backgroundColor: "$primary",
  color: "white",
  fontSize: "16px",
  fontWeight: "500",
  borderRadius: "8px",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "$secondary",
  },
});

const ProfileEdit = () => {
  const navigate = useNavigate();
  const user = JSON.parse(sessionStorage.getItem("user"));

  const [formData, setFormData] = useState({
    user_name: user?.user_name || "",
    email: user?.email || "",
    password: "",
    user_img: user?.user_img || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedUser = {
      user_name: formData.user_name,
      email: formData.email,
      user_img: formData.user_img,
    };

    try {
      await api.updateUser(user._id, updatedUser);

      const updatedUserData = { ...user, ...updatedUser };
      sessionStorage.setItem("user", JSON.stringify(updatedUserData));

      navigate("/feed");
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <Container>
      <ProfileSection>
        <PhotoWrapper>
          <ProfileImage
            src={formData.user_img || "default-profile.png"}
            alt="profile photo"
          />
        </PhotoWrapper>

        <FormWrapper>
          <Form onSubmit={handleSubmit}>
            <FormField>
              <Label htmlFor="user_name">Nome:</Label>
              <Input
                type="text"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                id="user_name"
              />
            </FormField>

            <FormField>
              <Label htmlFor="email">Email:</Label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                id="email"
              />
            </FormField>

            <FormField className="hidden">
              <Label htmlFor="password">Senha:</Label>
              <Input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                id="password"
              />
            </FormField>

            <FormField>
              <Label htmlFor="user_img">URL da Foto:</Label>
              <Input
                type="text"
                name="user_img"
                value={formData.user_img}
                onChange={handleChange}
                id="user_img"
              />
            </FormField>

            <SubmitButton type="submit">Salvar Alterações</SubmitButton>
          </Form>
        </FormWrapper>
      </ProfileSection>
    </Container>
  );
};

export default ProfileEdit;
