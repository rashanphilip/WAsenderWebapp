import { gitRepo } from '../utils/constants';

function Footer() {
  return (
    <footer>
      <p>
        Copyright &copy; {new Date().getFullYear()} &nbsp;
        <a target="_blank" rel="noopener noreferrer" href="https://rizad.ml/">
          Muhammed Rizad
        </a>
        &nbsp; |&nbsp;{' '}
        <a href={`${gitRepo}/blob/master/LICENSE`} target="_blank" rel="noopener noreferrer">
          License
        </a>
      </p>
    </footer>
  );
}

export default Footer;
