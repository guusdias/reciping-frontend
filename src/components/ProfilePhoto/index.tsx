interface ProfilePhotoProps {
  userImg: string;
}

const ProfilePhoto = ({ userImg }: ProfilePhotoProps) => {
  return (
    <div className="profile-edit flex items-center justify-center w-1/2">
      <div className="photo-input flex items-center justify-center mb-10">
        <img
          src={userImg || "default-profile.png"}
          alt="profile photo"
          className="rounded-full w-62 h-62 object-cover"
        />
      </div>
    </div>
  );
};

export default ProfilePhoto;
