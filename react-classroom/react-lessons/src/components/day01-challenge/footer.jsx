function Footer() {
  let latestDate = new Date();
  let currentYear = latestDate.getFullYear();

  return (
    <footer>
      <p>&copy; Eleven Fifty {currentYear}</p>
    </footer>
  );
}

export default Footer;
