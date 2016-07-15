/**
 * Development environment settings
 *
 * This file can include shared settings for a development team,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {

  /***************************************************************************
   * Set the default database connection for models in the development       *
   * environment (see config/connections.js and config/models.js )           *
   ***************************************************************************/

  // models: {
  //   connection: 'someMongodbServer'
  // }


  connections: {
    localMongodbServer: {
      adapter: 'sails-mongo',
      //host: 'ds064718.mlab.com',
      //port: 64718,
      //user: 'isma',
      //password: 'isma',
      //database: 'swarmy2'
      url: "mongodb://isma:isma@ds025180.mlab.com:25180/swarmydb"
    }
  },

  session: {
    adapter: 'mongo',
    url: "mongodb://isma:isma@ds025180.mlab.com:25180/swarmydb",
    collection: 'sessions'
  }

};
