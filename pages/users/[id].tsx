import { useRouter } from "next/router"

export default function UserDetail() {
  const router = useRouter()
  const {id} = router.query
    return (
        <div>
          <h2>User Detail Page {id} </h2>
        </div>
    )
}