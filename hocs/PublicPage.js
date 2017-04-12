import React from 'react'
import Router from 'next/router'
import { loadUser } from '../lib/authenticate'
import redirect from '../lib/redirect'

export default Page => {
  return class PublicPage extends React.Component {
    static async getInitialProps (ctx) {
      try {
        const { user } = await loadUser(ctx)
        let initialProps = {}
        if (Page.getInitialProps) {
          initialProps = Page.getInitialProps({ ...ctx, user })
        }
        if (!user) {
          return { ...initialProps }
        }
        const pathName = ctx.req ? ctx.req.url : ctx.pathname
        if (pathName === '/login') {
          return redirect(ctx, '/')
        }
        return { user, ...initialProps }
      } catch (e) {
        throw e
      }
    }
    constructor (props) {
      super(props)

      this.handleAuthChange = this.handleAuthChange.bind(this)
    }

    handleAuthChange (eve) {
      if (eve.key === 'logout') {
        Router.push(`/?logout=${eve.newValue}`)
      }
    }

    componentDidMount () {
      window.addEventListener('storage', this.handleAuthChange, false)
    }

    componentWillUnmount () {
      window.removeEventListener('storage', this.handleAuthChange, false)
    }
    render () {
      return <Page {...this.props} />
    }
  }
}
