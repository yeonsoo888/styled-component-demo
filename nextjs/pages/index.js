import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Button from './components/atoms/Button'

export default function Home() {
  return (
    <div className={styles.container}>
        <Button color="#fff" background="#ff9999">짧은</Button>
        <Button color="#000" background="#ffff99">긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글</Button>
        <Button color="#000" background="#99ffff">Hello</Button>
        <Button color="#fff" background="#9999ff">hi</Button>
    </div>
  )
}
