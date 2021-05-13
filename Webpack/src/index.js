import * as $ from 'jquery';
import Post from '@models/Post';
// import json from './assets/json'
// import xml from './assets/data.xml'
import WebpackLogo from './assets/webpack-logo';
import './styles/style.css';
import './styles/scss.scss';

const post = new Post('Webpack post title', WebpackLogo);

$('pre').addClass('code').html(post.toString());

// console.log('JSON', json);
// console.log('XML', xml);
