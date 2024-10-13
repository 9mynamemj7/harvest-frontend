const number2wonFommater = (number: number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export {
  number2wonFommater
}