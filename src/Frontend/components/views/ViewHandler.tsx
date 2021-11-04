import { Redirect, Route } from 'react-router-dom';
import { Views } from 'Frontend/components/views/values';

export const ViewHandler = () => {
  return (
    <div>
      Page Contents
      <Route path="/:path">
        {({ match }) => {
          if (!match) return <Redirect to="home" />;
          const path = match.params.path;
          console.log(match);
          return Views[path] ?? <Redirect to="pageNotFound" />;
        }}
      </Route>
    </div>
  );
};
