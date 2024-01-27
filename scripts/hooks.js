import { logger } from './logger.js';
import { settings } from './settings.js';
import { RaiseHandDialog } from './RaiseHandDialog.js';

logger.info(`Initializing Module`);
Hooks.on('init', settings.register);
Hooks.on('setup', RaiseHandDialog.register);
Hooks.on('renderSidebarTab', RaiseHandDialog.renderWhisperIcon);


