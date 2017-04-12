import cookie from 'react-cookie'
import NProgress from 'nprogress'
import axios from 'axios'
import Router from 'next/router'

const API_URL = 'https://digits-auth.now.sh/api'

const fetchUser = async () => {
  const token = cookie.load('token')
  if (!token) {
    return
  }
  try {
    const result = await axios.get(`${API_URL}/users/me`, {
      headers: {
        'x-auth': token
      }
    })
    return result.data.user
  } catch (e) {
    return Promise.reject(e)
  }
}

export const loadUser = async ({ req, res }) => {
  if (!req) {
    const localUser = JSON.parse(window.localStorage.getItem('user'))
    if (localUser && localUser._id) {
      return {
        user: localUser
      }
    }
  }
  if (req) {
    cookie.setRawCookie(req.headers.cookie)
  }
  try {
    const user = await fetchUser()
    return { user }
  } catch (e) {
    return Promise.reject(e)
  }
}

export const sendCode = async ({ phoneNumber, countryCode, method }) => {
  try {
    const { data } = await axios.post(`${API_URL}/sendcode`, {
      phoneNumber,
      countryCode,
      method
    })
    if (data.token) {
      return data.token
    }
    return Promise.reject(data)
  } catch (e) {
    return Promise.reject(e)
  }
}

export const verifyCode = async ({ token, code }) => {
  try {
    const { data } = await axios.post(`${API_URL}/verifycode`, {
      token,
      code
    })
    if (data.user) {
      cookie.save('token', data.token, { path: '/' })
      window.localStorage.setItem('user', JSON.stringify(data.user))
      return data
    }
    if (!data.success) {
      return Promise.reject(data.errors[0])
    }
    return Promise.reject(data)
  } catch (e) {
    return Promise.reject(e)
  }
}

export const logout = async () => {
  const token = cookie.load('token')
  NProgress.start()
  try {
    await axios.delete(`${API_URL}/users/me/token`, {
      headers: {
        'x-auth': token
      }
    })
    cookie.remove('token')
    window.localStorage.removeItem('user')
    window.localStorage.setItem('logout', Date.now())
    NProgress.done()
    await Router.push('/')
  } catch (e) {
    NProgress.done()
    throw e
  }
}
