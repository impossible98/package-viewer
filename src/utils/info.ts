// import third-party modules
import internalIp from 'internal-ip';
// import local modules
import { APP_NAME, VERSION } from './constants';

export function showLoginInfo(port: number, time: number) {
  const IP = internalIp.v4.sync();

  console.log();
  console.log(`  ${APP_NAME} v${VERSION} dev server running at:`);
  console.log();
  console.log(`  > Local:   http://localhost:${port}/`);
  console.log(`  > Network: http://${IP}:${port}/`);
  console.log();
  console.log(`  ready in ${time}ms`);
  console.log();
}
