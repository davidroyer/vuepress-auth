/* eslint-disable no-console */
import GoTrue from 'gotrue-js'
import Vue from 'vue'

console.log('FROM NEW AUTH');

export const auth = new GoTrue({
  APIUrl: 'https://vuepress-auth.netlify.com/.netlify/identity',
  audience: '',
  setCookie: true
})

