import { ReactNode } from "react"
import { useOptionsQuery } from "../../services/options"
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";

type Props = {
  children: ReactNode
}

function BootstrapProvider(props: Props) {
  const query = useOptionsQuery();

  if (query.isLoading) {
    return <LoadingIndicator />
  }

  return props.children
}

export default BootstrapProvider
