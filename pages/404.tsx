import { useRouter } from "next/router";
import { useEffect } from "react"


export default function Custom404() {

  const router = useRouter() //digunakan untuk melakukan auto redirections
  useEffect(() => {
    setTimeout(() => {
      console.log(`Dipanggil setelah 5 detik`)
      router.push('/')
    }, 5000);
  }, [])

  return (
    <div>
      <h3 className="title-not-found">Ooops...</h3>
      <h3 className="title-not-found">404 | Halaman tidak ditemukan</h3>
    </div>
  )
};
