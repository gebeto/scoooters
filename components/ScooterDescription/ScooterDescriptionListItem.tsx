import * as React from "react";

export const ScooterDescriptionListItem = (props: any) => {
  return (
    <div>
      <span>{props.title}</span>
      <span>{props.value}</span>
    </div>
  );
};
