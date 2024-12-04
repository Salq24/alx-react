import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button id="btn">Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

let cnt = 0;

function updateCounter() {
    cnt += 1;
    $('#count').html(`${cnt} clicks on the button`);
};

$('#btn').on('click', _.debounce(updateCounter, 500));
