import EventEmitter from 'events';
import fs from 'fs';
import os from 'os';
import path from 'path';

import _ from 'lodash';
import LRU from 'lru-cache';
import Promise from 'bluebird';
import walk from 'walkdir';


var data = {a:1, b:2, c:3};
var json = JSON.stringify(data);


var blob = new Blob([json], {type: "application/json"});
var url  = URL.createObjectURL(blob);

var a = document.createElement('a');
a.download    = "C:\\Users\\krupal\\backup.json";
a.href        = url;
a.textContent = "Download backup.json";

console.log("DONE");

export default {};