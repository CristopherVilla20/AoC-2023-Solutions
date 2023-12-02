import run from "aocrunner"

const parseInput = (rawInput: string) => rawInput

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput)
  const lista_lineas: string[] = input.split("\n")
  const game_cubes: string[][] = lista_lineas.map((ll) => {
    return ll.split(":")
  })
  const games: number[] = []
  game_cubes.map((gc, gc_i) => {
    let boleano = true
    gc[1].split(";").map((group_cube) => {
      group_cube.split(",").map((cubes_color) => {
        const num_color: string[] = cubes_color.split(" ")
        while (boleano) {
          if (num_color[2] == "red" && !(Number(num_color[1]) <= 12)) {
            boleano = false
          } else if (num_color[2] == "green" && !(Number(num_color[1]) <= 13)) {
            boleano = false
          } else if (num_color[2] == "blue" && !(Number(num_color[1]) <= 14)) {
            boleano = false
          }
          break
        }
      })
    })
    if (boleano) {
      console.log(gc_i + 1)
      games.push(gc_i + 1)
    }
  })
  return games.reduce((acc, val) => acc + val, 0)
}

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput)
  const lista_lineas: string[] = input.split("\n")
  const game_cubes: string[][] = lista_lineas.map((ll) => {
    return ll.split(":")
  })
  const mults: number[] = []
  game_cubes.map((gc, gc_i) => {
    let blues: number[] = []
    let greens: number[] = []
    let reds: number[] = []
    gc[1].split(";").map((group_cube) => {
      group_cube.split(",").map((cubes_color) => {
        const num_color: string[] = cubes_color.split(" ")
        if (num_color[2] == "red") {
          reds.push(Number(num_color[1]))
        } else if (num_color[2] == "green") {
          greens.push(Number(num_color[1]))
        } else if (num_color[2] == "blue") {
          blues.push(Number(num_color[1]))
        }
      })
    })
    let maxblue: number = Math.max(...blues)
    let maxgreen: number = Math.max(...greens)
    let maxred: number = Math.max(...reds)
    let mult: number = maxblue * maxgreen * maxred
    mults.push(mult)
  })
  return mults.reduce((acc, val) => acc + val, 0)
}

run({
  part1: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
})
