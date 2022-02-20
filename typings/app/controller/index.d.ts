// This file is created by egg-ts-helper@1.26.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome = require('../../../app/controller/home');
import ExportAdminIndex = require('../../../app/controller/admin/index');
import ExportDefaultHome = require('../../../app/controller/default/home');

declare module 'egg' {
  interface IController {
    home: ExportHome;
    admin: {
      index: ExportAdminIndex;
    }
    default: {
      home: ExportDefaultHome;
    }
  }
}
