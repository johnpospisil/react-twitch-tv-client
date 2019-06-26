import React from 'react';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '948057147239-fjtpjpaesu8biutidfh0f9rc7esbib3v.apps.googleusercontent.com',
        scope: 'email'
      });
    });
  }
  render() {
    return <div>Google Auth</div>;
  }
}

export default GoogleAuth;