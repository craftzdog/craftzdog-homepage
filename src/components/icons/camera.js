const CameraIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.5 3L5 5H2C1.46957 5 0.960859 5.21071 0.585786 5.58579C0.210714 5.96086 0 6.46957 0 7V16C0 16.5304 0.210714 17.0391 0.585786 17.4142C0.960859 17.7893 1.46957 18 2 18H18C18.5304 18 19.0391 17.7893 19.4142 17.4142C19.7893 17.0391 20 16.5304 20 16V7C20 6.46957 19.7893 5.96086 19.4142 5.58579C19.0391 5.21071 18.5304 5 18 5H15L13.5 3H6.5Z"
        fill="currentColor"
        className="camera-body"
      />
      <circle
        cx="10"
        cy="11"
        r="3.5"
        fill="none"
        stroke="white"
        strokeWidth="1.5"
        className="camera-lens"
      />
      <circle
        cx="10"
        cy="11"
        r="2"
        fill="white"
        className="camera-lens-inner"
      />
    </svg>
  )
}

export default CameraIcon
