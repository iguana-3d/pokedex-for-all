import React from "react";
import { useTheme } from "styled-components";
import { Container } from "./styles";

interface IProps {
  label?: string;
  placeholder?: string;
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  defaultValue?: string | number;
  disabled?: boolean;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: "text" | "email" | "submit";
  variant?: "outlined" | "filled";
  iconRight?: React.ReactNode;
}

const TextField: React.FC<IProps> = ({ ...props }) => {
  const theme = useTheme();

  return (
    <Container
      color={props.color || "primary"}
      iconRight={!!props.iconRight}
      label={props.label}
    >
      <input
        className="input"
        autoComplete="off"
        id="input"
        disabled={props.disabled}
        placeholder={props.placeholder}
        type="text"
        required
      />
      {props.iconRight && <div className="icon-box">{props.iconRight}</div>}
      <label className="label" htmlFor="input">
        {props.label}
      </label>
      <fieldset className="fieldset">
        <legend className="legend">
          <span className="span-legend"> {props.label}</span>
        </legend>
      </fieldset>
    </Container>
  );
};

export default TextField;
