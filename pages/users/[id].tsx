import Layout from "../../component/layout"

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

interface UserDetailProps {
  user: User;
}

export default function UserDetail(props: UserDetailProps) {
  const { user } = props

    return (
        <Layout titlePage="User Detail">
          <ul>
            <li>{user.name}</li>
            <li>{user.email}</li>
            <li>{user.phone}</li>
            <li>{user.website}</li>
          </ul>
        </Layout>
    )
}

export async function getStaticPaths() {
  const users = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await users.json();
  const paths = dataUsers.map( (user : User) => ({
    params: {
      id : `${user.id}`
    }
  }))
  return {
    paths,
    fallback: false,
  }
}

interface GetStaticProps {
  params: {
    id: string;
  }
}

export async function getStaticProps(context: GetStaticProps) {
  const {id} = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const iduser = await res.json();
  return {
    props: {
      user: iduser,
    }
  }
}