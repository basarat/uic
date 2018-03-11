import * as React from 'react';

export type FlatButtonProps = {
  text: string,
}

export const PrimaryFlatButton: React.SFC<FlatButtonProps> = (props) => {
  return (<button type='button'>
    {props.text}
  </button>);
}
