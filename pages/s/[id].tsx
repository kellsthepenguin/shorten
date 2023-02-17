import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import useSWR from 'swr'

interface Link {
  id?: string,
  url?: string
}

const fetcher = (url: string) => fetch(url).then(r => r.json())
const Redirect: NextPage = () => {
  const router = useRouter()
  const { data, error } = useSWR(`/api/linkinfo/${router.query['id']}`, fetcher) as { data: Link, error: any }
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  router.replace(data.url!)

  return (
    <div>
      Redirecting......
    </div>
  )
}

export default Redirect
