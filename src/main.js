
const $ = require('jquery')
require('./css/base.css')
require('./css/index.css')
require('./less/header.less')

$(function(){
    $('li:nth-child(odd)').css('color','lightblue');
}) 

const fn = ()=>{ console.log('zpp');}