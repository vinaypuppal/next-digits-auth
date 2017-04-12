import Head from 'next/head'

export default ({ title }) => (
  <Head>
    <meta charSet='utf-8' />
    <meta
      name='viewport'
      content='width=device-width, initial-scale=1.0, maximum-scale=1.0'
    />
    <title>{title}</title>
  </Head>
)
