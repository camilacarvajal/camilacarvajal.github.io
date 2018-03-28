"use strict";

this["JST"] = this["JST"] || {};

this["JST"]["post"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\n<a target=\"_blank\" href=\""
    + escapeExpression(((stack1 = (depth1 && depth1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><span class=\"img__placeholder\" style=\"background-image: url("
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.full)),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "); background-color: #f6f6f6;\"></span></a>\n";
  return buffer;
  }

  buffer += "\n";
  stack1 = helpers['with'].call(depth0, (depth0 && depth0.thumbnail_images), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<div class=\"news-item__body\"\">\n  <span class=\"news-item__date\">"
    + escapeExpression((helper = helpers.fd || (depth0 && depth0.fd),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.date), options) : helperMissing.call(depth0, "fd", (depth0 && depth0.date), options)))
    + "</span>\n  <h4>\n    <a target=\"_blank\" href=\"";
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n      ";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </a>\n  </h4>\n  ";
  stack1 = (helper = helpers.truncate || (depth0 && depth0.truncate),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.excerpt), "80", options) : helperMissing.call(depth0, "truncate", (depth0 && depth0.excerpt), "80", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  return buffer;
  });