import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it('should say hello', (done) => {
    const index = fs.readFileSync('./src/index.html', "utf-8");
    //we now have a virtual dom with the window argument
    jsdom.env(index, function(err, window) {
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("JavaScript Dev Environment");
      //weird little gotcha, must have the done argument above and done method below for Mocha to work properly
      //You must do this when ever you are doing an async opperation, because this tells Mocha that it is safe to evaluate
      done();
      window.close();
    })

  });
});
