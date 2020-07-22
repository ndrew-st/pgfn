export default function ({ app: { $storage }, redirect }) {
  if (process.browser) {
    if (!$storage.getItem(process.env.token_key.access)) {
      redirect('/sign-in')
    }
  }
}
