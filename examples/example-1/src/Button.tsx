import React, {PropsWithChildren} from 'react';

interface OwnProps {}

export type Props = PropsWithChildren<OwnProps>;

export function Button(props: Props) {
  return (<button>{props.children}</button>);
}
