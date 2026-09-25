import {
  SiBehance,
  SiBluesky,
  SiBuymeacoffee,
  SiDiscord,
  SiDribbble,
  SiFacebook,
  SiGithub,
  SiGitlab,
  SiInstagram,
  SiLinktree,
  SiMedium,
  SiPatreon,
  SiReddit,
  SiSpotify,
  SiSubstack,
  SiTelegram,
  SiThreads,
  SiTiktok,
  SiTwitch,
  SiX,
  SiYoutube,
} from "@icons-pack/react-simple-icons"
import { GlobeIcon } from "lucide-react"

export const badgeMap: ItemMap = {
  big: {
    title: "Instagram",
    value: "https://instagram.com/[value]",
    icon: SiInstagram,
  },
  ig: {
    title: "Instagram",
    value: "https://instagram.com/[value]",
    icon: SiInstagram,
  },
  x: { title: "X", value: "https://x.com/[value]", icon: SiX },
  yt: {
    title: "YouTube",
    value: "https://youtube.com/@[value]",
    icon: SiYoutube,
  },
  tt: { title: "TikTok", value: "https://tiktok.com/@[value]", icon: SiTiktok },
  th: {
    title: "Threads",
    value: "https://threads.net/@[value]",
    icon: SiThreads,
  },
  fb: {
    title: "Facebook",
    value: "https://facebook.com/[value]",
    icon: SiFacebook,
  },
  dc: {
    title: "Discord",
    value: "https://discord.com/users/[value]",
    icon: SiDiscord,
  },
  sp: {
    title: "Spotify",
    value: "https://open.spotify.com/user/[value]",
    icon: SiSpotify,
  },
  tw: { title: "Twitch", value: "https://twitch.tv/[value]", icon: SiTwitch },
  rd: {
    title: "Reddit",
    value: "https://reddit.com/u/[value]",
    icon: SiReddit,
  },
  tg: { title: "Telegram", value: "https://t.me/[value]", icon: SiTelegram },
  bs: {
    title: "Bluesky",
    value: "https://bsky.app/profile/[value]",
    icon: SiBluesky,
  },
}

export const linkMap: ItemMap = {
  ...badgeMap,
  li: {
    title: "LinkedIn",
    value: "https://linkedin.com/in/[value]",
    icon: SiGithub,
  },
  gl: { title: "GitLab", value: "https://gitlab.com/[value]", icon: SiGitlab },
  gh: { title: "GitHub", value: "https://github.com/[value]", icon: SiGithub },
  be: {
    title: "Behance",
    value: "https://behance.net/[value]",
    icon: SiBehance,
  },
  dr: {
    title: "Dribbble",
    value: "https://dribbble.com/[value]",
    icon: SiDribbble,
  },
  md: { title: "Medium", value: "https://medium.com/@[value]", icon: SiMedium },
  lt: {
    title: "Linktree",
    value: "https://linktr.ee/[value]",
    icon: SiLinktree,
  },
  sb: {
    title: "Substack",
    value: "https://[value].substack.com",
    icon: SiSubstack,
  },
  pt: {
    title: "Patreon",
    value: "https://patreon.com/[value]",
    icon: SiPatreon,
  },
  bc: {
    title: "Buy Me a Coffee",
    value: "https://buymeacoffee.com/[value]",
    icon: SiBuymeacoffee,
  },
  ws: {
    title: "Website",
    value: "https://[value]",
    icon: GlobeIcon,
  },
}
