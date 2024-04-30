import React, { useState, useRef } from "react";
import "./styles.css";

const ProfileEdit = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: null,
  });

  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      photo: file,
    });
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode enviar os dados do formulário para o backend
    console.log(formData);
    // Limpar os campos após a submissão
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      photo: null,
    });
  };

  return (
    <div>
      <h2>Editar Perfil</h2>
      
      <div className="photo-input" onClick={handleImageClick}>
        <img
          src="https://github.com/Lucaswillians.png"
          alt="profile photo"
        />
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handlePhotoChange}
        />
      </div>

      <form className="form-profile" onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="email-input">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="password-input">
          <label>Senha:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Salvar Alterações</button>
      </form>
    </div>
  );
};

export default ProfileEdit;
