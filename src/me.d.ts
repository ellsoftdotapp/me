interface BasePayload {
  title: string
}

type MapPayload = BasePayload & {
  map: string[]
  items: Record<string, number | string>
}

type NonMapPayload = BasePayload & {
  items: Record<string, string>
}

type ItemMap = Record<
  string,
  {
    title: string
    value: string
    icon: IconType | LucideIcon
  }
>
