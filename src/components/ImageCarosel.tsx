import React from 'react';
import { Carousel } from 'antd';
import { createUseStyles } from 'react-jss';
import { useTheme } from '@mui/material/styles';
import { Image } from 'antd';

interface ImageCaroselProps {
  imageUrls: string[]
}

const useStyles = createUseStyles({
  imgContainer: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: ({ bgColor }: { bgColor: string }) => bgColor,
    borderRadius: 20
  }
})

export default function ({ imageUrls }: ImageCaroselProps) {
  const theme = useTheme()
  const classes = useStyles({
    bgColor: theme.palette.primary.light,
  });


  return (
    <Carousel autoplay dotPosition="left" effect='fade'>
      {imageUrls.map(url => <div
        style={{
          display: 'flex',
          justifyContent: 'center'
        }}>
        <div className={classes.imgContainer}>
          <Image
            src={url}
            style={{
              height: 300,
              objectFit: 'contain'
            }}
          />
        </div>
      </div>)}
    </Carousel>
  )
}