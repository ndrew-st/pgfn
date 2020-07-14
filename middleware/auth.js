import { isAuth } from '~/constants/getters/auth'

export default function ({ store: { getters }, redirect }) {
  if (!getters['auth/' + isAuth]) {
    redirect('/sign-in')
  }
}
