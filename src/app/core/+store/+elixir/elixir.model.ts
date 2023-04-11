export interface Elixir {
  characteristics: string,
  difficulty: string,
  effect: string,
  id: string,
  ingredients: Ingredients[],
  inventors: Inventors[],
  manufacturer: string,
  name: string,
  sideEffects: string,
  time: string,
}
  
export interface Ingredients {
  id: string,
  name: string,
}
  
export interface Inventors {
  id: string,
  firstName: string,
  lastName: string,
}
  
