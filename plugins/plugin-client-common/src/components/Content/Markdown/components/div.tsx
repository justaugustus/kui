/*
 * Copyright 2021 The Kubernetes Authors
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

import React from 'react'
import { TextContent } from '@patternfly/react-core'

import SplitInjector from '../../../Views/Terminal/SplitInjector'
import SplitPosition from '../../../Views/Terminal/SplitPosition'

const ReactCommentary = React.lazy(() => import('../../Commentary').then(_ => ({ default: _.ReactCommentary })))

export default function div(uuid: string) {
  return (props: React.HTMLAttributes<HTMLDivElement>) => {
    const maximized = props['data-kui-maximized'] === 'true'
    const position = props['data-kui-split']
    const count = props['data-kui-split-count'] ? parseInt(props['data-kui-split-count'], 10) : undefined

    if (!position || (position === 'default' && count === 0 && !maximized)) {
      // don't create a split if a position wasn't indicated, or if
      // this is the first default-positioned section; if it is
      // maximized, we'll have to go through the injector path
      return <div data-is-maximized={maximized || undefined}>{props.children}</div>
    } else {
      // then we have a section that targets a given split position
      return (
        <SplitInjector.Consumer>
          {inject => {
            const node = (
              <ReactCommentary>
                <TextContent>
                  <div className="padding-content marked-content page-content" data-is-nested>
                    {props.children}
                  </div>
                </TextContent>
              </ReactCommentary>
            )

            setTimeout(() =>
              inject(
                uuid,
                node,
                (position + (position === 'default' ? '' : '-strip')) as SplitPosition,
                count,
                maximized
              )
            )
            return <React.Fragment />
          }}
        </SplitInjector.Consumer>
      )
    }
  }
}
