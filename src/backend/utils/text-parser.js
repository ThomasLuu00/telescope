const striptags = require('striptags');
const jsdom = require('jsdom');

const { JSDOM } = jsdom;

module.exports = async function(htmlFragment) {
  const dom = new JSDOM(htmlFragment);
  const body = dom.window.document.querySelector('body');

  /* 
  The substitution string can be anything as long as
  it's infrequent and won't appear in blogs.
  */
  return striptags(body.innerHTML, [], '\r')
    .trim()
    .replace(/\r+/g, '\n');
};
