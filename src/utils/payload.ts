export function mapPayload(data: NonMapPayload): MapPayload {
  const counts = countValues(Object.values(data.items))

  const map = [...counts.entries()]
    .filter(([, count]) => count >= 2)
    .map(([value]) => value as string)

  const mapIndexes = new Map(map.map((value, index) => [value, index]))

  const items = Object.fromEntries(
    (Object.entries(data.items) as [string, string][]).map(([key, value]) => {
      const index = mapIndexes.get(value)

      return [key, index ?? value]
    })
  )

  return {
    ...data,
    map,
    items,
  }
}

export const stringifyJSONSimple = (data: Record<string, string | number>): string =>
  Object.entries(data)
    .map(([k, v]) => `${k}:${v}`)
    .join(",")

export const parseJSONSimple = (data: string): Record<string, string | number> =>
  Object.fromEntries(
    data.split(",").map((entry) => {
      const [key, ...value] = entry.split(":")
      const rawValue = value.join(":")
      const parsedValue = Number(rawValue)

      return [key, Number.isNaN(parsedValue) ? rawValue : parsedValue]
    })
  )

export function countValues<T>(arr: T[]): Map<T, number> {
  return arr.reduce((counts, value) => {
    counts.set(value, (counts.get(value) ?? 0) + 1)
    return counts
  }, new Map<T, number>())
}
