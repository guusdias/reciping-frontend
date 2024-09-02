export default function Button(
  type,
  isPassword,
  showPassword,
  disabled,
  onClick
) {
  return (
    <button type={type} disabled={disabled} onClick={onClick}>
      {isPassword && <>{showPassword ? <FaEyeSlash /> : <FaEye />}</>}
    </button>
  );
}
