import { Redirect, Route } from 'react-router-dom';
import { Views } from 'Frontend/components/views/values';

export const ViewHandler = () => {
  return (
    <div>

      <Route path="/:path">
        {({ match }) => {
          if (!match) return <Redirect to="home" />;
          const path = match.params.path;
          return Views[path] ? Views[path] : <Redirect to="pageNotFound" />;
        }}
      </Route>
    </div>
  );
};
