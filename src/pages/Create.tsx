import { useMemo, useState } from "react"
import { Link } from "react-router"
import PageShell from "../components/PageShell"
import { linkMap } from "../utils/maps"
import { encode } from "../utils/compress"
import Display from "../components/Display"

type Row = { type: string; key: string; value: string }

const mappedItems = Object.entries(linkMap).filter(([key]) => key !== "big")

const Create = () => {
  const [title, setTitle] = useState("My links")
  const [rows, setRows] = useState<Row[]>([
    { type: "ig", key: "", value: "ihopethisguydoesntexsist" },
    { type: "ws", key: "", value: "vrtxx.uk" },
  ])
  const [copied, setCopied] = useState(false)
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null)

  const payload = useMemo(
    () => ({
      title: title.trim() || "Untitled",
      items: Object.fromEntries(
        rows
          .filter((row) => (row.type === "custom" ? row.key : row.type).trim() && row.value.trim())
          .map((row) => [(row.type === "custom" ? row.key : row.type).trim(), row.value.trim()])
      ),
    }),
    [rows, title]
  )

  const encoded = useMemo(() => encode(payload), [payload])
  const shareUrl = `${window.location.origin}/${encoded}`

  const updateRow = (index: number, changes: Partial<Row>) =>
    setRows((current) =>
      current.map((row, rowIndex) => (rowIndex === index ? { ...row, ...changes } : row))
    )

  const selectType = (index: number, type: string) =>
    updateRow(index, {
      type: linkMap[type] ? type : "custom",
      key: type === "custom" || !linkMap[type] ? "" : type,
    })

  const moveRow = (from: number, to: number) => {
    if (from === to) return

    setRows((current) => {
      const next = [...current]
      const [moved] = next.splice(from, 1)
      next.splice(to, 0, moved)
      return next
    })
  }

  const copyLink = async () => {
    await navigator.clipboard.writeText(shareUrl)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <PageShell>
      <main className="mx-auto max-w-6xl px-6 pt-12 pb-20 lg:px-8 lg:pt-16">
        <div className="mb-10">
          <Link to="/" className="theme-muted text-sm transition-colors">
            ← Back home
          </Link>

          <h1 className="mt-7 text-4xl font-semibold tracking-[-0.06em] sm:text-5xl">
            Create your page.
          </h1>

          <p className="theme-muted mt-3 text-base">
            Give your data a title, add a few details, and share the result.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_.8fr] lg:items-start">
          <section className="theme-surface theme-line rounded-2xl border p-5 shadow-sm sm:p-7">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="theme-faint text-xs font-medium tracking-[0.16em] uppercase">
                  Page details
                </p>

                <p className="theme-muted mt-1 text-sm">
                  Choose a known site or add your own link.
                </p>
              </div>
            </div>

            <label className="block text-sm font-medium">
              Title
              <input
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="e.g. Alex's links"
                className="theme-input mt-2 w-full rounded-xl border px-4 py-3 transition-colors outline-none"
              />
            </label>

            <div className="mt-7 flex items-end justify-between">
              <div>
                <p className="text-sm font-medium">Items</p>

                <p className="theme-faint mt-1 text-xs">Drag items to change their order.</p>
              </div>

              <button
                type="button"
                onClick={() =>
                  setRows((current) => [...current, { type: "custom", key: "", value: "" }])
                }
                className="theme-button-secondary rounded-full border px-3 py-1.5 text-xs font-medium transition-colors"
              >
                + Add item
              </button>
            </div>

            <div className="mt-4 space-y-4">
              {rows.map((row, index) => {
                const mappedItem = linkMap[row.type]
                const isCustom = !mappedItem

                return (
                  <div
                    key={index}
                    draggable
                    onDragStart={() => setDraggedIndex(index)}
                    onDragOver={(event) => {
                      event.preventDefault()
                    }}
                    onDrop={(event) => {
                      event.preventDefault()

                      if (draggedIndex !== null) {
                        moveRow(draggedIndex, index)
                      }

                      setDraggedIndex(null)
                    }}
                    onDragEnd={() => setDraggedIndex(null)}
                    className={[
                      "theme-line rounded-xl border p-3 transition-all",
                      draggedIndex === index ? "scale-[0.98] opacity-50" : "opacity-100",
                    ].join(" ")}
                  >
                    <div className="flex gap-2">
                      <button
                        type="button"
                        aria-label={`Drag item ${index + 1}`}
                        className="theme-ghost cursor-grab touch-none px-1 text-lg active:cursor-grabbing"
                        title="Drag to reorder"
                        onMouseDown={(event) => event.stopPropagation()}
                      >
                        ⋮⋮
                      </button>

                      <select
                        aria-label={`Item ${index + 1} type`}
                        value={isCustom ? "custom" : row.type}
                        onChange={(event) => selectType(index, event.target.value)}
                        className="theme-input min-w-0 flex-1 rounded-lg border px-3 py-2.5 text-sm outline-none"
                      >
                        <option value="custom">Custom link</option>

                        {mappedItems.map(([key, item]) => (
                          <option key={key} value={key}>
                            {item.title}
                          </option>
                        ))}
                      </select>

                      {rows.length > 1 && (
                        <button
                          type="button"
                          aria-label={`Remove item ${index + 1}`}
                          onClick={() =>
                            setRows((current) =>
                              current.filter((_, rowIndex) => rowIndex !== index)
                            )
                          }
                          className="theme-ghost px-1 text-lg transition-colors"
                        >
                          ×
                        </button>
                      )}
                    </div>

                    <div className="mt-2 flex gap-2">
                      {isCustom && (
                        <input
                          aria-label={`Item ${index + 1} label`}
                          value={row.key}
                          onChange={(event) => updateRow(index, { key: event.target.value })}
                          placeholder="Label"
                          className="theme-input w-[36%] rounded-lg border px-3 py-2.5 text-sm outline-none"
                        />
                      )}

                      <input
                        aria-label={`Item ${index + 1} value`}
                        value={row.value}
                        onChange={(event) => updateRow(index, { value: event.target.value })}
                        placeholder={isCustom ? "https://..." : "Username or ID"}
                        className="theme-input min-w-0 flex-1 rounded-lg border px-3 py-2.5 text-sm outline-none"
                      />
                    </div>

                    {mappedItem && (
                      <p className="theme-faint mt-2 text-xs">
                        {mappedItem.value.replace("[value]", row.value || "your-value")}
                      </p>
                    )}
                  </div>
                )
              })}
            </div>
          </section>

          <aside className="lg:sticky lg:top-6">
            <Display data={payload} />

            <div className="mt-3 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={copyLink}
                className="theme-button rounded-xl px-4 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5"
              >
                {copied ? "Copied!" : "Copy link"}
              </button>

              <button
                type="button"
                className="theme-button-secondary rounded-xl border px-4 py-3 text-sm font-medium transition-colors"
              >
                <a href={shareUrl} target="_blank" rel="noopener noreferrer">
                  Open Link
                </a>
              </button>
            </div>

            <p className="theme-faint mt-3 text-center text-xs leading-5">
              Anyone with the link can view this page.
            </p>
          </aside>
        </div>
      </main>
    </PageShell>
  )
}

export default Create
