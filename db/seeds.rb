user1 = User.create(username: "Chronx", age: 30)
user2 = User.create(username: "Juggernaut", age: 23)
user3 = User.create(username: "CantTouchThis", age: 28)
user4 = User.create(username: "FauxHaux", age: 21)
user5 = User.create(username: "Vanquisher", age: 20)

game1 = Game.create(title: "Final Fantasy VII Remake", year: 2020, genre: "RPG", user_id: 1)
game2 = Game.create(title: "Call of Duty: Vanguard", year: 2021, genre: "FPS", user_id: 2)
game3 = Game.create(title: "DOTA 2", year: 2013, genre: "MOBA", user_id: 3)
game4 = Game.create(title: "League of Legends", year: 2009, genre: "MOBA", user_id: 3)
game5 = Game.create(title: "Super Smash Bros. Ultimate", year: 2018, genre: "Fighting", user_id: 4)
game6 = Game.create(title: "Oxenfree", year: 2017, genre: "Adventure", user_id: 4)
game7 = Game.create(title: "Horizon Zero Dawn", year: 2017, genre: "ARPG", user_id: 5)
game8 = Game.create(title: "Resident Evil 2 Remake", year: 2019, genre: "Survival Horror", user_id: 5)