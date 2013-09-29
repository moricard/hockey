var _ = require('underscore');

var defensemen = [
    ['subban, p.k.' , 67, 'mtl'],
    ['duncan, keith', 51, 'chi'],
    ['Letang, kristopher', 68, 'pit'],
    ['karlsson, erik', 70, 'ott'],
    ['Kronwall, Niklas', 51, 'det'],
    ['Schultz, Justin', 48, 'edm'],

    ['yandle, keith', 50, 'phx'],
    ['byfuglien, dustin', 52, 'win'],
    ['streit, mark', 50, 'phi']
    ['Weber, shea', 48, 'nsh'],
    ['Suter, Ryan', 52, 'min'],
    ['green, mike', 55, 'wsh'],

    ['Pietrangelo, Alex', 49, 'stl'],
    ['Timonen, Kimmo', 48, 'phi']
    ['Phaneuf, Dion', 45, 'tor'],
    ['campbell, brian', 42, 'flo'],
    ['Markov, Andrei', 40, 'mtl'],
    ['Voynov, Vyacheslav', 46, 'tpb']
];

var montreal = [
    ['subban, p.k.', 67, 'mtl'],
    ['price, carey', 79, 'mtl'],
    ['pacioretty, max', 71, 'mtl'],
    ['Plekanec, Tomas', 59, 'mtl'],

    ['Galchenyuk, alex', 55, 'mtl'],
    ['Gallagher, Brendan', 54, 'mtl'],
    ['Eller, Lars', 55, 'mtl'],
    ['Ryder, michael', 52, 'mtl'],

    ['Desharnais, David', 49, 'mtl'],
    ['Gionta, Brian', 41, 'mtl'],
    ['markov, andrei', 40, 'mtl'],
    ['Bourque, rene', 30, 'mtl']
];

var goalies = [
    ['price, carey', 79, 'mtl'],
    ['lundqvist, henrik', 88, 'ny'],
    ['howard, jimmy', 86, 'det'],
    ['Crawford, corey', 85, 'chi'],
    ['Rask, Tuukka', 85, 'bos'],
    ['Backstrom, niklas', 84, 'min'],
    ['Fleury, Marc-Andre', 79, 'pit']
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
    ["Ryan Nugent-Hopkins", 57, "edm"]
];



var probabilities = {

};









module.exports = {
    montreal: montreal,
    defensemen: defensemen,
    forwards: forwards,
    goalies: goalies
};
