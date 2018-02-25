import React from 'react';
import { Route } from 'react-router-dom';

import routesConfig from '../routes';

const renderRoute = (route) => <Route key={route.path} {...route} />;
const getPageTitle = () => window.location.hash.substring(2) || 'React Materialize';
const capitalize = path => path[0] ? path[0].toUpperCase() + path.substr(1) : '';
const renderPageTitle = () => capitalize(getPageTitle());

const Main = () => (
  <main className='main'>
    <div className='row'>
      <div className='col s12 m8 offset-m1 xl7 offset-xl1'>
          <h1 className="header">{renderPageTitle()}</h1>

          <div className='section'>
            {routesConfig.map((routesSection) => {
              return routesSection.component
                ? renderRoute(routesSection)
                : routesSection.routes.map(renderRoute);
            })}
        </div>
      </div>
    </div>
  </main>
);

export default Main;
