import React from 'react'
import { makeStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import Digits from '../../assets/images/digitalogo.png'


export const Navbar = () => {

  const useStyles = makeStyles({
    logo: {
        content: `url${Digits}`,
        maxWidth: '20%', 
        height: 'auto'
    },
    navlogo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    column: {
        display: 'flex',
        flexDirection: 'column'
    },
    row: {
        display: 'flex',
        flexDirection: 'row'
    },
    p5: {
        padding: '5px'
    },
    spaceBetween: {
        justifyContent: 'space-between'
    },
    alignCenter: {
        alignItems: 'center'
    },
    ul: {
        listStyleType: 'none'
    },
    width60: {
        width: '60%'
    },
    width100: {
        width: '100%'
    },
    psides: {
        paddingRight: '10px',
        paddingLeft: '10px'
    }
  })

  return (
    <div>
        navbar 
    </div>
  )
}
