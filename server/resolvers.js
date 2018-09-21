//import the Player model to create and retrieve data from the database.
const { Player } = require('./connectors');
const resolver = {
    Query: {
        players: () => {
            return Player.find({}, (err, players) => {
                if(err) throw err;
                return players.sort((playerA, playerB) => playerA.rank < playerB.rank)
            })
        },
        player: (_, args, context) => {
            if(args.rank && !args.name) Player.findOne({rank: args.rank}, (err, player) => {
                if(err) throw err;
                return player[0];
            });
            else if(!args.rank && args.name) Player.findOne({name: args.name}, (err, player) => {
                if(err) throw err;
                return player[0];
            })
            else Player.findOne({name: args.name, rank: args.rank}, (err, player) => {
                if(err) throw err;
                return player[0];
            })
        }
    },
    Mutation: {
        player: (_, args, context) => {
            const newPlayer = new Player({
                name: args.name,
                team: args.team,
                jerseyNumber: args.jerseyNumber,
                rank: args.rank
            });
            newPlayer.save();
            return newPlayer;
        }
    }
}

module.exports = resolver;