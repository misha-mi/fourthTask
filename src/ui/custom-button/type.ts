interface ICustomButton {
  title: string
  onClick?: () => void,
  size?: "large" | "medium" | "small"
}