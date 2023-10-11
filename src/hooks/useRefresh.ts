import { useContext } from 'react'
import { RefreshContext } from 'contexts/RefreshContext'

const useRefresh = () => {
  const { fast, normal, slow } = useContext(RefreshContext)
  return { fastRefresh: fast, normalRefresh: normal, slowRefresh: slow }
}

export default useRefresh
