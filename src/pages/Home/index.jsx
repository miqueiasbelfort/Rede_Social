import {makeStyles} from "@mui/material"

//components
import Feed from "./components/Feed"
import Header from "./components/Header"
import Navbar from "./components/Navbar"

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column'
    }
})

function Home() {

    const classes = useStyles()
 
    return (
        <div className={classes.root}>

            <header className="header">
                <Header/>
            </header>

            <main className="main">
                
            </main>
        </div>
    )
}
export default Home