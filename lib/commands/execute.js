import _ from 'lodash';
import { errors } from 'appium-base-driver';

let extensions = {};

extensions.executeMobile = async function (mobileCommand, opts = {}) {
  const mobileCommandsMapping = {
    shell: 'mobileShell',

    performEditorAction: 'mobilePerformEditorAction',

    swipe: 'mobileSwipe',

    deviceInfo: 'mobileGetDeviceInfo',

    isToastVisible: 'mobileIsToastVisible',

    openDrawer: 'mobileOpenDrawer',

    closeDrawer: 'mobileCloseDrawer',

    setDate: 'mobileSetDate',

    setTime: 'mobileSetTime',

    navigateTo: 'mobileNavigateTo',

    scrollToPage: 'mobileScrollToPage',

    backdoor: 'mobileBackdoor',

    flashElement: 'flashElement'
  };

  if (!_.has(mobileCommandsMapping, mobileCommand)) {
    throw new errors.UnknownCommandError(`Unknown mobile command "${mobileCommand}". ` +
      `Only ${_.keys(mobileCommandsMapping)} commands are supported.`);
  }
  return await this[mobileCommandsMapping[mobileCommand]](opts);
};

export default extensions;
