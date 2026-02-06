import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function Header() {
  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "flex-start", md: "center" },
        justifyContent: "flex-start",
        columnGap: { xs: 3, md: "270px" },
        rowGap: 2,
        mb: 4,
        maxWidth: 980,
        mx: "auto",
      }}
    >
      <Box sx={{ maxWidth: 720 }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: 700, letterSpacing: -0.5, textAlign: "left", ml: 0, pl: 0 }}
        >
          Taehoon Yoon
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{
            mt: 1,
            fontWeight: 500,
            textTransform: "uppercase",
            textAlign: "left",
            lineHeight: 1.5,
            ml: 0,
            pl: 0,
          }}
        >
          ASPIRING APPLIED AI ENGINEER LEVERAGING
          <br />
          A FULL STACK BACKGROUND TO BUILD
          <br />
          AI-POWERED SOLUTIONS
        </Typography>
      </Box>

      <Stack spacing={0.6} sx={{ textAlign: { xs: "left", md: "right" } }}>
        <Typography variant="body2">
          Email:{" "}
          <Link href="mailto:devtae10@gmail.com" color="inherit" underline="hover">
            devtae10@gmail.com
          </Link>
        </Typography>
        <Typography variant="body2">
          Portfolio:{" "}
          <Link href="https://taecodes.com" color="inherit" underline="hover">
            taecodes.com
          </Link>
        </Typography>
        <Typography variant="body2">Location: Elizabeth, NJ</Typography>
        <Typography variant="body2">
          LinkedIn:{" "}
          <Link
            href="https://www.linkedin.com/in/developer-tae"
            color="inherit"
            underline="hover"
          >
            www.linkedin.com/in/developer-tae
          </Link>
        </Typography>
      </Stack>
    </Box>
  );
}
