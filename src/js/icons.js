import { icon } from "@fortawesome/fontawesome-svg-core"

import {
  faBars,
  faAdjust,
  faArrowCircleLeft,
} from "@fortawesome/free-solid-svg-icons"
import {
  faLinkedinIn,
  faGithub,
  faGitlab,
} from "@fortawesome/free-brands-svg-icons"

const iconList = [
  faLinkedinIn,
  faGithub,
  faGitlab,
  faBars,
  faAdjust,
  faArrowCircleLeft,
]

export const icons = Object.fromEntries(
  iconList.map((item) => [
    `${item.prefix}-${item.iconName}`,
    icon(item).html[0],
  ])
)

export const getIcon = (name) => icons[name]
