const createPet = (name, breed) => ({
    "petName": name,
    "breed": breed
})

const willow = createPet("Willow", "golden retriever")
const madmartigan = createPet("Madmartigan", "shih tzu")
const eloraDanan = createPet("Elora Danan", "aussie shepherd")

const BowWowKennels = []

BowWowKennels.push(willow, madmartigan, eloraDanan)
console.log(BowWowKennels);

