import React from "react";

export default function FilledCard({ className = "", ...props }) {
  return (
    <div className={"card bg-primary-color text-primary-on " + className} {...props}>
      {props.children}
    </div>
  );
}
