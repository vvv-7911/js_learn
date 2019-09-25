'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _ora = require('ora');

var _ora2 = _interopRequireDefault(_ora);

var _inquirer = require('inquirer');

var _inquirer2 = _interopRequireDefault(_inquirer);

var _downLoadGitRepo = require('downLoad-git-repo');

var _downLoadGitRepo2 = _interopRequireDefault(_downLoadGitRepo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// git 的模板

// 异步的处理方法
// loading效果
var install = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var loading, anser;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            loading = (0, _ora2.default)('fetching template......');
            _context.next = 3;
            return _inquirer2.default.prompt([{
              type: 'input',
              name: 'projectName',
              message: '项目名称',
              default: 'xyDemo'
            }]);

          case 3:
            anser = _context.sent;

            console.log(anser, '-----------');
            loading.start();
            (0, _downLoadGitRepo2.default)('xlei1123/xl-cli', process.cwd() + '/' + project, function (err) {
              if (err) {
                console.log(err);
                return;
              }
              loading.succeed();
            });

          case 7:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function install() {
    return _ref.apply(this, arguments);
  };
}(); // 命令行交互
exports.default = install;