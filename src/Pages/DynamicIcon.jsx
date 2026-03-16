import React from "react";
import * as LucideIcons from "lucide-react";

const DynamicIcon = ({
  name,
  size = 40,
  color = "currentColor",
  className = "",
}) => {
  const IconComponent =
    LucideIcons[name] || LucideIcons.HelpCircle;

  return (
    <IconComponent
      size={size}
      color={color}
      className={className}
    />
  );
};

export default DynamicIcon;
