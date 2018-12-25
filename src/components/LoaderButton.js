import React from "react";
import { Button } from "reactstrap";
import 'open-iconic/font/css/open-iconic-bootstrap.min.css';
import "./LoaderButton.css";

export default ({
  isLoading,
  text,
  loadingText,
  className = "",
  disabled = false,
  ...props
}) =>
  <Button
    className={`LoaderButton ${className}`}
    disabled={disabled || isLoading}
    {...props}
  >
    {isLoading && <span className="spinning oi oi-reload"></span>}
    {!isLoading ? text : loadingText}
  </Button>;
