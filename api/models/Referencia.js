/**
 * Referencia.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

 module.exports = {

   attributes: {
     nombre: {
       type: 'string',
       required: true
     },
     descripcion: {
       type: 'string',
       required: true
     },
     horario: {
       type: 'string',
       required: true
     },
     contacto: {
       type: 'string',
       required: true
     },
     nota: {
       type: 'integer',
       required: true
     },
     time: {
       type: 'datetime',
       required: true
     },
     id_mapa_ref: {
       model: 'mapa',
       required: true
     }
   }
 };
