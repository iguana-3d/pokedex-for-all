import React, { HTMLAttributes } from "react";
import { Button } from "./styles";
import Spinner from "../../loadings/Spinner";

interface IProps extends HTMLAttributes<HTMLButtonElement> {
  buttonText: string;
  isLoading?: boolean;
  buttonSize?: number;
  isFullWidth?: boolean;
  loadingSpinnerSize?: number;
}

const ButtonDefault: React.FC<IProps> = ({
  buttonText,
  isLoading,
  buttonSize,
  isFullWidth,
  loadingSpinnerSize,
  ...props
}) => {
  return (
    <Button
      isLoading={isLoading}
      buttonSize={buttonSize}
      isFullWidth={isFullWidth}
      disabled={isLoading}
      {...props}
    >
      <span className="text">{buttonText}</span>
      <span className="spinner">
        <Spinner size={loadingSpinnerSize || 30} />
      </span>
    </Button>
  );
};

export default ButtonDefault;
