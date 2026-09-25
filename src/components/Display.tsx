import { badgeMap, linkMap } from "../utils/maps"

const Display = ({ data }: { data: NonMapPayload }) => {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="theme-glow absolute -inset-3 hidden rounded-[2rem] blur-2xl md:block" />

      <div className="theme-surface md:theme-line relative min-h-screen overflow-hidden p-5 md:min-h-0 md:rounded-[1.6rem] md:border md:shadow-xl">
        <div className="px-3 pb-4">
          <div className="theme-ghost mb-3 h-2 w-14 rounded-full" />

          <div className="theme-ink h-8 w-64 max-w-full rounded-lg text-2xl">{data.title}</div>

          <div className="theme-ghost mb-3 h-2 w-14 rounded-full" />
        </div>
        <div className="flex justify-center gap-3">
          {Object.entries(data.items)
            .filter(([key]) => badgeMap[key])
            .map(([key, value]) => [
              badgeMap[key].value.replace("[value]", value as string),
              badgeMap[key].icon,
            ])
            .map(([link, Icon]) => (
              <a
                key={Icon}
                href={link as string}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={Icon}
                className="transition-opacity hover:opacity-80"
              >
                <Icon />
              </a>
            ))}
        </div>
        <div className="mt-3 grid gap-2">
          {Object.entries(data.items)
            .filter(([key]) => !badgeMap[key])
            .map(([key, value]) =>
              linkMap[key]
                ? [
                    linkMap[key].title,
                    linkMap[key].value.replace("[value]", value as string),
                    linkMap[key].icon,
                  ]
                : [key, value]
            )
            .map(([item, value, Icon]) => (
              <div
                key={item}
                className="theme-line flex items-center justify-between rounded-xl border p-4"
              >
                <a
                  href={value as string}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center gap-3"
                >
                  {Icon && <Icon className="h-8 w-8" />}

                  <div className="flex flex-col">
                    <span className="font-medium">{item}</span>
                  </div>

                  <div className="mx-auto" />

                  <span className="theme-ghost">↗</span>
                </a>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Display
