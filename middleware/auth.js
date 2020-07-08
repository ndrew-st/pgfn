import { isAuth } from '~/constants/getters/auth'

export default function ({ store: { getters }, redirect }) {
  if (!getters[isAuth]) {
    redirect('/sign-in')
  }
}
