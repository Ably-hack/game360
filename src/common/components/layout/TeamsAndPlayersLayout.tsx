import { ReactNode } from 'react';

type TeamsAndPlayersLayout = {
  children: ReactNode;
};

function TeamsAndPlayersLayout({ children }: TeamsAndPlayersLayout) {
  return <div className="">{children}</div>;
}

export default TeamsAndPlayersLayout;
