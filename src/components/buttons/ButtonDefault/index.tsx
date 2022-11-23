import React from "react";
import { Button } from "./styles";
import Spinner from "../../loadings/Spinner";

interface IProps {
  buttonText: string;
  isLoading?: boolean;
  buttonSize?: number;
  isFullWidth?: boolean;
  loadingSpinnerSize?: number;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

const ButtonDefault: React.FC<IProps> = ({ ...props }) => {
  return (
    <Button
      isLoading={props.isLoading}
      buttonSize={props.buttonSize}
      isFullWidth={props.isFullWidth}
      onClick={props.onClick}
      disabled={props.isLoading}
    >
      <span className="text">{props.buttonText}</span>
      <span className="spinner">
        <Spinner size={props.loadingSpinnerSize || 30} />
      </span>
    </Button>
  );
};

export default ButtonDefault;
