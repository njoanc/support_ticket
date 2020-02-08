"use strict";

/*
|--------------------------------------------------------------------------
| Database Seeder
|--------------------------------------------------------------------------
| Database Seeder can be used to seed dummy data to your application
| database. Here you can make use of Factories to create records.
|
| make use of Ace to generate a new seed
|   ./ace make:seed [name]
|
*/

const Factory = use('Factory')


class DatabaseSeeder {
  *run() {
    await Factory.model("App/Models/User").createMany(100);

  }
}

module.exports = DatabaseSeeder;
