import React from 'react'
import Router from 'next/router'
import { loadUser } from '../lib/authenticate'
import redirect from '../lib/redirect'

export default Page => {
  return class SecurePage extends React.Component {
    static async getInitialProps (ctx) {
      try {
        const { user } = await loadUser(ctx)
        if (!user) {
          return redirect(ctx)
        }
        let initialProps = {}
        if (Page.getInitialProps) {
          initialProps = Page.getInitialProps({ ...ctx, user })
        }
        return { user, ...initialProps }
      } catch (e) {
        throw e
      }
    }
    constructor (props) {
      super(props)

      this.logout = this.logout.bind(this)
    }

    logout (eve) {
      if (eve.key === 'logout') {
        Router.push(`/?logout=${eve.newValue}`)
      }
    }

    componentDidMount () {
      window.addEventListener('storage', this.logout, false)
    }

    componentWillUnmount () {
      window.removeEventListener('storage', this.logout, false)
    }
    render () {
      return <Page {...this.props} />
    }
  }
}
