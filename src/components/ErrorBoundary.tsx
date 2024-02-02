import { Component, ReactElement } from 'react'

type Props = {
    children: ReactElement;
}

type State = {
    error: any;
}

export default class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            error: null
        }
    }

    static getDerivedStateFromError(error: any) {
        return {error: error}
    }

  render() {
    if (this.state.error) {
        return "something went wrong"
    }
    
    return this.props.children;
  }
}
