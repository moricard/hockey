var _ = require('underscore');


var defensemen = [
    ['p.k. subban' , 67, 'mtl'],
    ['duncan keith', 51, 'chi'],
    ['kristopher Letang', 68, 'pit'],
    ['erik karlsson', 70, 'ott'],
    ['Niklas Kronwall', 51, 'det'],
    ['Justin Schultz', 48, 'edm'],

    ['keith yandle', 50, 'phx'],
    ['dustin byfuglien', 52, 'win'],
    ['mark streit', 50, 'phi']
    ['shea Weber', 48, 'nsh'],
    ['Ryan Suter', 52, 'min'],
    ['mike green', 55, 'wsh'],

    ['Alex Pietrangelo', 49, 'stl'],
    ['Kimmo Timonen', 48, 'phi']
    ['Dion Phaneuf', 45, 'tor'],
    ['brian campbell', 42, 'flo'],
    ['Andrei Markov', 40, 'mtl'],
    ['Vyacheslav Voynov', 46, 'tpb'],
    ['Drew Doughty', 40, 'la']
];

var montreal = [
   // ['subban, p.k.', 67, 'mtl'],
   // ['price, carey', 79, 'mtl'],
   // ['pacioretty, max', 71, 'mtl'],
   // ['Plekanec, Tomas', 59, 'mtl'],

    ['alex Galchenyuk', 55, 'mtl'],
    ['Brendan Gallagher', 54, 'mtl'],
    ['Lars Eller', 55, 'mtl'],

    ['daniel briere', 49, 'mtl'],
    ['David Desharnais', 49, 'mtl'],
    ['Brian Gionta', 41, 'mtl'],
//    ['markov andrei', 40, 'mtl'],
    ['rene Bourque', 30, 'mtl']
];

var goalies = [
    ['carey price', 79, 'mtl'],
    ['henrik lundqvist', 88, 'ny'],
    ['jimmy howard', 86, 'det'],
    ['corey Crawford', 85, 'chi'],
    ['Tuukka Rask', 85, 'bos'],
    ['niklas Backstrom', 84, 'min'],
    ['Marc-Andre Fleury', 79, 'pit'],
    ['Roberto Luongo', 77, 'van']
];

var forwards = [
    ["Sidney Crosby", 109, "pit"], // (+10)

    ["Evgeni Malkin", 97, "pit"],  // (+5)
    ["Steven Stamkos", 96, "tb"],
    ["Alexander Ovechkin", 93, "was"],

    ["Ryan Getzlaf", 88, "ana"],
    ["Eric Staal", 87, "car"],        // 1st round (all forwards) (+3)
    ["John Tavares", 87, "nyi"],
    ["Martin St-Louis", 85, "tb"],
    ["Patrick Kane", 85, "chi"],
    ["Corey Perry", 84, "ana"],
    ["Claude Giroux", 84, "phi"],
    ["Nicklas Backstrom", 84, "was"], // 2nd round (all forwards) (+4)
    ["Taylor Hall", 84, "edm"],
    ["Phil Kessel", 83, "tor"],
    ["Henrik Sedin", 82, "van"],

    ["Pavel Datsyuk", 81, "det"],
    ["Jonathan Toews", 81, "chi"],
    ["Rick Nash", 80, "nyr"],         // 3rd round (all forwards) (+6)
    ["Henrik Zetterberg", 79, "det"],
    ["Anze Kopitar", 77, "la"],
    ["Daniel Sedin", 77, "van"],
    ["Jason Spezza", 76, "ott"],
    ["Thomas Vanek", 75, "buf"],

    ["Alexander Semin", 74, "car"],  // 4th round (all forwards) (+3)
    ["Jakub Voracek", 74, "phi"],
    ["James Neal", 74, "pit"],
    ["Matt Duchene", 73, "col"],
    ["Joe Thornton", 72, "sj"],
    ["Logan Couture", 72, "sj"],
    ["Zach Parise", 71, "min"],      // 5th round (all forwards) (+1)
    ["Max Pacioretty", 71, "mtl"],
    ["Jordan Eberle", 71, "edm"],
    ["Chris Kunitz", 70, "pit"],
    ["Matt Moulson", 70, "nyi"],
    ["Derek Stepan", 70, "nyr"],
    ["Nazem Kadri", 70, "tor"],      // 6th round (all forwards) (+4)
    ["Mike Ribeiro", 69, "pho"],
    ["Pierre-A Parenteau", 68, "col"],

    ["Mikko Koivu", 67, "min"],
    ["Bobby Ryan", 67, "ott"],
    ["Jamie Benn", 67, "dal"],
    ["Blake Wheeler", 66, "win"],    // 7th round (all forwards) (+3)
    ["David Krejci", 66, "bos"],
    ["Joffrey Lupul", 65, "tor"],
    ["Ryan Kesler", 64, "van"],
    ["Radim Vrbata", 64, "pho"],
    ["Teddy Purcell", 64, "tb"],
    ["Andrew Ladd", 63, "win"],      // 8th round (all forwards) (+2)
    ["Jarome Iginla", 63, "bos"],
    ["Jason Pominville", 63, "min"],
    ["Cody Hodgson", 63, "buf"],
    ["Pascal Dupuis", 62, "pit"],
    ["Vincent Lecavalier", 62, "phi"],
    ["Brad Marchand", 62, "bos"],    // 9th round (all forwards) (+2)
    ["Tyler Seguin", 62, "dal"],
    ["Jonathan Huberdeau", 62, "fla"],
    ["Nail Yakupov", 62, "edm"],
    ["Loui Eriksson", 61, "bos"],

    ["Patrice Bergeron", 60, "bos"],
    ["James van Riemsdyk", 60, "tor"], // 10th round (all forwards) (+1)
    ["Evander Kane", 60, "win"],
    ["Patrick Marleau", 59, "sj"],
    ["Tomas Plekanec", 59, "mtl"],
    ["Derek Roy", 59, "stl"],
    ["Ryan O'Reilly", 59, "col"],
    ["Nathan MacKinnon", 59, "col"],  // 11th
    ["Brad Richards", 58, "nyr"],
    ["Mike Richards", 58, "la"],
    ["Derick Brassard", 58, "nyr"],
    ["Chris Stewart", 58, "stl"],
    ["Tyler Ennis", 58, "buf"],
    ["Tomas Fleischmann", 57, "fla"], //12th
    ["Marian Hossa", 57, "chi"],
    ["Brent Burns", 57, "sj"],
    ["Patrik Elias", 57, "nj"],
    ["Patrick Sharp", 57, "chi"],
    ["Joe Pavelski", 57, "sj"],
    ["Ryan Callahan", 57, "nyr"],    //13th
    ["Marcus Johansson", 57, "was"],
    ["Ryan Nugent-Hopkins", 57, "edm"],
    ["Paul Stastny", 55, "col"],
    ["Jeff Skinner", 51, "car"],
    ["Brian Campbell", 42, "fla"],
    ["Marian Gaborik", 56, "cbj"]
];

var allPlayers = forwards.concat( goalies ).concat( montreal ).concat( defensemen );

var mixins = {};

mixins.player = function( name ) {
  return _.find( allPlayers, function( player ) { return player && (player[0].toLowerCase().indexOf( name.toLowerCase() ) !== -1); });
};

mixins.best12 = function( players ) {
  return _.reduce( _.sortBy(players, function(player) { return -player[1]; }).splice(0,12),
                   function(memo, player) { return memo + player[1]; }, 0);
};
_.mixin( mixins );

var carlos = [
  _.player('Crosby'),
  _.player('Kessel'),
  _.player('Nicklas Backstrom'),
  _.player('Carey Price'),
  _.player('Markov'),
  _.player('Kopitar'),
  _.player('Mike Green'),
  _.player('Zach Parise'),
  _.player('Pietrangelo'),
  _.player('Jamie Benn'),
  _.player('Jeff Skinner'),
  _.player('Patrick Sharp'),
  _.player('Blake Wheeler'),
  _.player('Pominville')
];

var marco = [
  _.player('subban'),
  _.player('getzlaf'),
  _.player('duncan keith'),
  _.player('corey perry'),
  _.player('plekanec'),
  _.player('datsyuk'),
  _.player('zetterberg'),
  _.player('vanek'),
  _.player('semin'),
  _.player('voracek'),
  _.player('kunitz'),
  _.player('kadri'),
  _.player('howard'),
  _.player('schultz')
];

var jf = [
    _.player('St-Louis'),
    _.player('Letang'),
    _.player('Henrik Sedin'),
    _.player('Daniel Sedin'),
    _.player('Luongo'),
    _.player('Rick Nash'),
    _.player('byfuglien'),
    _.player('Lars Eller'),
    _.player('Joe Thornton'),
    _.player('Brad Richards'),
    _.player('mark streit'),
    _.player('Paul Stastny'),
    _.player('Iginla'),
    _.player('rene Bourque')
];

var jp = [
    _.player('Ovechkin'),
    _.player('karlsson'),
    _.player('taylor hall'),
    _.player('Jonathan Toews'),
    _.player('Daniel Briere'),
    _.player('eric staal'),
    _.player('Desharnais'),
    _.player('Brian Campbell'),
    _.player('Crawford'),
    _.player('moulson'),
    _.player('Ribeiro'),
    _.player('Huberdeau'),
    _.player('CHARA'),
    _.player('Hossa')
];

var jose = [
    _.player('Stamkos'),
    _.player('kane'),
    _.player('rask'),
    _.player('james neal'),
    _.player('Galchenyuk'),
    _.player('Eberle'),
    _.player('Gallagher'),
    _.player('Krejci'),
    _.player('Duchene'),
    _.player('Couture'),
    _.player('EDLER'),
    _.player('suter'),
    _.player('Kronwall'),
    _.player('yakupov')
];

var fred = [
    _.player('Malkin'),
    _.player('Tavares'),
    _.player('Giroux'),
    _.player('Pacioretty'),
    _.player('Weber'),
    _.player('Spezza'),
    _.player('yandle'),
    _.player('Gionta'),
    _.player('lundqvist'),
    _.player('tyler Seguin'),
    _.player('bobby Ryan'),
    _.player('Loui Eriksson'),
    _.player('Drew Doughty'),
    _.player('GABORIK')
];
var probabilities = {

};

module.exports = {
  montreal: montreal,
  defensemen: defensemen,
  forwards: forwards,
  goalies: goalies,
  contestants: {
    carlos: carlos,
    marco: marco,
      jp: jp,
      jf: jf,
      fred: fred,
      jose: jose
  }
};
