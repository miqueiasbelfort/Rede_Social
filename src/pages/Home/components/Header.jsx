import Button from '@mui/material/Button'

function Header() {
    return (
      <div className="toolbar">
        <div>
          <a href="/">Rede Social</a>
        </div>
        <div>
            <Button variant="contained">novo post</Button>
            <span>img1</span>
            <span>img2</span>
        </div>
      </div>
    );
}
export default Header