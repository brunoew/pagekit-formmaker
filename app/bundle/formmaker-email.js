var Forms =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(71)

	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(72)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\BixieProjects\\pagekit\\pagekit\\packages\\bixie\\formmaker\\app\\fields\\email.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },

/***/ 67:
/***/ function(module, exports) {

	module.exports = {

	    props: ['isAdmin', 'submission', 'field', 'form'],

	    methods: {
	        getDataObject: function (defaultValue) {
	            if (this.isAdmin) {
	                this.field.data.value = this.field.data.value || defaultValue;
	                return this.field.data;
	            }
	            this.submission.data[this.field.id].type = this.field.type;
	            this.submission.data[this.field.id].label = this.field.label;
	            this.submission.data[this.field.id].value = defaultValue;
	            this.submission.data[this.field.id].prepared = this.field.prepared;
	            return this.submission.data[this.field.id];
	        },
	        fieldInvalid: function (form) {
	            return form[this.fieldid] ? form[this.fieldid].invalid : false;
	        }

	    },

	    computed: {
	        fieldRequired: function () {
	            return this.field.data.required && !this.isAdmin ? true : false;
	        },
	        fieldLabel: function () {
	            return this.isAdmin ? 'Default value' : this.field.label;
	        }
	    }

	};

/***/ },

/***/ 71:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// <template>

	//     <div v-if="isAdmin" class="uk-form-row">
	//         <label for="form-placeholder" class="uk-form-label">{{ 'Placeholder' | trans }}</label>

	//         <div class="uk-form-controls">
	//             <input id="form-placeholder" class="uk-form-width-large" type="text" v-model="field.data.placeholder">
	//         </div>
	//     </div>

	//     <div v-if="isAdmin" class="uk-form-row">
	//         <span class="uk-form-label">{{ 'Submission email' | trans }}</span>

	//         <div class="uk-form-controls uk-form-controls-text">
	//             <label><input type="checkbox" value="required" v-model="field.data.user_email">
	//                 {{ 'Send submission confirmation to this address' | trans }}</label>
	//         </div>
	//     </div>

	//     <div class="uk-form-row {{field.data.classSfx || ''}}">
	//         <label :for="fieldid" class="uk-form-label" v-show="!field.data.hide_label">{{ fieldLabel | trans
	//             }}</label>

	//         <div class="uk-form-controls">
	//             <input type="email" class="uk-form-width-large" placeholder="{{ field.data.placeholder || '' | trans }}"
	//                    v-bind="{name: fieldid, id: fieldid}"
	//                    v-model="dataObject.value"
	//                    :required="fieldRequired"/>

	//             <p class="uk-form-help-block uk-text-danger" v-show="fieldInvalid(form)">{{ field.data.requiredError ||
	//                 'Please enter a value' | trans }}</p>
	//         </div>
	//     </div>

	// </template>

	// <script>
	var formmakerfieldMixin = __webpack_require__(67);

	module.exports = {

	    mixins: [formmakerfieldMixin],

	    data: function data() {
	        return {
	            dataObject: {},
	            fieldid: _.uniqueId('formmakerfield_')
	        };
	    },

	    created: function created() {
	        this.$set('dataObject', this.getDataObject(this.field.data.value || ''));
	    },

	    watch: {
	        'field.data.user_email': function fieldDataUser_email(value) {
	            this.formitem.data.user_email_field = value ? this.field.slug : false;
	        }
	    }

	};

	window.Formmakerfields.components['email'] = module.exports;

	// </script>

/***/ },

/***/ 72:
/***/ function(module, exports) {

	module.exports = "<div v-if=\"isAdmin\" class=\"uk-form-row\">\n        <label for=\"form-placeholder\" class=\"uk-form-label\">{{ 'Placeholder' | trans }}</label>\n\n        <div class=\"uk-form-controls\">\n            <input id=\"form-placeholder\" class=\"uk-form-width-large\" type=\"text\" v-model=\"field.data.placeholder\">\n        </div>\n    </div>\n\n    <div v-if=\"isAdmin\" class=\"uk-form-row\">\n        <span class=\"uk-form-label\">{{ 'Submission email' | trans }}</span>\n\n        <div class=\"uk-form-controls uk-form-controls-text\">\n            <label><input type=\"checkbox\" value=\"required\" v-model=\"field.data.user_email\">\n                {{ 'Send submission confirmation to this address' | trans }}</label>\n        </div>\n    </div>\n\n    <div class=\"uk-form-row {{field.data.classSfx || ''}}\">\n        <label :for=\"fieldid\" class=\"uk-form-label\" v-show=\"!field.data.hide_label\">{{ fieldLabel | trans\n            }}</label>\n\n        <div class=\"uk-form-controls\">\n            <input type=\"email\" class=\"uk-form-width-large\" placeholder=\"{{ field.data.placeholder || '' | trans }}\"\n                   v-bind=\"{name: fieldid, id: fieldid}\"\n                   v-model=\"dataObject.value\"\n                   :required=\"fieldRequired\"/>\n\n            <p class=\"uk-form-help-block uk-text-danger\" v-show=\"fieldInvalid(form)\">{{ field.data.requiredError ||\n                'Please enter a value' | trans }}</p>\n        </div>\n    </div>";

/***/ }

/******/ });