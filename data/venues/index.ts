import { sortVenues } from "@/lib/venues/sort-venues"
import type { Venue } from "@/lib/venues/types"

import { venue as ace } from "./ace"
import { venue as aies } from "./aies"
import { venue as asonam } from "./asonam"
import { venue as bcs_hci } from "./bcs-hci"
import { venue as chi } from "./chi"
import { venue as chi_play } from "./chi-play"
import { venue as citsm } from "./citsm"
import { venue as compass } from "./compass"
import { venue as cscw } from "./cscw"
import { venue as cui } from "./cui"
import { venue as dis } from "./dis"
import { venue as facct } from "./facct"
import { venue as goodit } from "./goodit"
import { venue as ht } from "./ht"
import { venue as i_user } from "./i-user"
import { venue as ictd } from "./ictd"
import { venue as icwsm } from "./icwsm"
import { venue as idc } from "./idc"
import { venue as ieee_vrw } from "./ieee-vrw"
import { venue as imx } from "./imx"
import { venue as iss } from "./iss"
import { venue as iui } from "./iui"
import { venue as mobisys } from "./mobisys"
import { venue as muc } from "./muc"
import { venue as nordichi } from "./nordichi"
import { venue as ozchi } from "./ozchi"
import { venue as sigdoc } from "./sigdoc"
import { venue as siggraph } from "./siggraph"
import { venue as smsociety } from "./smsociety"
import { venue as soups } from "./soups"
import { venue as sui } from "./sui"
import { venue as tei } from "./tei"
import { venue as ubicomp } from "./ubicomp"
import { venue as uist } from "./uist"
import { venue as vrst } from "./vrst"
import { venue as www } from "./www"

const allVenues: Venue[] = [
  i_user,
  citsm,
  ieee_vrw,
  chi,
  cscw,
  dis,
  nordichi,
  ubicomp,
  imx,
  chi_play,
  idc,
  tei,
  siggraph,
  sigdoc,
  compass,
  goodit,
  ht,
  ace,
  muc,
  smsociety,
  asonam,
  aies,
  facct,
  ozchi,
  uist,
  mobisys,
  cui,
  ictd,
  soups,
  sui,
  www,
  icwsm,
  bcs_hci,
  iss,
  iui,
  vrst,
]

export const venues: Venue[] = sortVenues(allVenues)
