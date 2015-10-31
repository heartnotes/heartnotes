"use strict";

var _ = require('lodash'),
  moment = require('moment'),
  lunr = require('lunr');

import Logger from '../utils/logger';
import { htmlToStr } from '../utils/format';


export default class SearchIndex {
  constructor(logger) {
    this.logger = Logger.create('search-index');

    this.lunr = lunr(function() {
      this.field('ts', { 
        boost: 10 
      });
      this.field('body');
      this.ref('id');
    });
  }


  add (entry) {
    this.logger.debug('add', entry.id);

    this.lunr.add(this._preProcess(entry));
  }


  update (entry) {
    this.logger.debug('update', entry.id);

    this.lunr.update(this._preProcess(entry));
  }


  _preProcess (entry) {
    var ret = {};

    ret.id = entry.id;
    ret.ts = moment( entry.ts ).format('MMMM Do YYYY');
    ret.body = htmlToStr(entry.body);

    return ret;
  }
}




exports.instance = new SearchIndex();
