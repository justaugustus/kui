/*
 * Copyright 2020 The Kubernetes Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { ReactElement, ReactNode } from 'react'

type Props = {
  className?: string
  maxWidth?: string
  minWidth?: string
  distance?: number
  hasNoPadding?: boolean
  hasAutoWidth?: boolean
  triggerClassName?: string
  position?: 'top' | 'top-start' | 'top-end' | 'bottom' | 'left' | 'right' | 'auto'

  headerContent: ReactNode
  bodyContent: ReactNode
  footerContent?: ReactNode
  children: ReactElement

  onShow?: () => void
  onHide?: () => void
}

export default Props
