import PublicPage from '../hocs/PublicPage'
import Header from '../components/Header'

const Index = ({ user }) => (
  <div>
    <Header title='Home Page' user={user} />
    <main>
      <section>
        <h1>Hello, {user ? user.phoneNumber : 'friend'}</h1>
        <p>
          This is a super simple public page.
        </p>
      </section>
    </main>
    <style jsx>
      {
        `
      main {
        padding-top: 20px;
      }
      section {
        padding: 20px;
        text-align: center;
      }
    `
      }
    </style>
  </div>
)

export default PublicPage(Index)
