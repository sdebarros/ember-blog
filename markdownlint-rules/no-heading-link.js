const { URL } = require("url");
const { addError, forEachHeading } = require("markdownlint-rule-helpers");
// Regular expression for inline links and shortcut reference links
const linkRegex = /\[(?:[^[\]]|\[[^\]]*\])*\](?:\(\S*\))?/g;

module.exports = {
  "names": [ "no-heading-link" ],
  "description": "Headings should not include a link",
  "tags": [ "heading-link" ],
  "function": function rule(params, onError) {
    forEachHeading(params, (heading) => {
      const { line, lineNumber } = heading;
      const match = line.match(linkRegex);
      if (match) {
        addError(
          onError,
          lineNumber,
          `${match[0].slice(0,50)}...`,
        );
      }
    });
  }
};
