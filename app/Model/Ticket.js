"use strict";

const Lucid = use("Lucid");

class Ticket extends Lucid {
  category() {
    return this.belongsTo("App/Model/Category");
  }
}

module.exports = Ticket;
