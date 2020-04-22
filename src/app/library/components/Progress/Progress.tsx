import React, { useMemo } from 'react'
import { ProgressCircle } from './components/Circle/ProgressCircle'
import { ProgressLinear } from './components/Linear/ProgressLinear'
import { ProgressProps } from './Progress.props'
import { RADIUS, STROKE_WIDTH, COLOR_BG, COLOR_FG } from './components/Circle/Constant'


export const Progress = (props: ProgressProps) => {
    const { type, strokeWidth = STROKE_WIDTH, textProgressStyle = {}, showTextProgress = true, bg = COLOR_BG, fg = COLOR_FG, radius = RADIUS, progress = 0 } = props
    return useMemo(() =>
        type === 'linear' ? <ProgressLinear {...props} /> : <ProgressCircle {...{ progress, textProgressStyle, showTextProgress, bg, fg, radius, strokeWidth }} />
        , [props])
}