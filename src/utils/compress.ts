import { mapPayload, parseJSONSimple, stringifyJSONSimple } from "./payload"

export const encode = (data: NonMapPayload): string => {
  const payload = mapPayload(data)

  const mapped = btoa(
    `t${payload.title}|${payload.map.join(",")}|${stringifyJSONSimple(payload.items)}`
  )

  const unmapped = btoa(`f${payload.title}|${stringifyJSONSimple(data.items)}`)

  return mapped.length <= unmapped.length ? mapped : unmapped
}

export const decode = (encoded: string): NonMapPayload => {
  const decoded = atob(encoded)
  const type = decoded[0]

  if (type === "f") {
    const [title, itemsString] = decoded.slice(1).split("|")

    return {
      title,
      items: parseJSONSimple(itemsString) as Record<string, string>,
    }
  }

  if (type !== "t") {
    throw new Error(`Invalid payload type: ${type}`)
  }

  const [title, mapString, itemsString] = decoded.slice(1).split("|")

  const map = mapString.split(",")
  const items = parseJSONSimple(itemsString)

  return {
    title,
    items: Object.fromEntries(
      Object.entries(items).map(([key, value]) => [
        key,
        typeof value === "number" ? map[value] : value,
      ])
    ),
  }
}
