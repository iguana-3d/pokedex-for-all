import React, { InputHTMLAttributes, forwardRef } from "react";
import { Container } from "./styles";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  defaultValue?: string | number;
  disabled?: boolean;
  value?: string | number;
  variant?: "outlined" | "filled";
  iconRight?: React.ReactNode;
}

const TextField: React.ForwardRefRenderFunction<HTMLInputElement, IProps> = ({
  label,
  color,
  defaultValue,
  disabled,
  iconRight,
  ...props
}, ref) => {
  
  return (
    <Container color={color || "primary"} iconRight={!!iconRight} label={label}>
      <input
        className="input"
        autoComplete="off"
        id="input"
        placeholder={props.placeholder}
        type="text"
        required
        ref={ref}
        {...props}
      />
      {iconRight && <div className="icon-box">{iconRight}</div>}
      <label className="label" htmlFor="input">
        {label}
      </label>
      <fieldset className="fieldset">
        <legend className="legend">
          <span className="span-legend"> {label}</span>
        </legend>
      </fieldset>
    </Container>
  );
};

export default forwardRef(TextField);
