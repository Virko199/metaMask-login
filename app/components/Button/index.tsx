import React from "react";
import MUIbutton, { ButtonProps as MUIbuttonProps } from "@mui/material/Button";

type ButtonProps = MUIbuttonProps & {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const ButtonInner: React.ForwardRefRenderFunction<
  HTMLButtonElement,
  ButtonProps
> = (props, ref) => {
  const playClickSound = () => {
    const audio = new Audio("/media/click.mp3");
    audio
      .play()
      .catch((error) => console.error("Error playing the sound:", error));
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    playClickSound();

    props.onClick?.(event);
  };

  return <MUIbutton {...props} onClick={handleClick} ref={ref} />;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ButtonInner
);
