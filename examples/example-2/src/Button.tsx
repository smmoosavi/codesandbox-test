import React, {PropsWithChildren} from 'react';

interface OwnProps {}

export type Props = PropsWithChildren<OwnProps>;

export function Button(props: Props) {
  return (<button style={{backgroundColor: 'purple', borderRadius: 40, padding: 8}}>{props.children}</button>);
}
