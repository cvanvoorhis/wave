// Copyright 2020 H2O.ai, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as Fluent from '@fluentui/react'
import { B, S } from 'h2o-wave'
import React from 'react'
import { bond } from './ui'

/**
 * Create a hyperlink.
 *
 * Hyperlinks can be internal or external.
 * Internal hyperlinks have paths that begin with a `/` and point to URLs within the Wave UI.
 * All other kinds of paths are treated as external hyperlinks.
 */
export interface Link {
  /** The text to be displayed. If blank, the `path` is used as the label. */
  label?: S
  /** The path or URL to link to. */
  path?: S
  /** True if the link should be disabled. */
  disabled?: B
  /** True if the link should prompt the user to save the linked URL instead of navigating to it. Works only if `button` is false. */
  download?: B
  /** True if the link should be rendered as a button. */
  button?: B
  /** True if the component should be visible. Defaults to true. */
  visible?: B
  /** Where to display the link. Setting this to an empty string or `'_blank'` opens the link in a new tab or window. */
  target?: S
  /** An optional tooltip message displayed when a user clicks the help icon to the right of the component. */
  tooltip?: S
  /** An identifying name for this component. */
  name?: S
}

export const
  XLink = bond(({ model: { name, label, disabled, path, download, target, button } }: { model: Link }) => {
    const
      _label = label || path,
      _target = target === '' ? '_blank' : target,
      onBtnClick = () => window.open(path, _target),
      onLinkClick = (ev: React.MouseEvent<HTMLAnchorElement>) => {
        // HACK: Perform download in a new tab because FF drops WS connection - https://bugzilla.mozilla.org/show_bug.cgi?id=858538.
        if (download && path) {
          ev.preventDefault()
          window.open(path, '_blank')
        }
      },
      render = () => (
        button
          ? <Fluent.DefaultButton data-test={name} text={_label} disabled={disabled} onClick={onBtnClick} />
          : <Fluent.Link onClick={onLinkClick} data-test={name} href={path} disabled={disabled} target={_target}>{_label}</Fluent.Link>
      )
    return { render }
  })