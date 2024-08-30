import type { VerticalNavItems } from '@layouts/types'
import adminMaster from './admin-master'
import dashboard from './dashboard'
import report from './report'
import routing from './routing'

export default [...dashboard, ...adminMaster, ...routing, ...report] as VerticalNavItems
