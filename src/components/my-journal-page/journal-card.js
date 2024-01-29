import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function JournalCard({ data }) {
  console.log(data.entries);

  return (
    <div className="w-full md:w-1/3 lg:w-1/6 p-2">
      <Card
        variant="contained"
        className=" shadow-lg overflow-scroll max-h-44 cursor-pointer pb-3 relative"
      >
        <CardContent
          sx={{
            "&::before": {
              content: "''",
              width: "100%",
              height: "100%",
              position: "absolute",
              left: 0,
              top: 0,
              background: "linear-gradient(transparent 150px, white)",
            },
          }}
        >
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {data.title}
          </Typography>
          <Typography variant="h5" component="div"></Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {new Date(data.date).toLocaleDateString("en-GB")}
          </Typography>
          <Typography variant="body2">
            {data.entries.map((el) => {
              return (
                <div>
                  {el.content} <br />
                </div>
              );
            })}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default JournalCard;
