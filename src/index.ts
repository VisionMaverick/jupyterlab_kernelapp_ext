import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { requestAPI } from './handler';

/**
 * Initialization data for the jupyterlab_kernelapp_ext extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_kernelapp_ext:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyterlab_kernelapp_ext is activated!');

    requestAPI<any>('get_example')
      .then(data => {
        console.log(data);
      })
      .catch(reason => {
        console.error(
          `The jupyterlab_kernelapp_ext server extension appears to be missing.\n${reason}`
        );
      });
  }
};

export default plugin;
