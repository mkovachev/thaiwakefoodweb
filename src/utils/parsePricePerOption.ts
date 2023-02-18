interface Options {
  [key: string]: number
}

export const parseOptionsWithPrice = (options: string[], prices: number[]) => {
  const optionsWithPrice = options.reduce((res, item, index) => {
    res[item] = prices[index]
    return res
  }, {} as Options)

  return optionsWithPrice
}