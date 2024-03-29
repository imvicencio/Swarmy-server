/**
 * Chat.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

 module.exports = {

   attributes: {
     user: {
       type: 'string',
       required: true
     },
     message: {
       type: 'string',
       required: true
     },
     time: {
       type: 'datetime',
       required: false
     },
     comunidad: {
       type: 'string',
       required: true
     }
   }
 };
