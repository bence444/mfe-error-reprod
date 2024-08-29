import { initFederation } from '@angular-architects/native-federation';

const mod = {
  "social": "http://localhost:4201/remoteEntry.json"
};

initFederation(mod)
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));
