import SecurePage from '../hocs/SecurePage'
import Header from '../components/Header'

const Private = ({ user }) => (
  <div>
    <Header title='Private Page' user={user} />
    <main>
      <section>
        <h1>Hello, {user.phoneNumber}</h1>
        <p>
          This is a super simple Private page.
        </p>
        <code>
          <pre>
            {JSON.stringify(user, null, 2)}
          </pre>
        </code>
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
      pre {
        max-width: 600px;
        margin: 0 auto;
        background: #666;
        color: #fff;
        text-align: left;
        padding: 20px;
      }
    `
      }
    </style>
  </div>
)

export default SecurePage(Private)
