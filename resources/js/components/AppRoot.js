import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useTranslation } from 'react-i18next';

require('@privacybydesign/irma-css/dist/irma.css');

const IrmaCore = require('@privacybydesign/irma-core');
const Web      = require('@privacybydesign/irma-web');
const Dummy    = require('@privacybydesign/irma-dummy');

export function AppRoot() {
  const { t } = useTranslation();

  useEffect(() => {
    const irma = new IrmaCore({
    debugging: false,
    element:   '#irma-web-form',
    dummy:     'happy path'
    });

    irma.use(Web);
    irma.use(Dummy);
    
    irma.start()
    .then(result => console.log("Successful disclosure! 🎉", result))
    .catch(error => console.error("Couldn't do what you asked 😢", error));
  }, []);

  return (
    <div>
      <div id="irma-web-form" />
    </div>
  );
}

ReactDOM.render(<AppRoot />, document.getElementById('AppRoot'));
