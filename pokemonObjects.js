function Pokemon(NAME, TYPE, HP, ATK, DEF, LEG) {
    this.NAME = NAME
    this.TYPE = TYPE
    this.HP = HP
    this.ATK = ATK
    this.DEF = DEF
    this.LEG = LEG
}

var kyogre = new Pokemon("Kyogre", "Water", 100, 100, 90, true)
var pikachu = new Pokemon("Pikichu", "Electric", 35, 55, 40, false)
var swampert = new Pokemon("Swampert", "Water", 100, 110, 90, false)
var mewtwo = new Pokemon("Mewtwo", "Psychic", 106, 110, 90, true)
var breloom = new Pokemon("Breloom", "Grass", 60, 130, 80, false)
var charizard = new Pokemon("Charizard", "Fire", 78, 84, 78, false)
