Messages = new Mongo.Collection('messages');

  Messages.allow({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });
