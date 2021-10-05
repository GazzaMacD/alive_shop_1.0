import styles from './Footer.module.scss';

interface IFooterProps {
  children: React.ReactNode;
}

const Footer = ({ children }: IFooterProps): JSX.Element => {
  return <footer className={styles.Footer}>{children}</footer>;
};

export { Footer };
