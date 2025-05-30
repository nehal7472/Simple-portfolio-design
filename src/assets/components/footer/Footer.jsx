export default function Footer({ darkMode }) {
  return (
    <p
      className={`text-center py-4 bg-secondaryBgColor dark:bg-darkSecondaryBgColor  text-textGray dark:text-darkTextColor ${
        darkMode ? "text-white bg-darkPrimaryBgColor" : "text-textColor"
      }`}
    >
      Ahsanul Haque - 2025.
    </p>
  );
}
