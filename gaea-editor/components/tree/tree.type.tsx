import * as React from 'react'
import * as EditorManager from '../../../gaea-editor-manager/gaea-editor-manager'
import TreeAction from './action'

export interface PropsDefine {
    ViewportStore?: EditorManager.ViewportStore
    ApplicationStore?: EditorManager.ApplicationStore
    ViewportAction?: EditorManager.ViewportAction
    TreeAction?: TreeAction
}

export class Props implements PropsDefine {

}

export interface StateDefine {

}

export class State implements StateDefine {

}