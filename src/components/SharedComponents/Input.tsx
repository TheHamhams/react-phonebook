import React, {forwardRef} from 'react'
import { TextField } from '@material-ui/core'
import { editableInputTypes } from '@testing-library/user-event/dist/utils'

interface inputType{
    name: string,
    placeholder: string
}

export const Input = forwardRef((props: inputType, ref) => {
  return (
        <TextField variant='outlined' margin='normal' inputRef={ref} fullWidth type='text' {...props}>
            
        </TextField>
  )
})
