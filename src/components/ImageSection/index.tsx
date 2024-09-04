import React from "react";

interface ImageSectionProps {
  user_img: string;
  user_name: string;
  img_url: string;
  title: string;
  imgDisplay: boolean;
  isEditing: boolean;
  editedImgUrl: string;
  setEditedImgUrl: (value: string) => void;
}

const ImageSection = ({
  user_img,
  user_name,
  img_url,
  title,
  imgDisplay,
  isEditing,
  editedImgUrl,
  setEditedImgUrl,
}: ImageSectionProps) => (
  <div>
    {imgDisplay && (
      <div className="flex items-center mt-5 ml-7">
        <img
          src={user_img}
          alt="User Photo"
          className="w-10 h-10 rounded-full mr-4"
        />
        <span className="font-medium">{user_name}</span>
      </div>
    )}
    <div className="overflow-hidden px-7 py-4 flex items-center">
      {isEditing ? (
        <input
          type="text"
          className="rounded-lg object-cover h-48 w-48"
          value={editedImgUrl}
          onChange={(e) => setEditedImgUrl(e.target.value)}
          placeholder="Image URL"
        />
      ) : (
        <img
          className="rounded-lg object-cover h-48 w-48"
          src={img_url}
          alt={title}
        />
      )}
    </div>
  </div>
);

export default ImageSection;
