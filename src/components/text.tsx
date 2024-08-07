const Text = ({ text, variant }: { text: String, variant: "primary" | "secondary" }) => {
   let styles = ""

   switch (variant) {
      case "primary":
         styles += " text-foreground text-xs sm:text-sm lg:text-medium"
         break;
      case "secondary":
         styles += " text-foreground-400 text-xs sm:text-sm"
   }

   return <p className={styles}>{text}</p>
}
export default Text
