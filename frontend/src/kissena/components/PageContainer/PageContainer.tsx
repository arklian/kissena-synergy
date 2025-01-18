import { Container } from '@mantine/core'
import { PropsWithChildren } from 'react'
import styles from '@kissena/components/PageContainer/PageContainer.module.css'

interface PageContainerProps {
  wide?: boolean
}

export function PageContainer(props: PropsWithChildren<PageContainerProps>) {
  const classes = `${styles.pageContainer} ${props.wide ? styles.wide : styles.standard}`
  return <Container className={classes}>{props.children}</Container>
}
