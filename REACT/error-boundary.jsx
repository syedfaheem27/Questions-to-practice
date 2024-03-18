import React from "react";


class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false }
    }


    static getDerivedStateFromError(error) {
        this.state.hasError = true;
    }

    componentDidCatch(err) {
        //Can perform side effects here
        console.log(err);

    }


    render() {
        if (this.state.hasError)
            return <h1>{this.props.fallback}</h1>


        return <>
            {this.props.children}
        </>
    }
}


//Using it

/*
<ErrorBoundary fallback={<p>Something went wrong</p>}>
  <Profile />
</ErrorBoundary>
*/
