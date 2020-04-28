import { icon } from "@fortawesome/fontawesome-svg-core"

import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
  faLinkedinIn,
  faGithub,
  faGitlab,
} from "@fortawesome/free-brands-svg-icons"

const iconList = [faLinkedinIn, faGithub, faGitlab, faEnvelope]

const mapped = Object.fromEntries(
  iconList.map((item) => [
    `${item.prefix}-${item.iconName}`,
    icon(item).html[0],
  ])
)
export default mapped
