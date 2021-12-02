import styles from '../../styles/Users.module.css';
import { useRouter } from "next/router";
import Layout from "../../component/layout";


/**
 * Halaman ini digunakan jika kita ingin memlakukan routing ke "localhost:3000/users",
 * karena users berbentuk folder maka harus ada file index didalamnya.
 */

interface UsersProps {
  dataUsers: Array<any>;
}

export default function Users(props: UsersProps) {
  const {dataUsers} = props
  const router = useRouter()
  //console.log(dataUsers);
  
  return (  
    <Layout titlePage="Users Page">
      {dataUsers.map(user => {
        return (
          <div className={styles.card} key={user.id} onClick={() => router.push(`/users/${user.id}`)}>
            <p className={styles.item}>{user.name}</p>
            <p className={styles.item}>{user.email}</p>
          </div>
        )
      })}
    </Layout>
    
  )
}

export async function getStaticProps() {
  const users = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await users.json();
  return {
    props: {
      dataUsers,  
    }
  }
}